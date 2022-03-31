/* eslint-disable react/no-unescaped-entities */
import {
  earthImg,
  ecoImg,
  heroImg,
  icon1Img,
  icon2Img,
  icon3Img,
  social1Img,
  social2Img,
  social3Img,
  social4Img,
  social5Img,
  social7Img,
  symbol1Img,
  symbol2Img,
  symbol3Img,
  whatIsZikjobImg,
} from '@/assets/images';
import {
  ELearningSVG,
  JobSVG,
  MetaverseSVG,
  NftSVG,
  PartnerSVG,
  ProfileSVG,
} from '@/assets/svg';

function HomePage() {
  return (
    <main>
      <section className="hero bg-[url('./src/assets/images/gradient-gray-bg.png')] bg-no-repeat bg-bottom bg-cover">
        <div className="container flex flex-col lg:flex-row items-center">
          <figure className="mb-[20px] lg:mb-0 lg:w-[30%]">
            <img src={heroImg} alt="hero-section" />
          </figure>
          <div className="lg:w-[70%] lg:pl-[28px]">
            <h2 className="text-5xl font-bold">
              Decentralized network for
              <br />
              <strong className="text-blue">Career Opportunities</strong>
            </h2>
            <p className="text-2xl whitespace-pre-line mt-[20px]">
              Leave your footprint on the Metaverse using new generation of
              digital profile
            </p>
          </div>
        </div>
      </section>
      <section className="section lg:mb-[-30px] lg:mt-[-30px]">
        <figure>
          <img src={earthImg} className="w-full" alt="hr-earth" />
        </figure>
      </section>
      <section className="section !mb-0">
        <div className="container grid lg:grid-cols-2 gap-[30px] lg:gap-[137px] items-center">
          <div>
            <h2 className="text-5xl font-bold mb-[50px]">
              What is <strong className="text-blue">ZIKJOB?</strong>
            </h2>
            <p className="leading-[2] mb-[20px]">
              ZIKJOB is a recruiting and career development platform that
              enables digital citizens to network and share trustworthy and
              transparent information via quality profiles.
            </p>
            <p className="leading-[2]">
              Based on users' achievements stored in the ZIKJOB platform, ZIK
              Profile not only helps people seize their dream jobs, but also
              expands their network for sharing and learning new knowledge,
              skills in the Metaverse world.
            </p>
          </div>
          <figure>
            <img src={whatIsZikjobImg} alt="what-is-zikjob" />
          </figure>
        </div>
        <div className="wave bg-[url('./src/assets/images/wavy-bg.png')] bg-no-repeat bg-center bg-cover">
          <div className="container">
            <ul className="wave__list">
              <li className="wave__item">
                <a href="https://polygon.technology/" className="text-center">
                  <img
                    src={icon1Img}
                    alt="polygon-platform"
                    className="mx-auto"
                  />
                  <strong className="font-bold">Polygon</strong>
                </a>
              </li>
              <li className="wave__item wave__item--symbol">
                <figure>
                  <img src={symbol1Img} alt="polygon-symbol" />
                </figure>
              </li>
              <li className="wave__item">
                <a href="https://www.binance.com/" className="text-center">
                  <img src={icon2Img} alt="bsc-platform" className="mx-auto" />
                  <strong className="font-bold">BSC</strong>
                </a>
              </li>
              <li className="wave__item wave__item--symbol">
                <figure>
                  <img src={symbol2Img} alt="bsc-symbol" />
                </figure>
              </li>
              <li className="wave__item">
                <a href="https://solana.com/" className="text-center">
                  <img
                    src={icon3Img}
                    alt="solana-platform"
                    className="mx-auto"
                  />
                  <strong className="font-bold">Solana</strong>
                </a>
              </li>
              <li className="wave__item wave__item--symbol">
                <figure>
                  <img src={symbol3Img} alt="solana-symbil" />
                </figure>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="section mb-[170px]">
        <div className="container xl:max-w-none mb-[50px]">
          <h2 className="text-5xl font-bold text-center">
            What can you do on <strong className="text-blue">ZIKJOB?</strong>
          </h2>
        </div>

        <div className="container flex flex-col lg:flex-row feature">
          <div className="feature__detail mb-[20px] lg:mb-0 lg:w-[25%]">
            <div className="feature__detail__list relative">
              <div className="feature__detail__item profile absolute opacity-100 inset-0 transition-all ease-in-out duration-1000 transform translate-x-0 slide">
                <h3 className="text-2xl font-bold mt-[20px] mb-[20px]">
                  Career development via ZIK profile
                </h3>
                <p className="leading-[2] text-left">
                  ZIK is a profile that replaces the traditional CV when it
                  includes comprehensive and complete information from
                  candidates’ CV with portfolio and implemented projects
                  verified by ZIK team’s members, therefore boosting the
                  transparency and reliability.
                </p>
              </div>
              <div className="feature__detail__item nft absolute opacity-0 inset-0 transition-all ease-in-out duration-1000 transform slide">
                <h3 className="text-2xl font-bold mt-[20px] mb-[20px]">
                  Collect and trade in NFT marketplace
                </h3>
                <p className="leading-[2] text-left">
                  The NFT marketplace is where users can trade NFT collected
                  while engaging in activities on ZIKJOB. NFT are transmitted
                  and incorporated into members' ZIK profiles. Members owning a
                  NFT/NFTs will get benefits based on that NFT's type.
                </p>
              </div>
              <div className="feature__detail__item job absolute opacity-0 inset-0 transition-all ease-in-out duration-1000 transform slide">
                <h3 className="text-2xl font-bold mt-[20px] mb-[20px]">
                  Seeking job opportunities
                </h3>
                <p className="leading-[2] text-left">
                  Users can access a variety of jobs on a single platform rather
                  than different websites; the material on the page is also
                  pre-filtered to avoid duplication, and of course, users can
                  always find a job for free.
                </p>
              </div>
              <div className="feature__detail__item metaverse absolute opacity-0 inset-0 transition-all ease-in-out duration-1000 transform slide">
                <h3 className="text-2xl font-bold mt-[20px] mb-[20px]">
                  Share and to be shared in Metaverse
                </h3>
                <p className="leading-[2] text-left">
                  Users may seek advice or guidance from other ZIKJOB members
                  via Meeting in the Metaverse. Members' competencies are
                  published in their ZIK profile, which enables users to readily
                  reach the right mentors with the relevant experience.
                </p>
              </div>
              <div className="feature__detail__item e-learning absolute opacity-0 inset-0 transition-all ease-in-out duration-1000 transform slide">
                <h3 className="text-2xl font-bold mt-[20px] mb-[20px]">
                  Enrich your professionalism
                </h3>
                <p className="leading-[2] text-left">
                  ZIKJOB offers online courses as well as specialized materials
                  from the community to provide users with additional learning
                  tools and opportunities to enhance their professional skills.
                </p>
              </div>
            </div>
          </div>
          <div className="feature__right lg:w-[75%] lg:pl-[137px]">
            <ul className="feature__list">
              <li
                className="feature__item cursor-pointer active"
                slide-for="profile"
              >
                <div className="feature__link">
                  <figure>
                    <ProfileSVG />
                  </figure>
                  <h3>ZIK Profile</h3>
                </div>
              </li>
              <li className="feature__item cursor-pointer" slide-for="nft">
                <div className="feature__link">
                  <figure>
                    <NftSVG />
                  </figure>
                  <h3>NFT Marketplace</h3>
                </div>
              </li>
              <li className="feature__item cursor-pointer" slide-for="job">
                <div className="feature__link">
                  <figure>
                    <JobSVG />
                  </figure>
                  <h3>Job Opportunities</h3>
                </div>
              </li>
              <li
                className="feature__item cursor-pointer"
                slide-for="metaverse"
              >
                <div className="feature__link">
                  <figure>
                    <MetaverseSVG />
                  </figure>
                  <h3>Metaverse Networking</h3>
                </div>
              </li>
              <li
                className="feature__item cursor-pointer"
                slide-for="e-learning"
              >
                <div className="feature__link">
                  <figure>
                    <ELearningSVG />
                  </figure>
                  <h3>Enriched Resource</h3>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2 className="text-5xl font-bold text-center mb-[50px]">
            <strong className="text-blue">ZIKJOB</strong> ecosystem model
          </h2>
          <figure>
            <img className="lg:w-3/4 m-auto" src={ecoImg} alt="ecosystem" />
          </figure>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2 className="text-5xl font-bold text-center mb-[50px]">
            Our roadmap
          </h2>
          <div className="steps grid md:grid-cols-4 gap-[28px]">
            <div className="step">
              <h3 className="text-xl font-medium mb-[30px]">Q1 2022</h3>
              <ul>
                <li>Research Market</li>
                <li>Build Social and Marketing Community</li>
                <li>Publish website</li>
                <li>Introduce of the ZIKJOB Community Program (Airdrop,...)</li>
              </ul>
            </div>
            <div className="step">
              <h3 className="text-xl font-medium mb-[30px]">Q2 2022</h3>
              <ul>
                <li>Sell NFT Box</li>
                <li>Open ZIKJOB Token Public Sale</li>
                <li>Run Beta Test Profile (Zik) System</li>
                <li>Airdrop NFT Achievement for early users</li>
                <li>Launch ZJS Staking Program</li>
              </ul>
            </div>
            <div className="step">
              <h3 className="text-xl font-medium mb-[30px]">Q3 2022</h3>
              <ul>
                <li>Open NFT Box</li>
                <li>Launch Profile (Zik) System</li>
                <li>Run Beta Job Listing System</li>
                <li>Launch NFT Marketplace</li>
                <li>Sell NFT Achievement Token</li>
              </ul>
            </div>
            <div className="step">
              <h3 className="text-xl font-medium mb-[30px]">Q4 2022</h3>
              <ul>
                <li>Launch ZIKJOB DAO</li>
                <li>Build Multichain: Polygon, Solana, Avax, Near,...</li>
                <li>Run Beta NFT Tool for make achievement</li>
                <li>Launch Job Listing System</li>
                <li>Run Beta Test Profile Bank</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="section partner">
        <div className="container">
          <h2 className="text-5xl font-bold text-center mb-[50px]">
            Our Partners & Investors
          </h2>
          <ul className="partner__list">
            <li className="partner__item">
              <a href="#" className="partner__item-inner">
                <img src={PartnerSVG} alt="partner-coming-soon" />
              </a>
            </li>
            <li className="partner__item">
              <a href="#" className="partner__item-inner">
                <img src={PartnerSVG} alt="partner-coming-soon" />
              </a>
            </li>
            <li className="partner__item">
              <a href="#" className="partner__item-inner">
                <img src={PartnerSVG} alt="partner-coming-soon" />
              </a>
            </li>
            <li className="partner__item">
              <a href="#" className="partner__item-inner">
                <img src={PartnerSVG} alt="partner-coming-soon" />
              </a>
            </li>
            <li className="partner__item">
              <a href="#" className="partner__item-inner">
                <img src={PartnerSVG} alt="partner-coming-soon" />
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className="section community">
        <div className="container">
          <h2 className="text-5xl font-bold text-center mb-[50px]">
            Join the community
          </h2>
          <ul className="community__list">
            <li className="community__item">
              <a
                href="https://t.me/zikjob_global_chat"
                className="community__item-link"
              >
                <figure>
                  <img src={social1Img} alt="telegram" />
                </figure>
                <h3 className="font-medium text-lg">Telegram</h3>
                <span className="text-tiny">Come and chat</span>
              </a>
            </li>
            <li className="community__item">
              <a
                href="https://twitter.com/zikjob"
                className="community__item-link"
              >
                <figure>
                  <img src={social2Img} alt="twitter" />
                </figure>
                <h3 className="font-medium text-lg">Twitter</h3>
                <span className="text-tiny">@zikjob</span>
              </a>
            </li>
            <li className="community__item">
              <a
                href="https://discord.gg/QqcT2Y4XST"
                className="community__item-link"
              >
                <figure>
                  <img src={social3Img} alt="discord" />
                </figure>
                <h3 className="font-medium text-lg">Discord</h3>
                <span className="text-tiny">Meet the community</span>
              </a>
            </li>
            <li className="community__item">
              <a
                href="https://facebook.com/zikjob"
                className="community__item-link"
              >
                <figure>
                  <img src={social4Img} alt="facebook" />
                </figure>
                <h3 className="font-medium text-lg">Facebook</h3>
                <span className="text-tiny">Like and share</span>
              </a>
            </li>
            <li className="community__item">
              <a
                href="https://medium.com/@zikjobglobal"
                className="community__item-link"
              >
                <figure>
                  <img src={social5Img} alt="medium" />
                </figure>
                <h3 className="font-medium text-lg">Medium</h3>
                <span className="text-tiny">News updates</span>
              </a>
            </li>
            <li className="community__item">
              <a
                href="https://github.com/zikjob-labs"
                className="community__item-link"
              >
                <figure>
                  <img src={social7Img} alt="news" />
                </figure>
                <h3 className="font-medium text-lg">Github</h3>
                <span className="text-tiny">The code behind ZIKJOB</span>
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className="section subscription !mb-0">
        <div className="container">
          <form
            id="newsletter"
            className="subscription__form"
            method="POST"
            action="https://d2xeaazpoe.execute-api.ap-southeast-1.amazonaws.com/api/subscribe"
          >
            <div className="subscription__form-inner">
              <h2 className="font-bold text-center text-5xl mb-[50px]">
                Stay to update
              </h2>
              <div className="form-group">
                <input
                  id="email"
                  required
                  type="email"
                  name="email"
                  placeholder="Your email address"
                />
                <button
                  type="submit"
                  className="btn btn-primary btn-primary-gradient"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
