import {
  AvatarDefault,
  IconEarth,
  IconGenderFemale,
  IconGenderMale,
  IconGenderOther,
  IconMail,
  IconPhone,
  IconVideo,
  LogoNoText,
} from '@/assets/svg';
import FavoriteButton from '@/components/molecules/FavoriteButton';
import ShareButton from '@/components/molecules/ShareButton';
import { Gender } from '@/constants';
import useProfileStore from '@/stores/useProfileStore';
import FullNameItem from './FullNameItem';
import EditInfoButton from './EditInfoButton';

function BasicInfoBox() {
  const profile = useProfileStore((state) => state.profile);

  return (
    <div className="container flex flex-row justify-start">
      <div className="mr-8">
        <div className="relative">
          {profile?.avatar ? (
            <img
              src={profile.avatar.src}
              className="w-full h-auto min-w-[197px] min-h-[197px] rounded-full bg-gray-200"
            />
          ) : (
            <AvatarDefault className="w-full h-auto min-w-[197px] min-h-[197px] text-gray-300" />
          )}
          <div className="absolute w-4 h-4 right-[10%] top-[80%] rounded-full bg-[#00BA88]"></div>
        </div>
      </div>
      <div className="grow flex flex-col">
        <FullNameItem profile={profile} />
        {profile?.headline && (
          <p className="mt-1 text-lg">{profile.headline}</p>
        )}
        {(profile?.canContact || profile?.isFreelancer) && (
          <div className="inline-flex items-center gap-2 mt-4">
            {profile?.canContact && (
              <div className="px-3 py-1.5 text-sm font-medium bg-blue-50 dark:bg-midnight-800 rounded-xl cursor-pointer">
                Contact Now
              </div>
            )}
            {profile?.isFreelancer && (
              <div className="px-3 py-1.5 text-sm font-medium bg-blue-50 dark:bg-midnight-800 rounded-xl cursor-pointer">
                Freelancer
              </div>
            )}
          </div>
        )}
        <div className="flex flex-col items-start gap-2 mt-4">
          {profile?.phone && (
            <div className="inline-flex items-center mr-4">
              <IconPhone className="w-5 h-5 mr-2" />
              <span className="text-sm dark:text-light">{profile.phone}</span>
            </div>
          )}
          {profile?.email && (
            <div className="inline-flex items-center mr-4">
              <IconMail className="w-5 h-5 mr-2" />
              <span className="text-sm dark:text-light">{profile.email}</span>
            </div>
          )}
          {profile?.gender && (
            <div className="inline-flex items-center mr-4">
              {Gender.male == profile.gender ? (
                <IconGenderMale className="mr-2" />
              ) : Gender.female == profile.gender ? (
                <IconGenderFemale className="mr-2" />
              ) : (
                <IconGenderOther className="mr-2" />
              )}
              <span className="text-sm dark:text-light capitalize">
                {profile.gender}
              </span>
            </div>
          )}
          {profile?.country && (
            <div className="inline-flex items-center mr-4">
              <IconEarth className="mr-2" />
              <span className="text-sm dark:text-light">{profile.country}</span>
            </div>
          )}
          {profile?.videoUrl && (
            <div className="inline-flex items-center mr-4 dark:text-primary">
              <IconVideo className="mr-2" />
              <a
                className="text-sm text-primary"
                href={profile.videoUrl}
                target="_blank"
                rel="noreferrer"
              >
                {profile.videoUrl}
              </a>
            </div>
          )}
          {profile?.industries && (
            <div className="inline-flex items-center mr-4 dark:text-primary">
              <label className="mr-2">Industry:</label>
              <div className="font-medium">{profile.industries.join(', ')}</div>
            </div>
          )}
          {profile?.introduce && (
            <div className="inline-flex items-center mr-4 dark:text-primary mt-4">
              {profile.introduce.length > 300 ? (
                <p className="break-all">
                  {profile.introduce.slice(0, 300)}
                  {'...'}
                  <span className="text-primary font-medium cursor-pointer">
                    Read more
                  </span>
                </p>
              ) : (
                <p>{profile.introduce}</p>
              )}
            </div>
          )}
        </div>
        <div className="flex justify-start items-center mt-4">
          <FavoriteButton />
          <ShareButton />
          <button className="px-4 py-2 rounded-lg bg-gradient-to-b from-blue-400 to-blue-800 text-light">
            <LogoNoText className="w-6 h-6" />
            <span>0 ZJS</span>
          </button>
        </div>
      </div>
      <EditInfoButton />
    </div>
  );
}

export default BasicInfoBox;
