import { IconMoonToggle, IconSunToggle } from '@/assets/svg';
import useThemeStore from '@/stores/useThemeStore';

function ThemeToggle() {
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  return (
    <li className="dropdown__item !justify-between">
      <span>Theme</span>
      <label className="theme__toggle inline-flex relative items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          onChange={toggleTheme}
        />
        <div className="toggle_theme_button relative w-14 h-7 bg-primary rounded-full after:content-[''] after:absolute after:top-0 after:left-0 after:bg-light after:rounded-full after:h-7 after:w-7 after:transition-all peer peer-checked:after:translate-x-full peer-checked:bg-blue-600">
          <IconSunToggle />
          <IconMoonToggle />
        </div>
      </label>
    </li>
  );
}

export default ThemeToggle;
