import {ScheduleModel} from '../data/models/schedule.model';
import {getMonthAndDate, getMonth} from '../shared/utils/date';
import {ScheduleOfMonthModel} from '../data/models/scheduleOfMonth.model';
import useNextSchedule from './useNextSchedule';

export type UseAllScheduleParams = {
  isLoading: Boolean;
  isError: Boolean;
  isEmpty: Boolean;
  scheduleThisMonth: ScheduleOfMonthModel[];
};

const useAllSchedule: any = (): UseAllScheduleParams => {
  const {isLoading, isError, data, isEmpty} = useNextSchedule();

  let date = new Date();
  let schedules: ScheduleModel[] = data;

  let numberOfDays: number = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0,
  ).getDate();

  let scheduleThisMonth: ScheduleOfMonthModel[] = [];
  let month: string = getMonth(date);

  if (schedules) {
    for (let i = date.getDate(); i <= numberOfDays; i++) {
      let schedule = schedules.find(item => {
        return (
          getMonthAndDate(item.timeStart).toLowerCase() ===
          `${month} ${i}`.toLowerCase()
        );
      });

      if (schedule) {
        let scheduleInDate: ScheduleOfMonthModel = {
          schedule: schedule,
          month: month,
          date: `${i}`,
        };
        scheduleThisMonth.push(scheduleInDate);
      } else {
        let scheduleInDate: ScheduleOfMonthModel = {
          month: month,
          date: `${i}`,
          schedule: undefined,
        };
        scheduleThisMonth.push(scheduleInDate);
      }
    }
  }

  return {isLoading, isError, isEmpty, scheduleThisMonth};
};

export default useAllSchedule;
