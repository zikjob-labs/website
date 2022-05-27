import { earthImg, earthImgWebP } from '@/assets/images';

function EarthSection() {
  return (
    <section className="section hidden lg:block mt-5 !mb-24">
      <figure>
        <picture>
          <source srcSet={earthImgWebP} type="image/webp" />
          <source srcSet={earthImg} type="image/jpeg" />
          <img src={earthImg} className="w-full" alt="hr-earth" />
        </picture>
      </figure>
    </section>
  );
}

export default EarthSection;
