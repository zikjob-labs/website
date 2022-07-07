import { useEffect, useRef, useState } from 'react';

import Joi from 'joi';
import { SubmitHandler, useForm } from 'react-hook-form';

import { AvatarDefault, IconGalleryAdd } from '@/assets/svg';
import Autocomplete from '@/components/atoms/Autocomplete';
import Modal from '@/components/atoms/Modal';
import { ModalHandle } from '@/components/atoms/Modal/Modal';
import Radio from '@/components/atoms/Radio';
import RadioGroup from '@/components/atoms/Radio/RadioGroup';
import Switch from '@/components/atoms/Switch';
import Textarea from '@/components/atoms/Textarea';
import TextField from '@/components/atoms/TextField';
import useProfileStore from '@/stores/useProfileStore';
import { parseDataInput } from '@/utils';
import { joiResolver } from '@hookform/resolvers/joi';

import AvatarModal from './AvatarModal';

interface Props {
  parentRef: React.RefObject<ModalHandle>;
}

interface IFormInput {
  fullName: string;
  headline: string;
  industries: string[];
  gender: string;
  country: string;
  phone: string;
  email: string;
  videoUrl: string;
  isFreelancer: boolean;
  canContact: boolean;
  introduce: string;
}

function EditInfoModal({ parentRef }: Props) {
  const [profile, setProfile] = useProfileStore((state) => [
    state.profile,
    state.setProfile,
  ]);
  // TODO: add to store
  const [industryOptions, setIndustryOptions] = useState(
    [] as { text: string; value: string }[]
  );
  const [countryOptions, setCountryOptions] = useState(
    [] as { text: string; value: string; phone: string }[]
  );
  const [country, setCountry] = useState<
    | {
        text: string;
        value: string;
        phone: string;
      }
    | undefined
  >(
    profile?.country
      ? countryOptions.find((item) => item.value == profile?.country)
      : undefined
  );

  useEffect(() => {
    industryOptions.length == 0 &&
      fetch('./industries.json')
        .then((res) => res.json())
        .then((data: { industries: string[] }) => {
          setIndustryOptions(
            data.industries.map((item) => ({ text: item, value: item }))
          );
        });
    countryOptions.length == 0 &&
      fetch('./country_state.json')
        .then((res) => res.json())
        .then((data: { name: string; value: string; phone: string }[]) => {
          setCountryOptions(
            data.map((item) => ({
              text: item.name,
              value: item.name,
              phone: item.phone,
            }))
          );
        });

    setCountry(
      profile?.country
        ? countryOptions.find((item) => item.value == profile?.country)
        : undefined
    );
  }, [industryOptions, countryOptions]);
  const modalAvatarRef = useRef<ModalHandle>(null);
  const schema = Joi.object<IFormInput>({
    fullName: Joi.string()
      .allow('')
      .min(3)
      .max(50)
      .label('Full name')
      .messages({
        'string.min': 'Minimum 3 characters',
        'string.max': 'Maximum 50 characters',
      }),
    headline: Joi.string().allow('').min(3).max(50).label('Headline').messages({
      'string.min': 'Minimum 3 characters',
      'string.max': 'Maximum 50 characters',
    }),
    industries: Joi.optional(),
    gender: Joi.optional(),
    country: Joi.optional(),
    phone: Joi.string()
      .allow('')
      .max(15)
      .custom((value, helpers) => {
        if (helpers.state.ancestors[0].country == '' && value != '') {
          return helpers.message({
            custom: `You need to choose your nationality first`,
          });
        }

        return value;
      })
      .label('Phone')
      .messages({
        'string.max': 'Maximum 15 characters',
      }),
    email: Joi.string()
      .allow('')
      .email({ tlds: false })
      .label('Email')
      .messages({
        'string.email': 'Please enter a valid email address',
      }),
    videoUrl: Joi.string()
      .allow('')
      .regex(
        /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/
      )
      .message('Please enter a valid Youtube link')
      .label('Youtube URL'),
    isFreelancer: Joi.optional(),
    canContact: Joi.optional(),
    introduce: Joi.optional(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: joiResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    setProfile({
      ...data,
      industries: parseDataInput(data.industries),
    });
    parentRef.current?.close();
  };

  const startAdornmentPhone = countryOptions.find(
    (item) => item.value == country?.value
  );

  return (
    <div className="flex flex-col">
      <form id="info-edit-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col lg:flex-row justify-between items-start gap-5">
          <div className="relative mb-8 lg:mb-0 w-full max-w-[200px] h-full max-h-[200px] bg-blue-50 dark:bg-midnight-700">
            <div className="flex justify-center items-center text-gray-300 p-12">
              <AvatarDefault className="w-full h-full max-w-32 max-h-32" />
            </div>
            <button
              type="button"
              className="absolute -bottom-5 left-[12%] inline-flex items-center px-4 py-2 border-[1.5px] border-gray-200 dark:border-midnight-400 bg-light dark:bg-midnight-800 rounded-lg"
              // Milestone 1.5
              // onClick={() => modalAvatarRef.current?.open(true)}
              onClick={() => alert('Coming soon!')}
            >
              <IconGalleryAdd className="mr-2" /> Add photo
            </button>
            <Modal
              ref={modalAvatarRef}
              width="max-w-2xl"
              slide
              layer={{ isRoot: false, parentRef: parentRef }}
              header={
                <div className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Change Avatar
                </div>
              }
              footer={
                <div className="w-full flex justify-end">
                  <button className="btn btn-primary !px-4 !py-2 !text-base">
                    Save
                  </button>
                </div>
              }
            >
              <AvatarModal />
            </Modal>
          </div>
          <div className="w-full flex flex-col gap-7 grow">
            <TextField
              label="Full name"
              placeholder="Enter your full name"
              error={Boolean(errors.fullName)}
              helperText={errors.fullName?.message}
              value={profile?.fullName}
              {...register('fullName')}
            />
            <TextField
              label="Headline"
              placeholder="Ex: Leader,..."
              error={Boolean(errors.headline)}
              helperText={errors.headline?.message}
              value={profile?.headline}
              {...register('headline')}
            />
            <Autocomplete
              label="Industry"
              placeholder="Please select..."
              helperText="You can choose up to 5 fields."
              multiple
              maxItem={5}
              value={profile?.industries}
              {...register('industries')}
              options={industryOptions}
            />
            <div className="flex flex-col lg:flex-row justify-start items-start lg:items-center">
              <label className="font-medium">Gender:</label>
              <div>
                <RadioGroup value={profile?.gender} {...register('gender')}>
                  <Radio label="Male" value="male" />
                  <Radio label="Female" value="female" />
                  <Radio label="Other" value="other" />
                </RadioGroup>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <h4 className="text-lg font-medium py-4">Contact Information</h4>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <Autocomplete
              label="Nationality"
              placeholder="Ex: Vietnam"
              value={profile?.country}
              options={countryOptions}
              {...register('country', {
                onChange: (e) =>
                  setCountry(
                    countryOptions.find((item) => item.value == e.target.value)
                  ),
              })}
            />
            <TextField
              type="number"
              label="Phone number"
              placeholder="Enter your phone number"
              error={Boolean(errors.phone)}
              helperText={errors.phone?.message}
              value={profile?.phone}
              onKeyPress={(e) => {
                if (/[0-9]/.test(e.key)) {
                  return true;
                }

                e.preventDefault();
                return false;
              }}
              startAdornment={
                startAdornmentPhone
                  ? `(${startAdornmentPhone.phone.includes('+') ? '' : '+'}${
                      countryOptions.find(
                        (item) => item.value == country?.value
                      )?.phone
                    })`
                  : undefined
              }
              {...register('phone')}
            />
            <TextField
              label="Email"
              placeholder="Enter your email"
              error={Boolean(errors.email)}
              helperText={errors.email?.message}
              value={profile?.email}
              {...register('email')}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <h4 className="text-lg font-medium py-4">Introduce Yourself</h4>
          <div className="block">
            <Textarea
              label="Description"
              placeholder="Tell me something about yourself"
              helperText="Minimum 150 characters for detailed personal insight"
              value={profile?.introduce}
              {...register('introduce')}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <h4 className="text-lg font-medium py-4">Video Profile</h4>
          <div className="block">
            <TextField
              label="Youtube link"
              placeholder="Enter Youtube link"
              error={Boolean(errors.videoUrl)}
              helperText={errors.videoUrl?.message}
              value={profile?.videoUrl}
              {...register('videoUrl')}
            />
          </div>
        </div>
        <div className="flex flex-col py-4">
          <div className="flex flex-row justify-between items-center gap-2">
            <h4 className="text-lg font-medium py-2">Are you a freelancer?</h4>
            <Switch
              checked={profile?.isFreelancer}
              {...register('isFreelancer')}
            />
          </div>
          <div>
            When you enable this feature, you will get more freelance jobs from
            others.
          </div>
        </div>
        <div className="flex flex-col py-4">
          <div className="flex flex-row justify-between items-center gap-2">
            <h4 className="text-lg font-medium py-2">
              Do you allow others to contact you?
            </h4>
            <Switch checked={profile?.canContact} {...register('canContact')} />
          </div>
          <div>
            When you enable this feature, you allow other people on Zikjob to
            contact you to schedule an interview immediately.
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditInfoModal;
