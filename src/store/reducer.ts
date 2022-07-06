import { combineReducers } from 'redux';
import TodoSlice from '../slices/todo';

const rootReducer = combineReducers({
  todo: TodoSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
