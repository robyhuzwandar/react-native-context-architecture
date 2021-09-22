import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Home from '../views/screens/home/Home';
import AllSchedule from '../views/screens/schedule/AllSchedule';
import Splash from '../views/screens/common/Splash';
import {StackParamList} from './type';
import {theme} from '../shared/styles/theme';
import ButtonIcon from '../views/components/button/ButtonIcon';

const AppStack = createNativeStackNavigator<StackParamList>();
export default function RootStackScreen() {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        initialRouteName={'Splash'}
        screenOptions={({navigation}) => ({
          headerLeft: () => (
            <ButtonIcon
              onPress={() => navigation.goBack()}
              iconName={'arrow-left'}
              size={theme.spacing.xl}
            />
          ),
        })}>
        <AppStack.Screen
          options={{headerShown: false}}
          name="Home"
          component={Home}
        />
        <AppStack.Screen
          name="AllSchedule"
          component={AllSchedule}
          options={() => ({
            title: 'UPCOMING SCHEDULE',
            headerTitleStyle: {fontSize: 16, fontWeight: 'bold'},
            headerStyle: {
              backgroundColor: theme.colors.yellow,
            },
            headerRight: () => (
              <ButtonIcon onPress={() => {}} iconName={'refresh-cw'} />
            ),
            headerBackTitleVisible: false,
          })}
        />
        <AppStack.Screen
          options={{headerShown: false}}
          name="Splash"
          component={Splash}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
