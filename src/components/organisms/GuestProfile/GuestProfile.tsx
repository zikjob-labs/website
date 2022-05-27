import { LogoNoText } from '@/assets/svg';
import ConnectButton from '@/components/molecules/WalletButton/ConnectButton';

function GuestProfile() {
  return (
    <section className="my-10">
      <div className="container flex flex-col justify-start">
        <h2 className="text-3xl font-semibold mb-2">Zik Profile</h2>
        <p className="w-full lg:w-[60%] text-gray-700 dark:text-gray-200">
          ZIK is a profile that replaces the traditional CV when it includes
          comprehensive and complete information from candidates&#39; CV with
          portfolio and implemented projects verified by ZIK team&#39;s members,
          therefore boosting the transparency and reliability.
        </p>
      </div>
      <div className="container">
        <div className="shadow-[0_0_20px_0_rgba(0,0,0,0.1)] dark:bg-midnight-800 rounded-lg flex flex-col justify-center items-center mt-14 pb-10">
          <LogoNoText className="w-24 h-24 lg:w-60 lg:h-60 text-primary dark:text-light" />
          <h3 className="text-lg lg:text-2xl font-medium">
            Please, connect your wallet
          </h3>
          <span className="text-gray-600 dark:text-gray-200 mb-8 text-center">
            Please connect your wallet to see your profile.
          </span>
          <ConnectButton />
        </div>
      </div>
    </section>
  );
}

export default GuestProfile;
