import type {AppState} from '@/store';
import type {PayloadAction} from '@reduxjs/toolkit';

import {createSlice, createSelector} from '@reduxjs/toolkit';

export interface SmsState {
  loading: boolean;
  code: string;
  valid: boolean;
}

const initialState: SmsState = {
  loading: false,
  code: '',
  valid: false,
};

const slice = createSlice({
  name: 'recordsState',
  initialState,
  reducers: {
    setLoading: (state, {payload}: PayloadAction<boolean>) => {
      state.loading = payload;
    },

    // setCode: (state, {payload}: PayloadAction<string>) => {
    //   state.code = payload;
    // },

    // setValid: (state, {payload}: PayloadAction<boolean>) => {
    //   state.valid = payload;
    // },
  },
});

export const {setLoading} = slice.actions;
export default slice.reducer;

export const getLoading = createSelector(
  (state: AppState) => state.recordsState,
  (state) => state.loading
);

// export const getCode = createSelector(
//   (state: AppState) => state.smsState,
//   (state) => state.code
// );

// export const getSmsFormValid = createSelector(
//   (state: AppState) => state.smsState,
//   (state) => state.valid
// );
