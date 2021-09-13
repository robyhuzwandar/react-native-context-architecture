import React from 'react';
import {StatusBar} from 'react-native';
import RootStackScreen from './src/route/app-stack';
import Store from './src/state/store';
import {theme} from './src/shared/styles/theme';

const App = () => (
  <Store>
    <StatusBar
      backgroundColor={theme.colors.yellow}
      barStyle={'dark-content'}
    />
    <RootStackScreen />
  </Store>
);

export default App;
