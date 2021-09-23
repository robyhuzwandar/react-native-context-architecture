import {ScheduleModel} from './schedule.model';

export interface ScheduleOfMonthModel {
  schedule?: ScheduleModel;
  month: string;
  date: string;
}
