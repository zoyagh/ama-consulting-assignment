import type {Middleware} from '@reduxjs/toolkit';
import {isRejectedWithValue} from '@reduxjs/toolkit';
import Router from 'next/router';

// import {toast} from 'react-toastify';

export const rtkQueryErrorLogger: Middleware = () => (next) => async (action) => {
  // if (isRejectedWithValue(action)) {
  //   if (action?.payload?.status === 401) {
  //     return next(action);
  //   }
  //   if (action?.meta?.baseQueryMeta?.request?.method === 'GET') {
  //     if (
  //       action?.payload?.data?.message?.includes('Validation failed') ||
  //       action?.payload?.data?.message === 'error.clientRequestNotFound' ||
  //       action?.payload?.data?.message === 'error.quoteRequestNotFound'
  //     ) {
  //       Router.push('/requests');
  //       toast.error('Request not found!');
  //     } else {
  //       toast.error('Something went wrong!');
  //     }
  //   }

  //   return next(action);
  // }

  return next(action);
};
