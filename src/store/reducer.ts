import {combineReducers} from 'redux';
import recordsReducer from '@/store/slices/records';

import {api} from '@/shared/api/api';

const rootReducer = combineReducers({
  recordsState: recordsReducer,
  
  [api.reducerPath]: api.reducer,
});

export default rootReducer;
