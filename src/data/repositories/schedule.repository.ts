import {
  SCHEDULE_TODAY_LOADED,
  SCHEDULE_TODAY_FAILURE,
  SCHEDULE_TODAY_FETCHING,
} from '../../state/actions/scheduleToday.action';
import {getScheduleToday} from '../mock/schedule.mock';

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
