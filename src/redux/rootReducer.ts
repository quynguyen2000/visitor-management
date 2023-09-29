import { combineReducers } from 'redux';
import notifyReducer from './features/notification/notifySlice';
import noteReducer from './features/noteSlice/noteSlice';
import customerReducer from './features/customer/customerSlice';

const rootReducer = combineReducers({
  notify: notifyReducer,
  customer: customerReducer,
  notes: noteReducer,
});

export default rootReducer;
