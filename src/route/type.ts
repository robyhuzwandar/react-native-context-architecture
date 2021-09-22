import {StackNavigationProp} from '@react-navigation/stack';
import {ScheduleDetailsParams} from '../views/screens/schedule/ScheduleDetails';

export type StackParamList = {
  default: undefined;
  Home: undefined;
  Splash: undefined;
  AllSchedule: undefined;
  ScheduleDetails: ScheduleDetailsParams;
};

export type DefaultNavigationProps<T extends keyof StackParamList> =
  StackNavigationProp<StackParamList, T>;

export type ParamList<T> = {
  params: T | object | undefined;
};
