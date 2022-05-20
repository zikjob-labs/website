import { FeatureItem } from '@/types/home';

interface Props {
  feature: FeatureItem;
  toggleFeature: (item: FeatureItem) => void;
}

function FeatureCard({ feature, toggleFeature }: Props) {
  const SVGImage = feature.img;
  return (
    <li
      className={`feature__item cursor-pointer ${
        feature.active ? 'active' : ''
      }`}
      slide-for={feature.name}
      onClick={() => toggleFeature(feature)}
    >
      <div className="feature__link">
        <figure>
          <SVGImage />
        </figure>
        <h3>{feature.label}</h3>
      </div>
    </li>
  );
}

export default FeatureCard;
