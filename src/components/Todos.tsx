import React from 'react';
import styled from 'styled-components';
import { RiDeleteBin5Line } from 'react-icons/ri';
import Colors from '../constants/Colors';
import Button from './ui/Button';

const Todos = () => {
  return (
    <TodoBox>
      <Text>진행중인 업무 내용</Text>
      <DeleteBtn>
        <RiDeleteBin5Line className='deleteIcon' />
      </DeleteBtn>
    </TodoBox>
  );
};

export default Todos;

const TodoBox = styled.div`
  width: 90%;
  height: 70px;
  /* border: 1px solid blue; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 30px auto;
  border-radius: 15px;
  background: ${Colors.white};
  box-shadow: 0 4px 8px 0 rgba(206, 206, 245, 0.5);
`;

const DeleteBtn = styled.button`
  width: 60px;
  height: 30px;
  border-radius: 15px;
  border: none;
  transition: 0.5s;
  cursor: pointer;
  .deleteIcon {
    width: 25px;
    height: 25px;
    fill: #e97b86;
    &:hover {
      fill: red;
    }
  }
  margin-right: 10px;
`;

const Text = styled.span`
  color: ${Colors.grey400};
  font-size: 14px;
  margin-left: 10px;
`;
