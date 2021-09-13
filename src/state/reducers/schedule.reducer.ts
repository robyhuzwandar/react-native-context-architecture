import {Action, StateReducer} from '../../shared/constants/types';
import {
  SCHEDULE_FETCHING,
  SCHEDULE_LOADED,
  SCHEDULE_FAILURE,
} from '../actions/schedule.action';

const scheduleState: StateReducer = {
  data: [],
  isError: false,
  isLoading: false,
  message: '',
};

const scheduleReducer = (state: StateReducer, action: Action) => {
  switch (action.type) {
    case SCHEDULE_FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case SCHEDULE_LOADED:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case SCHEDULE_FAILURE:
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

export {scheduleReducer, scheduleState};
