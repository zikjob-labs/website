import { EcosystemDark, EcosystemLight } from '@/assets/svg';
import useThemeStore from '@/stores/useThemeStore';
import { isDark } from '@/utils';

function EcosystemSection() {
  const theme = useThemeStore((state) => state.theme);
  return (
    <section className="section">
      <div className="container">
        <h2 className="section__title">
          <strong className="text-primary">ZIKJOB</strong> ecosystem model
        </h2>
        <figure>
          <img
            className="lg:w-3/4 m-auto"
            src={isDark(theme) ? EcosystemDark : EcosystemLight}
            alt="ecosystem"
          />
        </figure>
      </div>
    </section>
  );
}

export default EcosystemSection;
