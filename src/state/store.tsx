import React from 'react';
import {createContext, useReducer} from 'react';
import {
  scheduleTodayReducer,
  scheduleTodayState,
} from './reducers/scheduleToday.reducer';

export type ContextReducers = {
  schedule: any[];
};

const Store = ({children}: any) => {
  const rootReducer: ContextReducers = {
    schedule: useReducer(scheduleTodayReducer, scheduleTodayState),
  };
  return <Context.Provider value={rootReducer}>{children}</Context.Provider>;
};

export const Context: any = createContext(null);
export default Store;
