import React from 'react';
import {createContext, useReducer} from 'react';
import {scheduleReducer, scheduleState} from './reducers/schedule.reducer';

export type ContextReducers = {
  schedule: any[];
};

const Store = ({children}: any) => {
  const rootReducer: ContextReducers = {
    schedule: useReducer(scheduleReducer, scheduleState),
  };
  // eslint-disable-next-line react/react-in-jsx-scope
  return <Context.Provider value={rootReducer}>{children}</Context.Provider>;
};

export const Context: any = createContext(null);
export default Store;
