import {StyleProp, TextStyle} from 'react-native';

type Colors = {
  yellow: string;
  green: string;
  red: string;
  black: string;
  white: string;
  silver: string;
  grey: string;
};

type TextVariant = {
  header: TextHeader;
  body: TextBody;
  bodyBold: TextBodyBold;
};

type TextHeader = {
  /**
   * h1: 34px, Bold
   */
  h1: StyleProp<TextStyle>;
  /**
   * h1: 24px, Bold
   */
  h2: StyleProp<TextStyle>;
  /**
   * h1: 20px, Bold
   */
  h3: StyleProp<TextStyle>;
  /**
   * h1: 18px, Bold
   */
  h4: StyleProp<TextStyle>;
};

type TextBody = {
  /**
   * b1: 16px, Regular
   */
  b1: StyleProp<TextStyle>;
  /**
   * b2: 14px, Regular
   */
  b2: StyleProp<TextStyle>;
  /**
   * b3: 12px, Regular
   */
  b3: StyleProp<TextStyle>;
};

type TextBodyBold = {
  /**
   * bb1: 16px, Bold
   */
  bb1: StyleProp<TextStyle>;
  /**
   * bb2: 14px, Bold
   */
  bb2: StyleProp<TextStyle>;
  /**
   * bb3: 12px, Bold
   */
  bb3: StyleProp<TextStyle>;
};

type Spacing = {
  /**
   * xxxs: 2px,
   */
  xxxs: number;
  /**
   * xxs: 4px,
   */
  xxs: number;
  /**
   * xs: 8px,
   */
  xs: number;
  /**
   * s: 12px,
   */
  s: number;
  /**
   * m: 16px,
   */
  m: number;
  /**
   * l: 24px,
   */
  l: number;
  /**
   * xl: 32px,
   */
  xl: number;
  /**
   * xxl: 40px,
   */
  xxl: number;
  /**
   * xxxl: 48px,
   */
  xxxl: number;
  /**
   * device width screen
   */
  widthScreen: number;
  /**
   * device height screen
   */
  heightScreen: number;
};

export type Theme = {
  colors: Colors;
  spacing: Spacing;
  textVariants: TextVariant;
};
