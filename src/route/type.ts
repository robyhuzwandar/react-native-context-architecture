import {StackNavigationProp} from '@react-navigation/stack';

export type StackParamList = {
  default: undefined;
  Home: undefined;
  Splash: undefined;
  AllSchedule: undefined;
  ScheduleDetails: undefined;
};

export type DefaultNavigationProps<T extends keyof StackParamList> =
  StackNavigationProp<StackParamList, T>;

export type ParamList = {
  params?: object | undefined;
};
