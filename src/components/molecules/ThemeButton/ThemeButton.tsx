import { IconMoon, IconSun } from '@/assets/svg';
import useThemeStore from '@/stores/useThemeStore';
import { isDark } from '@/utils';

function ThemeButton() {
  const [theme, toggleTheme] = useThemeStore((state) => [
    state.theme,
    state.toggleTheme,
  ]);

  return (
    <div
      onClick={toggleTheme}
      className="lg:ml-4 w-10 lg:w-11 flex justify-center hover:bg-blue-50 dark:hover:bg-primary rounded-full"
    >
      <img
        width="24"
        src={isDark(theme) ? IconSun : IconMoon}
        alt="zikjob-switch-theme"
      />
    </div>
  );
}

export default ThemeButton;
