import React from "react";

export const GLOBAL_THEME_KEY = "globalTheme";

export enum ThemeEnum {
  default = "default",
  dark = "dark",
}

export type ThemeState = {
  actualTheme: ThemeType;
  changeTheme: (theme: ThemeEnum) => void;
};

export type ThemeProviderProps = {
  children: React.ReactNode;
  theme?: ThemeEnum;
};

type ColorType = {
  color: string;
  contrast: string;
  hover: string;
  active: string;
  opacity: string;
};

type NotificationColorType = {
  border: string;
  background: string;
};

export type ThemeType = {
  grayA9: string;
  gray2D: string;
  gray4D: string;
  gray80: string;
  grayB8: string;
  grayCC: string;
  grayC4: string;
  grayC4Trans: string;
  grayF0: string;
  grayF5: string;
  black: string;
  white: string;
  blue: string;
  overlayBlack: string;
  greenA1: string;
  butter: string;
  grayC5: string;
  grayC6: string;
  hover:string;
  fonts: {
    fontSizeSmall: string;
    fontSizeMedium: string;
    fontSizeLarge: string;
    family: string;
    title:string;
  };
};
