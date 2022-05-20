import PageTemplate from '@/components/templates/PageTemplate';
import Header from '@/components/organisms/Header';
import Footer from '@/components/organisms/Footer';
import Hero from '@/components/organisms/Hero';
import EarthSection from '@/components/organisms/EarthSection';
import WhatIsZikJobSection from '@/components/organisms/WhatIsZikJobSection';
import FeatureSection from '@/components/organisms/FeatureSection';
import EcosystemSection from '@/components/organisms/EcosystemSection';
import RoadmapSection from '@/components/organisms/RoadmapSection';
import InvestorSection from '@/components/organisms/InvestorSection';
import PartnerSection from '@/components/organisms/PartnerSection';
import CommunitySection from '@/components/organisms/CommunitySection';
import SubscriptionSection from '@/components/organisms/SubscriptionSection';

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
