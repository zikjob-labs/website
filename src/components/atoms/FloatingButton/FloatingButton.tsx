import { IconAdd } from '@/assets/svg';
import { FunctionComponent, SVGProps } from 'react';

interface Props {
  onClick?: () => void;
  svg?: {
    src: FunctionComponent<SVGProps<SVGSVGElement>>;
  };
}

function FloatingButton({ onClick, svg }: Props) {
  return (
    <button
      className="fixed bottom-8 right-8 p-0 w-12 h-12 bg-gradient-to-b hover:bg-gradient-to-r from-blue-400 to-blue-800 rounded-full active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none"
      onClick={onClick}
    >
      {svg ? (
        <svg.src className="m-auto text-light" />
      ) : (
        <IconAdd className="m-auto text-light" />
      )}
    </button>
  );
}

export default FloatingButton;
