import {Dimensions, StyleProp, TextStyle} from 'react-native';

export const theme: Theme = {
  colors: {
    yellow: '#FAE00D',
    green: '#0ECD9D',
    red: '#CD0E61',
    black: '#0B0B0B',
    white: '#F0F2F3',
    silver: '#C2C2C2',
    grey: '#ADADAD',
  },
  spacing: {
    xxxs: 2,
    xxs: 4,
    xs: 8,
    s: 12,
    m: 16,
    l: 24,
    xl: 32,
    xxl: 40,
    xxxl: 48,
    widthScreen: Dimensions.get('window').width,
    heightScreen: Dimensions.get('window').height,
  },

  textVariants: {
    header: {
      h1: {
        fontSize: 34,
        fontWeight: 'bold',
      },
      h2: {
        fontSize: 24,
        fontWeight: 'bold',
      },
      h3: {
        fontSize: 20,
        fontWeight: 'bold',
      },
      h4: {
        fontSize: 18,
        fontWeight: 'bold',
      },
    },
    body: {
      b1: {
        fontSize: 16,
        fontWeight: '400',
      },
      b2: {
        fontSize: 14,
        fontWeight: '400',
      },
      b3: {
        fontSize: 12,
        fontWeight: '400',
      },
    },
    bodyBold: {
      bb1: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      bb2: {
        fontSize: 14,
        fontWeight: 'bold',
      },
      bb3: {
        fontSize: 12,
        fontWeight: 'bold',
      },
    },
  },
};

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
  h1: StyleProp<TextStyle>;
  h2: StyleProp<TextStyle>;
  h3: StyleProp<TextStyle>;
  h4: StyleProp<TextStyle>;
};

type TextBody = {
  b1: StyleProp<TextStyle>;
  b2: StyleProp<TextStyle>;
  b3: StyleProp<TextStyle>;
};

type TextBodyBold = {
  bb1: StyleProp<TextStyle>;
  bb2: StyleProp<TextStyle>;
  bb3: StyleProp<TextStyle>;
};

type Spacing = {
  xxxs: number;
  xxs: number;
  xs: number;
  s: number;
  m: number;
  l: number;
  xl: number;
  xxl: number;
  xxxl: number;
  widthScreen: number;
  heightScreen: number;
};

type Theme = {
  colors: Colors;
  spacing: Spacing;
  textVariants: TextVariant;
};
