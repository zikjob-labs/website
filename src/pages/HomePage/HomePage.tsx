import PageTemplate from '@/components/templates/PageTemplate';
import Header from '@/components/organisms/Header';
import Footer from '@/components/organisms/Footer';
import Hero from '@/components/organisms/HomeBody/Hero';
import EarthSection from '@/components/organisms/HomeBody/EarthSection';
import WhatIsZikJobSection from '@/components/organisms/HomeBody/WhatIsZikJobSection';
import FeatureSection from '@/components/organisms/HomeBody/FeatureSection';
import EcosystemSection from '@/components/organisms/HomeBody/EcosystemSection';
import RoadmapSection from '@/components/organisms/HomeBody/RoadmapSection';
import InvestorSection from '@/components/organisms/HomeBody/InvestorSection';
import PartnerSection from '@/components/organisms/HomeBody/PartnerSection';
import CommunitySection from '@/components/organisms/HomeBody/CommunitySection';
import SubscriptionSection from '@/components/organisms/HomeBody/SubscriptionSection';

function HomePage() {
  return (
    <PageTemplate header={<Header />} footer={<Footer />}>
      <main>
        <Hero />
        <EarthSection />
        <WhatIsZikJobSection />
        <FeatureSection />
        <EcosystemSection />
        <RoadmapSection />
        <InvestorSection />
        <PartnerSection />
        <CommunitySection />
        <SubscriptionSection />
      </main>
    </PageTemplate>
  );
}

export default HomePage;
