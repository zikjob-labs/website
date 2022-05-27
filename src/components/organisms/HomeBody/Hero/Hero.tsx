import { heroImg } from '@/assets/images';

function Hero() {
  return (
    <section className="hero bg-[url('./src/assets/images/gradient-gray-bg.png')] bg-no-repeat bg-bottom bg-cover">
      <div className="container flex flex-col lg:flex-row items-center">
        <figure className="mb-5 lg:mb-0 lg:w-[30%]">
          <img src={heroImg} alt="hero-section" />
        </figure>
        <div className="lg:w-[70%] lg:pl-8">
          <h2 className="text-2xl lg:text-5xl font-semibold">
            Decentralized network for
            <br />
            <span className="text-primary">Career Opportunities</span>
          </h2>
          <p className="lg:text-2xl font-normal whitespace-pre-line mt-2 lg:mt-5">
            Leave your footprint on the Metaverse using new generation of
            digital profile
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
