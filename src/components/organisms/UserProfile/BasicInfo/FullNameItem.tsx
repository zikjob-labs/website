import { usePopper } from 'react-popper';
import { parseWalletAddress } from '@/utils';
import { Profile } from '@/types/profile';
import { useAccount } from 'wagmi';
import { useState } from 'react';
import { IconTick } from '@/assets/svg';

interface Props {
  profile?: Profile;
}

function FullNameItem({ profile }: Props) {
  const { data: account } = useAccount();
  const [referenceElement, setReferenceElement] =
    useState<HTMLHeadElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  );
  const [arrowElement, setArrowElement] = useState<HTMLDivElement | null>(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [
      {
        name: 'arrow',
        phase: 'afterWrite',
        options: { element: arrowElement },
      },
      {
        name: 'eventListeners',
        phase: 'write',
        options: {
          scroll: false,
        },
      },
    ],
    placement: 'top',
  });

  return (
    <h3
      className="group inline-flex items-center text-xl font-semibold break-all"
      ref={setReferenceElement}
    >
      {profile?.fullName && profile.fullName != ''
        ? profile.fullName
        : parseWalletAddress(account?.address)}
      <div
        ref={setPopperElement}
        className="hidden group-hover:block py-1 px-3 text-xs font-medium text-white bg-gray-900 rounded-lg shadow-sm dark:bg-gray-700"
        style={styles.popper}
        {...attributes.popper}
      >
        {profile?.fullName && profile.fullName != ''
          ? profile.fullName
          : account?.address}
        <div
          ref={setArrowElement}
          className="invisible absolute bg-gray-900 before:bg-gray-900 before:absolute w-2 h-2 before:w-2 before:h-2 before:visible before:content-[''] before:rotate-45"
          style={styles.arrow}
        />
      </div>
      {profile?.isVerified && (
        <div className="ml-2 w-5 h-5 rounded-full flex justify-center items-center bg-primary text-light  mr-1">
          <IconTick className="w-full h-full" />
        </div>
      )}
    </h3>
  );
}

export default FullNameItem;
