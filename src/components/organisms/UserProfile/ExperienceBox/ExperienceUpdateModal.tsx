import { IconAdd, IconCancel } from '@/assets/svg';
import Checkbox from '@/components/atoms/Checkbox';
import { Select, SelectItem } from '@/components/atoms/Select';
import Textarea from '@/components/atoms/Textarea';
import TextField from '@/components/atoms/TextField';

function ExperienceUpdateModal() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <TextField label="Company name" placeholder="Ex: Viettel Group..." />
          <TextField label="Position" placeholder="Ex: UX Designer..." />
        </div>
        <div className="mt-2 block">
          <Checkbox label="I am currently working in this role" />
        </div>
      </div>
      <div className="flex flex-col">
        <h4 className="text-lg font-medium py-4">Start date</h4>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <Select label="Month" placeholder="January">
            <SelectItem key="1" value="1" textDisplay="Option A">
              Option A
            </SelectItem>
            <SelectItem key="2" value="2" textDisplay="Option B">
              Option B
            </SelectItem>
            <SelectItem key="3" value="3" textDisplay="Option C">
              Option C
            </SelectItem>
          </Select>
          <Select label="Year" placeholder="2018">
            <SelectItem key="1" value="1" textDisplay="Option A">
              Option A
            </SelectItem>
            <SelectItem key="2" value="2" textDisplay="Option B">
              Option B
            </SelectItem>
            <SelectItem key="3" value="3" textDisplay="Option C">
              Option C
            </SelectItem>
          </Select>
        </div>
      </div>
      <div className="flex flex-col">
        <h4 className="text-lg font-medium py-4">End date (or expected)</h4>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <Select label="Month" placeholder="January">
            <SelectItem key="1" value="1" textDisplay="Option A">
              Option A
            </SelectItem>
            <SelectItem key="2" value="2" textDisplay="Option B">
              Option B
            </SelectItem>
            <SelectItem key="3" value="3" textDisplay="Option C">
              Option C
            </SelectItem>
          </Select>
          <Select label="Year" placeholder="2018">
            <SelectItem key="1" value="1" textDisplay="Option A">
              Option A
            </SelectItem>
            <SelectItem key="2" value="2" textDisplay="Option B">
              Option B
            </SelectItem>
            <SelectItem key="3" value="3" textDisplay="Option C">
              Option C
            </SelectItem>
          </Select>
        </div>
      </div>
      <div className="flex flex-col">
        <h4 className="text-lg font-medium py-4">Description</h4>
        <div className="block">
          <Textarea
            label="Description"
            placeholder="Tell me something about yourself"
          />
        </div>
      </div>
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
      </div>
    </div>
  );
}

export default ExperienceUpdateModal;
