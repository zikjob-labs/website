import { isMobile } from '@/utils/userAgent';
import ActionBar from './ActionBar';
// import StaticBox from './StaticBox';
// import ProjectBox from './ProjectBox';
// import PortfolioBox from './PortfolioBox';
// import AchievementBox from './AchievementBox';
// import CertificateBox from './CertificateBox';
import { BasicInfoBox, MobileBasicInfoBox } from './BasicInfo';
import CompletionProgressBox from './CompletionProgressBox';
import EducationBox from './EducationBox';
import ExperienceBox from './ExperienceBox';
import SkillBox from './SkillBox';

function UserProfile() {
  return (
    <section className="profile my-10">
      {isMobile ? <MobileBasicInfoBox /> : <BasicInfoBox />}
      <ActionBar />
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
