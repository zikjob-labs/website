import { AvatarDefault, IconGalleryAdd } from '@/assets/svg';
import Modal from '@/components/atoms/Modal';
import { ModalHandle } from '@/components/atoms/Modal/Modal';
import Radio from '@/components/atoms/Radio';
import { Select, SelectItem } from '@/components/atoms/Select';
import Switch from '@/components/atoms/Switch';
import Textarea from '@/components/atoms/Textarea';
import TextField from '@/components/atoms/TextField';
import { useRef } from 'react';
import AvatarModal from './AvatarModal';

interface Props {
  parentRef: React.RefObject<ModalHandle>;
}

function InfoEditModal({ parentRef }: Props) {
  const modalAvatarRef = useRef<ModalHandle>(null);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-5">
        <div className="relative mb-8 lg:mb-0 w-full max-w-[200px] h-full max-h-[200px] bg-blue-50 dark:bg-midnight-700">
          <div className="flex justify-center items-center text-gray-300 p-12">
            <AvatarDefault className="w-full h-full max-w-32 max-h-32" />
          </div>
          <button
            className="absolute -bottom-5 left-[12%] inline-flex items-center px-4 py-2 border-[1.5px] border-gray-200 dark:border-midnight-400 bg-light dark:bg-midnight-800 rounded-lg"
            onClick={() => modalAvatarRef.current?.open(true)}
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
          <TextField label="Fullname" placeholder="Enter your full name" />
          <TextField label="Headline" placeholder="Ex: Leader,..." />
          <Select label="Industry" placeholder="You can choose up to 5 fields">
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
          <div className="flex flex-col lg:flex-row justify-start items-start lg:items-center">
            <label className="font-medium">Gender:</label>
            <div>
              <Radio name="gender" label="Male" />
              <Radio name="gender" label="Female" />
              <Radio name="gender" label="Others" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <h4 className="text-lg font-medium py-4">Contact Information</h4>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <Select label="Nationality" placeholder="Ex: Vietnam">
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
          <TextField
            label="Phone number"
            placeholder="Enter your phone number"
          />
          <TextField label="Email" placeholder="Enter your email" />
        </div>
      </div>
      <div className="flex flex-col">
        <h4 className="text-lg font-medium py-4">Introduce Yourself</h4>
        <div className="block">
          <Textarea
            label="Description"
            placeholder="Tell me something about yourself"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <h4 className="text-lg font-medium py-4">Video Profile</h4>
        <div className="block">
          <TextField label="Youtube link" placeholder="Enter youtube link" />
        </div>
      </div>
      <div className="flex flex-col py-4">
        <div className="flex flex-row justify-between items-center gap-2">
          <h4 className="text-lg font-medium py-2">Are you a freelancer?</h4>
          <Switch />
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
          <Switch />
        </div>
        <div>
          When you enable this feature, you allow other people on Zikjob to
          contact you to schedule an interview immediately.
        </div>
      </div>
    </div>
  );
}

export default InfoEditModal;
