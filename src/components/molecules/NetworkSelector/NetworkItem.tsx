import { FunctionComponent } from 'react';
import toast from 'react-hot-toast';
import { useNetwork } from 'wagmi';

interface Props {
  item: {
    id: number;
    text: string;
    img: FunctionComponent;
    active: boolean;
  };
}

function NetworkItem({ item }: Props) {
  const { switchNetwork } = useNetwork({
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return (
    <li
      className={`${item.active ? 'active' : ''} dropdown__item`}
      onClick={() => switchNetwork?.(item.id)}
    >
      <item.img /> {item.text}
    </li>
  );
}

export default NetworkItem;
