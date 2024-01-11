import type {Middleware, Dispatch, AnyAction} from 'redux';

import axios from 'axios';
import {apiCallBegan, apiCallSuccess, apiCallFailed} from '@/store/api';

const api: Middleware =
  ({dispatch}) =>
  (next: Dispatch<AnyAction>) =>
  async (action: AnyAction) => {
    if (action.type !== apiCallBegan.type) return next(action);

    const {url, method, data, onStart, onSuccess, onError} = action.payload;

    if (onStart) dispatch({type: onStart});

    next(action);

    try {
      const response = await axios.request({
        baseURL: 'https://cargonect.com',
        url,
        method,
        data,
      });

      // General
      dispatch(apiCallSuccess(response.data));
      // Specific
      if (onSuccess) dispatch({type: onSuccess, payload: response.data});
    } catch (error) {
      if (error instanceof Error) {
        // General
        dispatch(apiCallFailed(error));
        // Specific
        if (onError) dispatch({type: onError, payload: error.message});
      }
    }
  };

export default api;
