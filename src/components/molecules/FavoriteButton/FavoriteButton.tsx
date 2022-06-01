import { IconHeart, IconHeartFull } from '@/assets/svg';

function FavoriteButton() {
  const isFavorite = false;
  if (isFavorite)
    return (
      <div className="inline-flex items-center mr-9">
        <div className="mr-2 w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] rounded-full flex justify-center items-center bg-red-50 dark:bg-midnight-800 text-red-400 cursor-pointer">
          <IconHeartFull className="w-4 h-4 lg:w-6 lg:h-6" />
        </div>
        <span>0</span>
      </div>
    );

  return (
    <div className="inline-flex items-center mr-9">
      <div className="mr-2 w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] border-[1.5px] border-gray-800 dark:border-light rounded-full flex justify-center items-center hover:border-blue-200 hover:bg-blue-50 dark:hover:bg-midnight-800 hover:text-blue-200 dark:hover:text-light cursor-pointer">
        <IconHeart className="w-4 h-4 lg:w-6 lg:h-6" />
      </div>
      <span>0</span>
    </div>
  );
}

export default FavoriteButton;
