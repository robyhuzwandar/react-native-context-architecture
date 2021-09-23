import {useContext, useEffect} from 'react';
import {getNextScheduleRepository} from '../data/repositories/schedule.repository';
import {Context, ContextReducers} from '../state/store';
import {ScheduleModel} from '../data/models/schedule.model';

export type UseNextScheduleParams = {
  isLoading: Boolean;
  isError: Boolean;
  isEmpty: Boolean;
  data: ScheduleModel[];
};

const useNextSchedule: any = (): UseNextScheduleParams => {
  const [state, dispatch] = useContext<ContextReducers>(Context).nextSchedule;

  useEffect(() => {
    getNextScheduleRepository(dispatch);
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

export default useNextSchedule;
