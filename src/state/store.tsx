import React from 'react';
import {createContext, useReducer} from 'react';
import {
  nextScheduleReducer,
  nextScheduleState,
} from './reducers/nextSchedule.reducer';
import {
  scheduleTodayReducer,
  scheduleTodayState,
} from './reducers/scheduleToday.reducer';

export type ContextReducers = {
  schedule: any[];
  nextSchedule: any[];
};

const Store = ({children}: any) => {
  const rootReducer: ContextReducers = {
    schedule: useReducer(scheduleTodayReducer, scheduleTodayState),
    nextSchedule: useReducer(nextScheduleReducer, nextScheduleState),
  };
  return <Context.Provider value={rootReducer}>{children}</Context.Provider>;
};

export const Context: any = createContext(null);
export default Store;
