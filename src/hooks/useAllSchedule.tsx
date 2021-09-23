import {useContext, useEffect} from 'react';
import {getNextScheduleRepository} from '../data/repositories/schedule.repository';
import {Context, ContextReducers} from '../state/store';
import {ScheduleModel} from '../data/models/schedule.model';
import {getMontAndDate, getMont} from '../shared/utils/date';
import {ScheduleOfMonthModel} from '../data/models/scheduleOfMonth.model';

export type UseAllScheduleParams = {
  isLoading: Boolean;
  isError: Boolean;
  isEmpty: Boolean;
  scheduleThisMonth: ScheduleOfMonthModel[];
};

const useAllSchedule: any = (): UseAllScheduleParams => {
  const [state, dispatch] = useContext<ContextReducers>(Context).nextSchedule;

  useEffect(() => {
    getNextScheduleRepository(dispatch);
  }, [dispatch]);

  let isLoading: Boolean = state.isLoading;
  let isError: Boolean = state.isError;
  let isEmpty: Boolean =
    !state.isLoading && !state.isError && state.data.length === 0;
  let schedules: ScheduleModel[] =
    !state.isLoading &&
    !state.isError &&
    state.data !== null &&
    state.data !== ''
      ? state.data
      : '';

  let date = new Date();

  let numberOfDays: number = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0,
  ).getDate();

  let scheduleThisMonth: ScheduleOfMonthModel[] = [];
  let month: string = getMont(date);

  if (schedules) {
    for (let i = date.getDate(); i <= numberOfDays; i++) {
      let schedule = schedules.find(item => {
        return (
          getMontAndDate(item.timeStart).toLowerCase() ===
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
