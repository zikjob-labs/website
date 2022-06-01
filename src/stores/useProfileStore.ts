import create from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { devtools } from 'zustand/middleware';
import { Profile, ProfileState } from '@/types/profile';

const useProfileStore = create<ProfileState>()(
  devtools(
    immer((set) => ({
      profile: undefined,
      setProfile: (updatedProfile?: Profile) =>
        set((state) => {
          state.profile = updatedProfile;
        }),
    })),
    { name: 'profile' }
  )
);

export default useProfileStore;
