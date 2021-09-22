import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Home from '../views/screens/home/Home';
import AllSchedule from '../views/screens/schedule/AllSchedule';
import Splash from '../views/screens/common/Splash';
import {StackParamList} from './type';
import {theme} from '../shared/styles/theme';
import ButtonIcon from '../views/components/button/ButtonIcon';
import ScheduleDetails from '../views/screens/schedule/ScheduleDetails';

const AppStack = createNativeStackNavigator<StackParamList>();
export default function RootStackScreen() {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        initialRouteName={'Splash'}
        screenOptions={({navigation}) => ({
          headerStyle: {
            backgroundColor: theme.colors.yellow,
          },
          headerTitleStyle: {
            fontSize: 16,
            fontWeight: 'bold',
          },
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
          options={() => ({})}
        />
        <AppStack.Screen
          options={{headerShown: false}}
          name="Splash"
          component={Splash}
        />
        <AppStack.Screen name="ScheduleDetails" component={ScheduleDetails} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
