import { Fragment } from 'react';

interface Props {
  wave: {
    name: string;
    text: string;
    href: string;
    img: string;
    symbol: string;
  };
}

function WaveItem({ wave }: Props) {
  return (
    <Fragment>
      <li className="wave__item">
        <a href={wave.href}>
          <img src={wave.img} alt={`${wave.name}-platform`} />
          <strong>{wave.text}</strong>
        </a>
      </li>
      <li className="wave__item wave__item--symbol">
        <figure>
          <img src={wave.symbol} alt="polygon-symbol" />
        </figure>
      </li>
    </Fragment>
  );
}

export default WaveItem;
