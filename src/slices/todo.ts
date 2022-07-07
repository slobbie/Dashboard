import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// store -> root reducer(state) -> user slice, order slice
// state.user.emil
// state.order
// state.ui

//action: state를 바꾸는 동작/행위
//dispatch: 그 액션을 실제로 실행하는 함수
// reducer: 액션이 실제로 실행되면 state를 바꾸는 로직
// payload: dispatch로 입력된 데이터가 저장되어있다.

const initialState = {
  id: Date.now(),
  text: '',
  done: '',
};
const TodoSlice = createSlice({
  name: 'Todo',
  initialState,
  reducers: {
    setTodo(state, action) {
      state.id = action.payload.id;
      state.text = action.payload.text;
      state.done = action.payload.done;
    },
  },
  extraReducers: (builder) => {},
});

export default TodoSlice;
