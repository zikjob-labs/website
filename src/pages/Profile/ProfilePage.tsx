import PageTemplate from '@/components/templates/PageTemplate';
import Footer from '@/components/organisms/Footer';
import HeaderWallet from '@/components/organisms/HeaderWallet';
import GuestProfile from '@/components/organisms/GuestProfile';
import UserProfile from '@/components/organisms/UserProfile';
import { useAccount } from 'wagmi';

function ProfilePage() {
  const { data: account } = useAccount();

  return (
    <PageTemplate header={<HeaderWallet />} footer={<Footer />}>
      <main>{account ? <UserProfile /> : <GuestProfile />}</main>
    </PageTemplate>
  );
}

export default ProfilePage;
