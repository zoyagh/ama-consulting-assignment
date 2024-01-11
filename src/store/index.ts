// import {rtkQueryErrorLogger} from './middleware/errorHandler';
import type {ThunkAction, Action} from '@reduxjs/toolkit';

import {configureStore} from '@reduxjs/toolkit';
import reducer from '@/store/reducer';
import {createWrapper} from 'next-redux-wrapper';
import {api} from '@/shared/api/api';

const makeStore = () =>
  configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== 'production',

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware).concat(),
  });
export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;

const wrapper = createWrapper<AppStore>(makeStore);
export default wrapper;
