import {
  SCHEDULE_TODAY_LOADED,
  SCHEDULE_TODAY_FAILURE,
  SCHEDULE_TODAY_FETCHING,
  NEXT_SCHEDULE_FETCHING,
  NEXT_SCHEDULE_FAILURE,
  NEXT_SCHEDULE_LOADED,
} from '../../state/actions/schedule.action';
import {getNextSchedule, getScheduleToday} from '../mock/schedule.mock';

export const getScheduleTodayRepository = async (
  dispatch: any,
): Promise<void> => {
  dispatch({type: SCHEDULE_TODAY_FETCHING});
  try {
    let response = await getScheduleToday();
    dispatch({type: SCHEDULE_TODAY_LOADED, payload: response});
  } catch (error) {
    dispatch({type: SCHEDULE_TODAY_FAILURE, payload: error});
  }
};

export const getNextScheduleRepository = async (
  dispatch: any,
): Promise<void> => {
  dispatch({type: NEXT_SCHEDULE_FETCHING});
  try {
    let response = await getNextSchedule();
    dispatch({type: NEXT_SCHEDULE_LOADED, payload: response});
  } catch (error) {
    dispatch({type: NEXT_SCHEDULE_FAILURE, payload: error});
  }
};
