import { FeatureItem } from '@/types/home';
import { Fragment } from 'react';

interface Props {
  feature: FeatureItem;
}

function FeatureCardMobile({ feature }: Props) {
  const SVGImage = feature.img;
  return (
    <Fragment>
      <figure>
        <SVGImage />
      </figure>
      <h3>{feature.label}</h3>
      <p>{feature.description}</p>
    </Fragment>
  );
}

export default FeatureCardMobile;
