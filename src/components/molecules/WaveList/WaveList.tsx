import {
  icon1Img,
  icon2Img,
  icon3Img,
  symbol1Img,
  symbol2Img,
  symbol3Img,
} from '@/assets/images';
import WaveItem from './WaveItem';

function WaveList() {
  const waves = [
    {
      name: 'polygon',
      text: 'Polygon',
      href: 'https://polygon.technology',
      img: icon1Img,
      symbol: symbol1Img,
    },
    {
      name: 'bsc',
      text: 'BSC',
      href: 'https://polygon.technology',
      img: icon2Img,
      symbol: symbol2Img,
    },
    {
      name: 'solana',
      text: 'Solana',
      href: 'https://polygon.technology',
      img: icon3Img,
      symbol: symbol3Img,
    },
  ];
  return (
    <ul className="wave__list">
      {waves.map((wave, index) => (
        <WaveItem key={index} wave={wave} />
      ))}
    </ul>
  );
}

export default WaveList;
