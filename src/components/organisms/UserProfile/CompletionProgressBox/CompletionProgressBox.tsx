import {
  IconAdd,
  IconPagingBottom,
  IconPagingTop,
  IconTick,
} from '@/assets/svg';
import { ModalHandle } from '@/components/atoms/Modal/Modal';
import { getModalRef } from '@/hooks/useModalRefOutside';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import useProfileStore from '@/stores/useProfileStore';
import { useRef, useState } from 'react';

function CompletionProgressBox() {
  const profile = useProfileStore((state) => state.profile);
  const ref = useRef(null);
  const [open, setOpen] = useState(false);
  useOnClickOutside(ref, () => {
    setOpen(false);
  });

  let percent = 0,
    isFilledEducation = false,
    isFilledExperience = false,
    isFilledSkill = false,
    isFilledCertificate = false,
    isFilledProjectOrPortfolio = false;

  percent += profile?.fullName ? 5 : 0;
  percent += profile?.avatar ? 5 : 0;
  percent += profile?.country ? 5 : 0;
  percent += profile?.phone ? 5 : 0;
  percent += profile?.email ? 5 : 0;
  percent += profile?.industries && profile.industries.length > 0 ? 5 : 0;
  percent += profile?.introduce ? 10 : 0;
  if (
    profile?.education &&
    profile.education.length > 0 &&
    profile.education.filter((edu) => edu.school.name && edu.major).length > 0
  ) {
    percent += 10;
    isFilledEducation = true;
  }

  if (
    profile?.experiences &&
    profile.experiences.length > 0 &&
    profile.experiences.filter((exp) => exp.company.name && exp.position)
      .length > 0
  ) {
    percent += 10;
    if (
      profile.experiences.filter((exp) => Boolean(exp.description)).length > 0
    ) {
      percent += 5;
      isFilledExperience = true;
    }
  }

  if (profile?.skills && profile.skills.length >= 3) {
    percent += 10;
    isFilledSkill = true;
  }

  if (
    profile?.certificates &&
    profile.certificates.length > 0 &&
    profile.certificates.filter((cert) => cert.name && cert.issueBy).length > 0
  ) {
    percent += 5;
    isFilledCertificate = true;
  }

  if (
    profile?.projects &&
    !profile?.portfolio &&
    profile.projects.length > 0 &&
    profile.projects.filter((proj) => proj.name && proj.description).length > 0
  ) {
    percent += 15;
    percent +=
      profile.projects.filter((proj) => Boolean(proj.image)).length > 0 ? 5 : 0;
    isFilledProjectOrPortfolio = true;
  }

  if (!profile?.projects && profile?.portfolio?.src) {
    percent += 20;
    isFilledProjectOrPortfolio = true;
  }

  const isFilledBasicInfo =
    profile?.fullName &&
    profile.avatar &&
    profile.country &&
    profile.phone &&
    profile.email &&
    profile.industries;

  const percentCircle = [
    {
      text: 'Basic',
      percentNeeded: 20,
    },
    {
      text: 'Intermediate',
      percentNeeded: 50,
    },
    {
      text: 'Advanced',
      percentNeeded: 75,
    },
    {
      text: 'Completion',
      percentNeeded: 100,
    },
  ];

  const filledBox = [
    [
      {
        text: 'Personal Information',
        isFilled: isFilledBasicInfo,
      },
      {
        text: 'Certificates',
        isFilled: isFilledCertificate,
      },
    ],
    [
      {
        text: 'Education',
        isFilled: isFilledEducation,
      },
      {
        text: 'Portfolio & Project',
        isFilled: isFilledProjectOrPortfolio,
      },
    ],
    [
      {
        text: 'Experiences',
        isFilled: isFilledExperience,
      },
    ],
    [
      {
        text: 'Skills',
        isFilled: isFilledSkill,
      },
    ],
  ];

  const openEditInfoModal = () => {
    const modal = getModalRef<ModalHandle>('edit-info-modal');
    modal?.open();
    setOpen(false);
  };
  const openAddEducationModal = () => {
    const modal = getModalRef<ModalHandle>('add-education-modal');
    modal?.open();
    setOpen(false);
  };
  const openAddExperienceModal = () => {
    const modal = getModalRef<ModalHandle>('add-experience-modal');
    modal?.open();
    setOpen(false);
  };
  const openSkillModal = () => {
    const modal = getModalRef<ModalHandle>('skill-modal');
    modal?.open();
    setOpen(false);
  };

  const tasks = [
    {
      text: 'Add avatar (5%)',
      action: () => alert('Coming soon!'),
      // Milestone 2
      isCompleted: false, // Boolean(profile?.avatar),
    },
    {
      text: 'Add full name (5%)',
      action: openEditInfoModal,
      isCompleted: Boolean(profile?.fullName),
    },
    {
      text: 'Add nationality (5%)',
      action: openEditInfoModal,
      isCompleted: Boolean(profile?.country),
    },
    {
      text: 'Add phone number (5%)',
      action: openEditInfoModal,
      isCompleted: Boolean(profile?.phone),
    },
    {
      text: 'Add email (5%)',
      action: openEditInfoModal,
      isCompleted: Boolean(profile?.email),
    },
    {
      text: 'Add industry (5%)',
      action: openEditInfoModal,
      isCompleted: profile?.industries && profile.industries.length > 0,
    },
    {
      text: 'Introduce yourself (10%)',
      action: openEditInfoModal,
      isCompleted: Boolean(profile?.introduce),
    },
    {
      text: 'Add education (10%)',
      action: openAddEducationModal,
      isCompleted: isFilledEducation,
    },
    {
      text: 'Add work experience (10%)',
      action: openAddExperienceModal,
      isCompleted: isFilledExperience,
    },
    {
      text: 'Add work description (5%)',
      action: openAddExperienceModal,
      isCompleted:
        profile?.experiences &&
        profile.experiences.filter((exp) => Boolean(exp.description)).length >
          0,
    },
    {
      text: 'Add skills (at least 3 skills) (10%)',
      action: openSkillModal,
      isCompleted: isFilledSkill,
    },
    {
      text: 'Add certificate (5%)',
      action: () => alert('Coming soon!'),
      // Milestone 2
      isCompleted: false,
    },
    {
      text: 'Add portfolio or project (20%)',
      action: () => alert('Coming soon!'),
      // Milestone 2
      isCompleted: false,
    },
  ];

  return (
    <div className="container profile__box">
      <div className="profile__box__main !mt-3">
        <div className="profile__box__header">
          <h4>Completion Stage</h4>
        </div>
        <div className="profile__box__body">
          <div className="relative flex justify-end">
            {percentCircle.map((item, index) => (
              <div
                className={`z-[100] ${
                  index == 0 ? 'w-1/2' : index == 2 ? 'w-[40%] lg:w-[47%]' : ''
                }`}
                key={index}
              >
                <div
                  className={`m-auto w-6 h-6 lg:w-[50px] lg:h-[50px] ${
                    percent >= item.percentNeeded
                      ? 'bg-gradient-to-b from-blue-400 to-blue-800 dark:bg-midnight-700'
                      : 'bg-blue-50 dark:bg-midnight-700'
                  } rounded-full`}
                >
                  <IconTick className="w-full h-full text-light" />
                </div>
                <div
                  className={`mt-2 font-medium text-xs lg:text-base text-center ${
                    percent >= item.percentNeeded
                      ? 'text-gray-900 dark:text-light'
                      : 'text-blue-50 dark:text-midnight-500'
                  }`}
                >
                  {item.text}
                </div>
              </div>
            ))}
            <div className="absolute z-[99] w-[94%] lg:w-[96.5%] mr-6 lg:mr-8 top-[9px] lg:top-[17px] h-2 lg:h-4 bg-blue-50 dark:bg-midnight-700 rounded-full">
              <div
                className={`h-full bg-gradient-to-b from-blue-400 to-blue-800 rounded-full`}
                style={{ width: percent + '%' }}
              ></div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-2 lg:gap-0 justify-between mt-6">
            {filledBox.map((item, index) => (
              <div className="flex flex-col gap-2 lg:gap-0" key={index}>
                {item.map(({ isFilled, text }, childIndex) => (
                  <div
                    className={`flex flex-row items-center ${
                      isFilled
                        ? 'dark:text-light'
                        : 'text-gray-300 dark:text-midnight-500'
                    }`}
                    key={childIndex}
                  >
                    {isFilled ? (
                      <IconTick />
                    ) : (
                      <span className="w-6 h-6"></span>
                    )}
                    {text}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="relative flex flex-col lg:flex-row gap-2 justify-start items-start lg:items-center mt-6 cursor-pointer">
            <h4
              className="inline-flex justify-center items-center gap-2 text-primary dark:text-light font-medium"
              onClick={() => setOpen(!open)}
            >
              Your profile is {percent}% complete
              {open ? (
                <IconPagingTop className="w-4 h-4 text-primary dark:text-light" />
              ) : (
                <IconPagingBottom className="w-4 h-4 text-primary dark:text-light" />
              )}
            </h4>
            {open && (
              <div
                ref={ref}
                className="dropdown__menu !z-[999] !top-8 left-0 lg:left-32 w-[310px] lg:w-[380px] max-h-[200px] overflow-y-scroll"
              >
                <ul className="text-primary">
                  {tasks
                    .filter((task) => !task.isCompleted)
                    .map((task, index) => (
                      <li
                        className="dropdown__item text-sm font-medium"
                        key={index}
                        onClick={task.action}
                      >
                        <IconAdd className="w-6 h-6" /> {task.text}
                      </li>
                    ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompletionProgressBox;
