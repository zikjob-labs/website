import { IconEdu, IconTick } from '@/assets/svg';
import { Education } from '@/types/profile';
import EditEducationButton from './EditEducationButton';

function EducationItem({ item }: { item: Education }) {
  return (
    <div className="flex flex-row items-start">
      {item.school.logo ? (
        <img
          src="https://picsum.photos/100/100"
          className="w-[88px] h-[88px] mr-5 rounded-lg"
        />
      ) : (
        <div className="w-[88px] h-[88px] flex justify-center items-center bg-gray-100 text-gray-500 mr-5 rounded-lg">
          <IconEdu className="w-[54px] h-[54px]" />
        </div>
      )}
      <div className="grow flex flex-col gap-1">
        <h5 className="mb-1 inline-flex gap-2 justify-between items-center font-semibold">
          {item.school.name}
          <EditEducationButton item={item} />
        </h5>
        <p>Major: {item.major}</p>
        <p>{`${item.start.month} ${item.start.year} ${
          item.end && item.end.year != ''
            ? `- ${item.end.month} ${item.end.year}`
            : ''
        } `}</p>
        {item.isVerified && (
          <div className="inline-flex items-center text-primary font-semibold">
            <div className="w-5 h-5 rounded-full flex justify-center items-center bg-primary text-light  mr-1">
              <IconTick className="w-full h-full" />
            </div>
            Verified
          </div>
        )}
        {item.description &&
          (item.description.length > 300 ? (
            <p className="mt-1">
              {item.description.slice(0, 300)}
              {'...'}
              <span className="text-primary font-medium cursor-pointer">
                Read more
              </span>
            </p>
          ) : (
            <p className="mt-1">{item.description}</p>
          ))}
      </div>
    </div>
  );
}

export default EducationItem;
