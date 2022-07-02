import PageTemplate from '@/components/templates/PageTemplate';
import Footer from '@/components/organisms/Footer';
import HeaderWallet from '@/components/organisms/HeaderWallet';
import GuestProfile from '@/components/organisms/GuestProfile';
import UserProfile from '@/components/organisms/UserProfile';
import { useAccount } from 'wagmi';
import useProfileStore from '@/stores/useProfileStore';
import { logout } from '@/apis/api';
import toast from 'react-hot-toast';

function ProfilePage() {
  const [checkZikkie, loadZikkie, setIsLogged] = useProfileStore((state) => [
    state.checkZikkie,
    state.loadZikkie,
    state.setIsLogged,
  ]);
  const { isConnected } = useAccount({
    async onConnect() {
      document.body.style.removeProperty('overflow');
      toast.success('Connected!');
      await checkZikkie();
      await loadZikkie();
    },
    async onDisconnect() {
      toast.success('Disconnected!');
      await logout();
      setIsLogged(false);
    },
  });

  return (
    <PageTemplate header={<HeaderWallet />} footer={<Footer />}>
      <main>{isConnected ? <UserProfile /> : <GuestProfile />}</main>
    </PageTemplate>
  );
}

export default ProfilePage;
