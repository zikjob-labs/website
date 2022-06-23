import Autocomplete from '@/components/atoms/Autocomplete';
import { UpdateModalProps } from '@/components/atoms/Modal/Modal';
import useProfileStore from '@/stores/useProfileStore';
import { Skill } from '@/types/profile';
import { SubmitHandler, useForm } from 'react-hook-form';
import { parseDataInput } from '@/utils';
import { useEffect, useState } from 'react';

interface Form {
  skills: string[];
}

function SkillUpdateModal({ parentRef }: UpdateModalProps<Skill>) {
  const [skillOptions, setSkillOptions] = useState(
    [] as { text: string; value: string }[]
  );
  useEffect(() => {
    skillOptions.length == 0 &&
      fetch('./skills.json')
        .then((res) => res.json())
        .then((data: string[]) => {
          setSkillOptions(data.map((item) => ({ text: item, value: item })));
        });
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>();
  const [profile, setProfile] = useProfileStore((state) => [
    state.profile,
    state.setProfile,
  ]);
  const onSubmit: SubmitHandler<Form> = (data) => {
    console.log(data);

    setProfile({
      ...profile,
      skills: parseDataInput(data.skills)?.map((item) => ({ name: item })),
    });
    parentRef.current?.close();
  };

  return (
    <div className="flex flex-col">
      <form id="skill-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col">
          <div className="block">
            <Autocomplete
              label="Skill*"
              placeholder="Please select your skills (up to 18)"
              multiple
              maxItem={18}
              error={Boolean(errors.skills)}
              helperText={errors.skills ? 'Skills is required' : ''}
              value={profile?.skills?.map((i) => i.name)}
              {...register('skills', { required: true })}
              options={skillOptions}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default SkillUpdateModal;
