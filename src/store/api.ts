import type {PayloadActionCreator} from '@reduxjs/toolkit';

import {createAction} from '@reduxjs/toolkit';

export interface ApiCall {
  url: string;
  method: 'get' | 'post' | 'put' | 'delete';
  data?: object;
  onSuccess?: string;
  onError?: string;
  onStart?: string;
}

export const apiCallBegan: PayloadActionCreator<ApiCall> = createAction('api/callBegan');
export const apiCallSuccess = createAction('api/callSuccess');
export const apiCallFailed: PayloadActionCreator<Error, 'api/callFailed'> = createAction('api/callFailed');
