import PageTemplate from '@/components/templates/PageTemplate';
import Footer from '@/components/organisms/Footer';
import HeaderWallet from '@/components/organisms/HeaderWallet';

function ProfilePage() {
  return (
    <PageTemplate header={<HeaderWallet />} footer={<Footer />}>
      <main></main>
    </PageTemplate>
  );
}

export default ProfilePage;
