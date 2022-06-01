import { isMobile } from '@/utils/userAgent';
// import StaticBox from './StaticBox';
// import ProjectBox from './ProjectBox';
// import PortfolioBox from './PortfolioBox';
// import AchievementBox from './AchievementBox';
// import CertificateBox from './CertificateBox';
import SkillBox from './SkillBox';
import ExperienceBox from './ExperienceBox';
import EducationBox from './EducationBox';
import CompletionProgressBox from './CompletionProgressBox';
import ArrangeButton from './ArrangeButton';
import InfoBasicBox from './InfoBasicBox';
import MobileInfoBasicBox from './MobileInfoBasicBox';

function UserProfile() {
  return (
    <section className="profile my-10">
      {isMobile ? <MobileInfoBasicBox /> : <InfoBasicBox />}
      <ArrangeButton />
      <CompletionProgressBox />
      <EducationBox />
      <ExperienceBox />
      <SkillBox />
      {/* Milestone 2
      <CertificateBox /> */}
      {/* Milestone 3
      <AchievementBox /> */}
      {/* Milestone 2
      <ProjectBox />
      <PortfolioBox /> */}
      {/* Milestone 3
      <StaticBox /> */}
    </section>
  );
}

export default UserProfile;
