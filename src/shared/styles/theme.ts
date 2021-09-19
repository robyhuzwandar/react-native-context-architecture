import {Dimensions} from 'react-native';
import {Theme} from './types';

export const theme: Theme = {
  colors: {
    yellow: '#FAE00D',
    green: '#0ECD9D',
    red: '#CD0E61',
    black: '#0B0B0B',
    white: 'white',
    silver: '#e8e8e8',
    grey: 'gray',
  },
  spacing: {
    xxxs: 2,
    xxs: 4,
    xs: 8,
    s: 12,
    m: 16,
    l: 20,
    xl: 24,
    xxl: 28,
    xxxl: 32,
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
