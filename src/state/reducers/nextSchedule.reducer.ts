import {Action, StateReducer} from '../../shared/constants/types';
import {
  NEXT_SCHEDULE_FETCHING,
  NEXT_SCHEDULE_LOADED,
  NEXT_SCHEDULE_FAILURE,
} from '../actions/schedule.action';

const nextScheduleState: StateReducer = {
  data: '',
  isError: false,
  isLoading: false,
  message: '',
};

const nextScheduleReducer = (state: StateReducer, action: Action) => {
  switch (action.type) {
    case NEXT_SCHEDULE_FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case NEXT_SCHEDULE_LOADED:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case NEXT_SCHEDULE_FAILURE:
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

export {nextScheduleReducer, nextScheduleState};
