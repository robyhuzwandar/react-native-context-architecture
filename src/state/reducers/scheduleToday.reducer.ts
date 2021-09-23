import {Action, StateReducer} from '../../shared/constants/types';
import {
  SCHEDULE_TODAY_FETCHING,
  SCHEDULE_TODAY_LOADED,
  SCHEDULE_TODAY_FAILURE,
} from '../actions/scheduleToday.action';

const scheduleTodayState: StateReducer = {
  data: '',
  isError: false,
  isLoading: false,
  message: '',
};

const scheduleTodayReducer = (state: StateReducer, action: Action) => {
  switch (action.type) {
    case SCHEDULE_TODAY_FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case SCHEDULE_TODAY_LOADED:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case SCHEDULE_TODAY_FAILURE:
      return {
        ...state,
        isError: true,
        isLoading: false,
        message: action.message,
      };
    default:
      return state;
  }
};

export {scheduleTodayReducer, scheduleTodayState};
