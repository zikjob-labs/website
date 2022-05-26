import { FeatureItem } from '@/types/home';
import { Fragment } from 'react';

interface Props {
  feature: FeatureItem;
}

function FeatureCardMobile({ feature }: Props) {
  return (
    <Fragment>
      <figure>
        <feature.img />
      </figure>
      <h3>{feature.label}</h3>
      <p>{feature.description}</p>
    </Fragment>
  );
}

export default FeatureCardMobile;
