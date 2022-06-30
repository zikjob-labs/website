import { LSP3Profile } from '@/types/lukso';
import {
  Education,
  Experience,
  Profile,
  Skill,
  ZikJobProfile,
} from '@/types/profile';

export const makeLsp3ProfileJson = (data: LSP3Profile) => {
  const { name, description } = data;
  const lsp3ProfileJson: LSP3Profile = {
    name,
    description,
  };

  return {
    LSP3Profile: lsp3ProfileJson,
  };
};

export const makeZikJobProfileJson = (data: Profile) => {
  const {
    fullName,
    headline,
    isFreelancer,
    canContact,
    gender,
    country,
    videoUrl,
    industries,
    introduce,
    education,
    experiences,
    skills,
  } = data;

  const zikjobProfileJson: ZikJobProfile = {
    ZikJobProfile: {
      fullName,
      headline,
      isFreelancer,
      canContact,
      gender,
      country,
      videoUrl,
      industries,
      introduce,
      education: education?.map((edu) => ({
        school: edu.school.name,
        major: edu.major,
        startMonth: edu.start.month,
        startYear: edu.start.year,
        endMonth: edu.end?.month,
        endYear: edu.end?.year,
        description: edu.description,
      })),
      experiences: experiences?.map((exp) => ({
        companyName: exp.company.name,
        position: exp.position,
        startMonth: exp.start.month,
        startYear: exp.start.year,
        endMonth: exp.end?.month,
        endYear: exp.end?.year,
        description: exp.description,
      })),
      skills: skills?.map((skill) => skill.name),
    },
  };

  return zikjobProfileJson;
};

export const parseZikJobProfileJson = (data: ZikJobProfile): Profile => {
  const {
    fullName,
    headline,
    isFreelancer,
    canContact,
    gender,
    country,
    videoUrl,
    industries,
    introduce,
    education,
    experiences,
    skills,
  } = data.ZikJobProfile;

  return {
    fullName,
    headline,
    isFreelancer,
    canContact,
    gender,
    country,
    videoUrl,
    industries,
    introduce,
    education: education?.map(
      (edu) =>
        ({
          school: {
            name: edu.school,
          },
          major: edu.major,
          start: {
            month: edu.startMonth,
            year: edu.startYear,
          },
          end: {
            month: edu.endMonth,
            year: edu.endYear,
          },
          description: edu.description,
        } as Education)
    ),
    experiences: experiences?.map(
      (exp) =>
        ({
          company: {
            name: exp.companyName,
          },
          position: exp.position,
          start: {
            month: exp.startMonth,
            year: exp.startYear,
          },
          end: {
            month: exp.endMonth,
            year: exp.endYear,
          },
          description: exp.description,
        } as Experience)
    ),
    skills: skills?.map((skill) => ({ name: skill } as Skill)),
  };
};
