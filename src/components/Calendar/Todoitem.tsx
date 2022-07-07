import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Colors from '../../constants/Colors';
import { actions, selectTodoList, Todo } from '../../slices/todo';
import { useAppDispatch } from '../../store';
import { RootState } from '../../store/reducer';

const TodoItem = () => {
  const dispatch = useAppDispatch();
  const todoList = useSelector<RootState, Todo[]>((state) =>
    selectTodoList(state.todo)
  );
  // Todo checkbox Toggle 상태관리
  const handleChkbox = useCallback(
    (item: Todo) => {
      dispatch(actions.toggleTodos(item));
    },
    [dispatch]
  );

  return (
    <TxetBox>
      {todoList.map((list) => {
        return (
          <CheckboxLabel htmlFor={list.text} key={list.id}>
            <CheckboxInput
              type='checkbox'
              checked={list.done}
              onChange={handleChkbox.bind({}, list)}
              id={list.text}
              name={list.text}
            />
            <CheckboxP className={list.done ? 'complete' : ''}>
              {list.text}
            </CheckboxP>
          </CheckboxLabel>
        );
      })}
    </TxetBox>
  );
};

export default TodoItem;

const TxetBox = styled.div`
  margin-right: auto;
  margin-left: 50px;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  user-select: none;
`;

const CheckboxInput = styled.input`
  appearance: none;
  width: 1.5rem;
  height: 1.5rem;
  border: 1.5px solid gainsboro;
  border-radius: 0.35rem;
  &:checked {
    border-color: transparent;
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: ${Colors.blue500};
  }
`;

const CheckboxP = styled.p`
  font-size: 16px;
  margin-left: 10px;
  margin: 10px 5px;
  text-align: center;
  &.complete {
    text-decoration: line-through;
  }
`;
