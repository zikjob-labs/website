// import useProfileStore from '@/stores/useProfileStore';
import { Fragment, FunctionComponent } from 'react';

import toast from 'react-hot-toast';
import { SiweMessage } from 'siwe';
import { useConnect, useDisconnect } from 'wagmi';

import { IconSpin } from '@/assets/svg';
import { ModalHandle } from '@/components/atoms/Modal/Modal';
import useProfileStore from '@/stores/useProfileStore';
import { getNonce, me, verifyMessage } from '@/apis/api';

interface Props {
  item: {
    id: string;
    label: string;
    svg: FunctionComponent;
  };
  modalRef: React.RefObject<ModalHandle>;
}

function WalletItem({ item, modalRef }: Props) {
  const [checkZikkie, loadZikkie, setProfile, setIsLogged] = useProfileStore(
    (state) => [
      state.checkZikkie,
      state.loadZikkie,
      state.setProfile,
      state.setIsLogged,
    ]
  );
  const { disconnect } = useDisconnect({
    onError: (error) => {
      toast.error(error.message);
    },
  });
  const { connectAsync, connectors, isConnecting, pendingConnector } =
    useConnect({
      onConnect: async () => {
        toast.success('Connected!');
        modalRef.current?.close();
        await checkZikkie();
        await loadZikkie();
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  const connector = connectors.find((i) => i.id == item.id);

  const connect = async () => {
    try {
      const res = await connectAsync(connector);

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
