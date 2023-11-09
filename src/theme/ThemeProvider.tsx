import { useState, useEffect, createContext } from 'react';
import {
  ThemeEnum,
  ThemeState,
  ThemeProviderProps,
  GLOBAL_THEME_KEY,
  ThemeType,
} from './types';
import { defaultTheme } from './theme';

export const initialThemeState: ThemeState = {
  actualTheme: defaultTheme,
  changeTheme: () => null,
};

export const ThemeContext = createContext(initialThemeState);

const ThemeProvider = ({ theme, children }: ThemeProviderProps) => {
  const [actualTheme, setActualTheme] = useState<ThemeType>(defaultTheme);

  const changeTheme = (newTheme: ThemeEnum) => {
    switch (newTheme) {
      case ThemeEnum.default:
        setActualTheme(defaultTheme);
        break;
      default:
        setActualTheme(defaultTheme);
        break;
    }
  };

  useEffect(() => {
    const localTheme = localStorage.getItem(GLOBAL_THEME_KEY);

    if (localTheme) {
      changeTheme(localTheme as ThemeEnum);
    }
  }, []);


  return (
    <ThemeContext.Provider value={{actualTheme, changeTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
