import {useContext, useEffect} from 'react';
import {getScheduleTodayRepository} from '../data/repositories/schedule.repository';
import {Context, ContextReducers} from '../state/store';

export type UseScheduleProps = {
  isLoading: Boolean;
  isError: Boolean;
  isEmpty: Boolean;
  data: any;
};

const useSchedule: any = (): UseScheduleProps => {
  const [state, dispatch] = useContext<ContextReducers>(Context).schedule;

  useEffect(() => {
    getScheduleTodayRepository(dispatch);
  }, [dispatch]);

  let isLoading: Boolean = state.isLoading;
  let isError: Boolean = state.isError;
  let isEmpty: Boolean =
    !state.isLoading && !state.isError && state.data.length === 0;
  let data =
    !state.isLoading &&
    !state.isError &&
    state.data !== null &&
    state.data !== ''
      ? state.data
      : '';

  return {isLoading, isError, isEmpty, data};
};

export default useSchedule;
