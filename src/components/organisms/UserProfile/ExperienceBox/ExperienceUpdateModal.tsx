// import { IconAdd, IconCancel } from '@/assets/svg';
import Checkbox from '@/components/atoms/Checkbox';
import { UpdateModalProps } from '@/components/atoms/Modal/Modal';
import { Select, SelectItem } from '@/components/atoms/Select';
import Textarea from '@/components/atoms/Textarea';
import TextField from '@/components/atoms/TextField';
import useProfileStore from '@/stores/useProfileStore';
import { Experience } from '@/types/profile';
import { getDefaultData } from '@/utils';
import { useState } from 'react';
import { get, SubmitHandler, useForm } from 'react-hook-form';
import Joi from 'joi';
import { joiResolver } from '@hookform/resolvers/joi';

const { months, startYears, endYears } = getDefaultData();

function ExperienceUpdateModal({
  item,
  parentRef,
}: UpdateModalProps<Experience>) {
  const [isWorking, setIsWorking] = useState(item ? !item.end?.year : false);

  const schema = Joi.object<Experience>({
    company: Joi.object({
      name: Joi.string().min(3).max(200).label('Company name').messages({
        'string.min': 'Minimum 3 characters',
        'string.max': 'Maximum 200 characters',
        'string.empty': 'Company name is required',
      }),
    }),
    position: Joi.string().min(3).max(200).label('Position').messages({
      'string.min': 'Minimum 3 characters',
      'string.max': 'Maximum 200 characters',
      'string.empty': 'Position is required',
    }),
    start: {
      month: Joi.any()
        .custom((value, helpers) => {
          const startYear = helpers.state.ancestors[1].start?.year,
            endMonth = helpers.state.ancestors[1].end?.month,
            endYear = helpers.state.ancestors[1].end?.year;

          if (value == '') return value;

          if (!isWorking && startYear != '' && endYear != '') {
            const startDate = new Date(`${value} ${startYear}`);
            const yearDate = new Date(
              endMonth == '' ? endYear : `${endMonth} ${endYear}`
            );
            if (startDate > yearDate)
              return helpers.message({
                custom: 'Must start before ending',
              });
          }

          return value;
        })
        .label('Start month'),
      year: Joi.any()
        .custom((value, helpers) => {
          const startMonth = helpers.state.ancestors[1].start?.month,
            endMonth = helpers.state.ancestors[1].end?.month,
            endYear = helpers.state.ancestors[1].end?.year;

          if (startMonth != '' && value == '')
            return helpers.message({
              custom: 'Please enter a start year',
            });

          if (!isWorking && endYear != '') {
            if (value == '')
              return helpers.message({
                custom: 'Please enter a start year',
              });

            const startDate = new Date(
              startMonth == '' ? value : `${startMonth} ${value}`
            );
            const yearDate = new Date(
              endMonth == '' ? endYear : `${endMonth} ${endYear}`
            );
            if (startDate > yearDate)
              return helpers.message({
                custom: 'Must start before ending',
              });
          }

          return value;
        })
        .label('Start year'),
    },
    end: isWorking
      ? Joi.optional()
      : Joi.object({
          month: Joi.string().allow(''),
          year: Joi.string().messages({
            'string.empty': 'Please enter a end year',
          }),
        }),
    description: Joi.optional(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Experience>({
    resolver: joiResolver(schema),
  });
  const [profile, setProfile] = useProfileStore((state) => [
    state.profile,
    state.setProfile,
  ]);
  const onSubmit: SubmitHandler<Experience> = (data) => {
    console.log(data);
    let experiences;
    if (isWorking) {
      data.end = undefined;
    }

    if (profile?.experiences) {
      experiences = [...profile.experiences];
      if (item) {
        const indexItem = experiences.findIndex((i) => i.id == item.id);
        data.id = item.id;
        experiences[indexItem] = data;
      } else {
        data.id = new Date().getTime();
        experiences.push(data);
      }
    } else {
      data.id = new Date().getTime();
      experiences = [data];
    }

    setProfile({
      experiences,
    });
    parentRef.current?.close();
  };

  return (
    <div className="flex flex-col">
      <form
        id={item ? `edit-experience-form-${item.id}` : 'add-experience-form'}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <TextField
              label="Company name*"
              placeholder="Ex: Viettel Group..."
              error={Boolean(errors.company?.name)}
              helperText={errors.company?.name?.message}
              value={item?.company.name}
              {...register('company.name')}
            />
            <TextField
              label="Position*"
              placeholder="Ex: UX Designer..."
              error={Boolean(errors.position)}
              helperText={errors.position?.message}
              value={item?.position}
              {...register('position')}
            />
          </div>
          <div className="mt-2 block">
            <Checkbox
              checked={isWorking}
              label="I am currently working here"
              onChange={(e) => {
                setIsWorking(e.target.checked);
              }}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <h4 className="text-lg font-medium py-4">Start date*</h4>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <Select
              label="Month"
              placeholder="January"
              error={Boolean(errors.start?.month)}
              helperText={errors.start?.month?.message}
              value={item?.start.month}
              {...register('start.month')}
            >
              {months.map((month, index) => (
                <SelectItem key={index} value={month} textDisplay={month}>
                  {month}
                </SelectItem>
              ))}
            </Select>
            <Select
              label="Year"
              placeholder="2018"
              error={Boolean(errors.start?.year)}
              helperText={errors.start?.year?.message}
              value={item?.start.year}
              {...register('start.year')}
            >
              {startYears.map((year, index) => (
                <SelectItem
                  key={index}
                  value={year + ''}
                  textDisplay={year + ''}
                >
                  {year}
                </SelectItem>
              ))}
            </Select>
          </div>
        </div>
        <div className="flex flex-col">
          <h4
            className={`text-lg font-medium py-4 ${
              isWorking ? 'text-gray-100' : ''
            }`}
          >
            End date*
          </h4>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <Select
              label="Month"
              placeholder="January"
              disabled={isWorking}
              error={Boolean(get(errors, 'end.month'))}
              helperText={get(errors, 'end.month')?.message}
              value={item?.end?.month}
              {...register('end.month')}
            >
              {months.map((month, index) => (
                <SelectItem key={index} value={month} textDisplay={month}>
                  {month}
                </SelectItem>
              ))}
            </Select>
            <Select
              label="Year"
              placeholder="2018"
              disabled={isWorking}
              error={Boolean(get(errors, 'end.year'))}
              helperText={get(errors, 'end.year')?.message}
              value={item?.end?.year}
              {...register('end.year')}
            >
              {endYears.map((year, index) => (
                <SelectItem
                  key={index}
                  value={year + ''}
                  textDisplay={year + ''}
                >
                  {year}
                </SelectItem>
              ))}
            </Select>
          </div>
        </div>
        <div className="flex flex-col">
          <h4 className="text-lg font-medium py-4">Description</h4>
          <div className="block">
            <Textarea
              label="Description"
              placeholder="Tell me something about your work"
              helperText="Minimum 100 characters for details information about your experience"
              value={item?.description}
              {...register('description')}
            />
          </div>
        </div>
        {/* Milestone 2
        <div className="flex flex-col">
          <h4 className="text-lg font-medium py-4">Photos</h4>
          <div className="block">
            <button className="btn btn-outline justify-center items-center inline-flex !px-2 !py-1 !text-sm !font-medium !rounded-md">
              <IconAdd className="mr-1" /> Add your photos
            </button>
          </div>
          <div className="mt-4 grid grid-cols-2 lg:grid-cols-3 gap-2">
            <div className="relative max-w-[220px] max-h-[120px]">
              <img
                src="https://picsum.photos/400/300"
                className="object-cover w-full h-full border border-gray-100 dark:border-midnight-400 rounded-lg"
              />
              <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-light cursor-pointer">
                <IconCancel className="w-6 h-6 fill-gray-900" />
              </div>
            </div>
            <div className="relative max-w-[220px] max-h-[120px]">
              <img
                src="https://picsum.photos/400/300"
                className="object-cover w-full h-full border border-gray-100 dark:border-midnight-400 rounded-lg"
              />
              <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-light cursor-pointer">
                <IconCancel className="w-6 h-6 fill-gray-900" />
              </div>
            </div>
            <div className="relative max-w-[220px] max-h-[120px]">
              <img
                src="https://picsum.photos/400/300"
                className="object-cover w-full h-full border border-gray-100 dark:border-midnight-400 rounded-lg"
              />
              <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-light cursor-pointer">
                <IconCancel className="w-6 h-6 fill-gray-900" />
              </div>
            </div>
            <div className="relative max-w-[220px] max-h-[120px]">
              <img
                src="https://picsum.photos/400/300"
                className="object-cover w-full h-full border border-gray-100 dark:border-midnight-400 rounded-lg"
              />
              <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-light cursor-pointer">
                <IconCancel className="w-6 h-6 fill-gray-900" />
              </div>
            </div>
            <div className="relative max-w-[220px] max-h-[120px]">
              <img
                src="https://picsum.photos/400/300"
                className="object-cover w-full h-full border border-gray-100 dark:border-midnight-400 rounded-lg"
              />
              <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-light cursor-pointer">
                <IconCancel className="w-6 h-6 fill-gray-900" />
              </div>
            </div>
            <div className="relative max-w-[220px] max-h-[120px]">
              <img
                src="https://picsum.photos/400/300"
                className="object-cover w-full h-full border border-gray-100 dark:border-midnight-400 rounded-lg"
              />
              <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-light cursor-pointer">
                <IconCancel className="w-6 h-6 fill-gray-900" />
              </div>
            </div>
          </div>
        </div> */}
      </form>
    </div>
  );
}

export default ExperienceUpdateModal;
