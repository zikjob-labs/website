import { Select, SelectItem } from '@/components/atoms/Select';

function SkillUpdateModal() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <div className="block">
          <Select label="Year" placeholder="2018" multiple tag>
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
    </div>
  );
}

export default SkillUpdateModal;
