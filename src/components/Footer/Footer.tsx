import {
  logoImg,
  social1Img,
  social2Img,
  social3Img,
  social4Img,
  social5Img,
} from '@/assets/images';

function Footer() {
  const socials = [
    {
      name: 'telegram',
      link: 'https://t.me/zikjob_global_chat',
      src: social1Img,
    },
    { name: 'twitter', link: 'https://twitter.com/zikjob', src: social2Img },
    { name: 'discord', link: 'https://discord.gg/QqcT2Y4XST', src: social3Img },
    { name: 'facebook', link: 'https://facebook.com/zikjob', src: social4Img },
    {
      name: 'medium',
      link: 'https://medium.com/@zikjobglobal',
      src: social5Img,
    },
  ];
  return (
    <footer className="footer pt-12 pb-6">
      <div className="container">
        <div className="footer__top grid lg:grid-cols-[25%_auto_25%] gap-[20px] items-center">
          <figure className="footer__logo">
            <img width="159" src={logoImg} alt="logo" />
          </figure>
          <nav className="footer__navbar">
            <ul className="flex items-center justify-center">
              <li>
                <a href="https://zikjob.com">Home</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="https://docs.zikjob.com">Whitepaper</a>
              </li>
            </ul>
          </nav>
          <ul className="footer__social flex items-center justify-center lg:justify-end">
            {socials.map((social, index) => (
              <li key={index}>
                <a href={social.link}>
                  <img src={social.src} alt={social.name} />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-4 text-[#767676] text-xs text-center">
          <p>©2022 ZIKJOB. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
