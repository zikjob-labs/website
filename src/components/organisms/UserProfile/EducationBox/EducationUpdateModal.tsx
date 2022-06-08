import Checkbox from '@/components/atoms/Checkbox';
import { Select, SelectItem } from '@/components/atoms/Select';
import Textarea from '@/components/atoms/Textarea';
import TextField from '@/components/atoms/TextField';

function EducationUpdateModal() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <TextField
            label="School"
            placeholder="Ex: Vietnam National University..."
          />
          <TextField label="Major" placeholder="Ex: Computer Vision..." />
          <Checkbox label="I am not graduated" />
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
    </div>
  );
}

export default EducationUpdateModal;
