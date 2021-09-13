import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Home from '../views/screens/home/Home';
import AllSchedule from '../views/screens/schedule/AllSchedule';
import Splash from '../views/screens/common/Splash';
import {StackParamList} from './type';

const AppStack = createNativeStackNavigator<StackParamList>();
export default function RootStackScreen() {
  return (
    <NavigationContainer>
      <AppStack.Navigator initialRouteName={'Splash'}>
        <AppStack.Screen
          options={{headerShown: false}}
          name="Home"
          component={Home}
        />
        <AppStack.Screen name="AllSchedule" component={AllSchedule} />
        <AppStack.Screen
          options={{headerShown: false}}
          name="Splash"
          component={Splash}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
