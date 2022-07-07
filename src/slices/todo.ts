import {
  createAction,
  createSelector,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

// store -> root reducer(state) -> user slice, order slice
// state.user.emil
// state.order
// state.ui

//action: state를 바꾸는 동작/행위
//dispatch: 그 액션을 실제로 실행하는 함수
// reducer: 액션이 실제로 실행되면 state를 바꾸는 로직
// payload: dispatch로 입력된 데이터가 저장되어있다.

export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

export interface TodoList {
  list: Todo[];
}
const actionPrefix = 'TODOS';

const addTodos = createAction<object>(`${actionPrefix}/add`);
const toggleTodos = createAction<object>(`${actionPrefix}/toggle`);

const initialState: TodoList = {
  list: [],
};

const reducers = {
  add: (
    { list }: TodoList,
    { payload: { text, done } }: PayloadAction<Todo>
  ) => {
    const newTodo: Todo = {
      id: Date.now(),
      text: text.toString(),
      done,
    };
    list.push(newTodo);
  },
  toggle: (
    { list }: TodoList,
    { payload: { id, done } }: PayloadAction<Todo>
  ) => {
    const targetIndex = list.findIndex((item: Todo) => item.id === id);
    list[targetIndex].done = !done;
  },
};

const TodoSlice = createSlice({
  name: actionPrefix,
  initialState,
  reducers,

  extraReducers: (builder) => {},
});

export const selectTodoList = createSelector(
  (state: TodoList) => state.list,
  (list: Todo[]) => list
);

export const actions = { addTodos, toggleTodos };

export default TodoSlice;
