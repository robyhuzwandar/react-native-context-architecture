export type StateReducer = {
  data: any[] | null | undefined | any;
  message: any;
  isError: boolean;
  isLoading: boolean;
  isReload?: boolean;
};
export type Action = {
  payload: any;
  type: any;
  message: any;
};
