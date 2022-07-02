// import useProfileStore from '@/stores/useProfileStore';
import { Fragment, FunctionComponent } from 'react';

import toast from 'react-hot-toast';
import { SiweMessage } from 'siwe';
import { useAccount, useConnect, useDisconnect } from 'wagmi';

import { IconSpin } from '@/assets/svg';
import useProfileStore from '@/stores/useProfileStore';
import { getNonce, me, verifyMessage } from '@/apis/api';

interface Props {
  item: {
    id: string;
    label: string;
    svg: FunctionComponent;
  };
}

function WalletItem({ item }: Props) {
  const [setProfile, setIsLogged] = useProfileStore((state) => [
    state.setProfile,
    state.setIsLogged,
  ]);
  const { disconnect } = useDisconnect({
    onError: (error) => {
      toast.error(error.message);
    },
  });
  const { isConnecting } = useAccount();
  const { connectAsync, connectors, pendingConnector } = useConnect({
    onError: (error) => {
      toast.error(error.message);
    },
  });
  const connector = connectors.find((i) => i.id == item.id);

  const connect = async () => {
    const res = await connectAsync({ connector });
    try {
      const message = new SiweMessage({
        domain: window.location.host,
        address: res.account,
        statement: 'Sign in to the ZikJob Profile.',
        uri: window.location.origin,
        version: '1',
        chainId: res.chain?.id,
        nonce: await getNonce(),
      });

      const signer = await connector?.getSigner();
      const signature = await signer?.signMessage(message.prepareMessage());

      await verifyMessage({ message, signature });
      setIsLogged(true);

      const meRes = await me();
      setProfile(
        {
          email: meRes.data?.email,
          phone: meRes.data?.phone,
        },
        false
      );

      toast.success('Sign in successfully!');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.message);
      disconnect();
    }
  };

  return (
    <Fragment>
      {connector?.ready && !isConnecting && (
        <div className="modal__wallet__item" onClick={connect}>
          <span>{item.label}</span>
          <item.svg />
        </div>
      )}
      {isConnecting && item.id == pendingConnector?.id && (
        <div className="modal__wallet__item">
          <span>Waiting...</span>
          <IconSpin className="spinner" />
        </div>
      )}
    </Fragment>
  );
}

export default WalletItem;
