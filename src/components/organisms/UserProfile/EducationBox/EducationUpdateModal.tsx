import Checkbox from '@/components/atoms/Checkbox';
import { UpdateModalProps } from '@/components/atoms/Modal/Modal';
import { Select, SelectItem } from '@/components/atoms/Select';
import Textarea from '@/components/atoms/Textarea';
import TextField from '@/components/atoms/TextField';
import useProfileStore from '@/stores/useProfileStore';
import { Education } from '@/types/profile';
import { getDefaultData } from '@/utils';
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

const { months, startYears, endYears } = getDefaultData();

function EducationUpdateModal({
  item,
  parentRef,
}: UpdateModalProps<Education>) {
  const [isNotGraduated, setIsNotGraduated] = useState(
    item ? !item.end?.month : false
  );

  const schema = Joi.object<Education>({
    school: Joi.object({
      name: Joi.string().min(3).required().label('School name'),
    }),
    major: Joi.string().min(3).required().label('Major'),
    start: {
      month: isNotGraduated
        ? Joi.optional()
        : Joi.string()
            .allow('')
            .custom((value, helpers) => {
              if (
                helpers.state.ancestors[1].start?.year != '' &&
                helpers.state.ancestors[1].end?.month != '' &&
                helpers.state.ancestors[1].end?.year != ''
              ) {
                const startDate = new Date(
                  `${value} ${helpers.state.ancestors[1].start?.year}`
                );
                const yearDate = new Date(
                  `${helpers.state.ancestors[1].end?.month} ${helpers.state.ancestors[1].end?.year}`
                );
                if (startDate > yearDate)
                  return helpers.message({
                    custom: '"Start date" must be less than "end date"',
                  });
              }

              return value;
            })
            .label('Start month'),
      year: isNotGraduated
        ? Joi.optional()
        : Joi.string()
            .allow('')
            .custom((value, helpers) => {
              if (
                helpers.state.ancestors[1].start?.month != '' &&
                helpers.state.ancestors[1].end?.month != '' &&
                helpers.state.ancestors[1].end?.year != ''
              ) {
                const startDate = new Date(
                  `${helpers.state.ancestors[1].start?.month} ${value}`
                );
                const yearDate = new Date(
                  `${helpers.state.ancestors[1].end?.month} ${helpers.state.ancestors[1].end?.year}`
                );
                if (startDate > yearDate)
                  return helpers.message({
                    custom: '"Start date" must be less than "end date"',
                  });
              }

              return value;
            })
            .label('Start year'),
    },
    end: Joi.optional(),
    description: Joi.optional(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Education>({ resolver: joiResolver(schema) });

  const [profile, setProfile] = useProfileStore((state) => [
    state.profile,
    state.setProfile,
  ]);
  const onSubmit: SubmitHandler<Education> = (data) => {
    console.log(data);
    let education;
    if (isNotGraduated) {
      data.end = undefined;
    }

    if (profile?.education) {
      education = [...profile.education];
      if (item) {
        const indexItem = education.findIndex((i) => i.id == item.id);
        data.id = item.id;
        education[indexItem] = data;
      } else {
        data.id = new Date().getTime();
        education.push(data);
      }
    } else {
      data.id = new Date().getTime();
      education = [data];
    }

    setProfile({
      ...profile,
      education,
    });
    parentRef.current?.close();
  };

  return (
    <div className="flex flex-col">
      <form
        id={item ? `edit-education-form-${item.id}` : 'add-education-form'}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <TextField
              label="School*"
              placeholder="Ex: Vietnam National University..."
              error={Boolean(errors.school?.name)}
              helperText={errors.school?.name?.message}
              value={item?.school.name}
              {...register('school.name')}
            />
            <TextField
              label="Major*"
              placeholder="Ex: Computer Vision..."
              error={Boolean(errors.major)}
              helperText={errors.major?.message}
              value={item?.major}
              {...register('major')}
            />
            <Checkbox
              label="I am not graduated"
              checked={isNotGraduated}
              onChange={(e) => {
                setIsNotGraduated(e.target.checked);
              }}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <h4 className="text-lg font-medium py-4">Start date</h4>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <Select
              label="Month"
              placeholder="July"
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
              placeholder="2017"
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
              isNotGraduated ? 'text-gray-100' : ''
            }`}
          >
            End date (or expected)
          </h4>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <Select
              label="Month"
              placeholder="March"
              disabled={isNotGraduated}
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
              placeholder="2020"
              disabled={isNotGraduated}
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
              placeholder="Tell me something about yourself"
              value={item?.description}
              {...register('description')}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default EducationUpdateModal;