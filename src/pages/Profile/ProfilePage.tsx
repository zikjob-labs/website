import PageTemplate from '@/components/templates/PageTemplate';
import Footer from '@/components/organisms/Footer';
import HeaderWallet from '@/components/organisms/HeaderWallet';
import GuestProfile from '@/components/organisms/GuestProfile';
import { useAccount } from 'wagmi';

function ProfilePage() {
  const { data: account } = useAccount();

  return (
    <PageTemplate header={<HeaderWallet />} footer={<Footer />}>
      <main>{account ? <div>User Profile</div> : <GuestProfile />}</main>
    </PageTemplate>
  );
}

export default ProfilePage;
