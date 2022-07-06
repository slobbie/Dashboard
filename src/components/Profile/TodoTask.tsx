import React from 'react';
import styled from 'styled-components';
import Colors from '../../constants/Colors';
import Todos from './Todos';

const TodoTask = () => {
  return (
    <TaskBox>
      <TextBox>
        <Todolabel>진행중인 업무</Todolabel>
        <TodoCount>2</TodoCount>
      </TextBox>
      <Todos />
    </TaskBox>
  );
};

export default TodoTask;

const TaskBox = styled.div`
  width: 100%;
  height: 60%;
  overflow: hidden;
`;

const TextBox = styled.div`
  border-left: 5px solid ${Colors.blue700};
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-left: 10px;
`;

const Todolabel = styled.span`
  margin-left: 10px;
  margin-bottom: 5px;
  color: ${Colors.grey400};
`;

const TodoCount = styled.span`
  margin-left: 10px;
  font-size: 20px;
  color: ${Colors.grey400};
`;
