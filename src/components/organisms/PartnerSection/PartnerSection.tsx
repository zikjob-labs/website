import {
  CoinGeckoDarkPartner,
  CoinGeckoLightPartner,
  CoinMarketCapDarkPartner,
  CoinMarketCapLightPartner,
} from '@/assets/svg';
import useThemeStore from '@/stores/useThemeStore';
import { isDark } from '@/utils';

function PartnerSection() {
  const theme = useThemeStore((state) => state.theme);
  const partners = [
    {
      name: 'coinmarketcap',
      href: 'https://coinmarketcap.com/currencies/zikjob',
      img: isDark(theme) ? CoinMarketCapLightPartner : CoinMarketCapDarkPartner,
    },
    {
      name: 'coingecko',
      href: '#',
      img: isDark(theme) ? CoinGeckoLightPartner : CoinGeckoDarkPartner,
    },
  ];
  return (
    <section className="section partner">
      <div className="container">
        <h2 className="section__title mb-5 lg:mb-[50px]">Our Partners</h2>
        <ul className="partner__list">
          {partners.map((partner, index) => (
            <li key={index} className="partner__item">
              <a
                href={partner.href}
                target="_blank"
                rel="noreferrer"
                className="partner__item-inner"
              >
                <img src={partner.img} alt={`${partner.name}-partner`} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default PartnerSection;
