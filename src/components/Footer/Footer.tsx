import logoImg from '../../assets/images/logo.png';
import social1 from '../../assets/images/social-1.png';
import social2 from '../../assets/images/social-2.png';
import social3 from '../../assets/images/social-3.png';
import social4 from '../../assets/images/social-4.png';
import social5 from '../../assets/images/social-5.png';

function Footer() {
  return (
    <footer className="footer">
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
            <li>
              <a href="https://t.me/zikjob_global_chat">
                <img src={social1} alt="telegram-channel" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/zikjob">
                <img src={social2} alt="twitter" />
              </a>
            </li>
            <li>
              <a href="https://discord.gg/QqcT2Y4XST">
                <img src={social3} alt="discord" />
              </a>
            </li>
            <li>
              <a href="https://facebook.com/zikjob">
                <img src={social4} alt="facebook" />
              </a>
            </li>
            <li>
              <a href="https://medium.com/@zikjobglobal">
                <img src={social5} alt="medium" />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__bottom text-center">
          <p>©2022 ZIKJOB. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
