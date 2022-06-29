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
  box-shadow: 35px 35px 68px 0px rgba(206, 206, 245, 0.5),
    inset -8px -8px 16px 0px rgba(206, 206, 245, 0.6),
    inset 0px 11px 28px 0px rgb(255, 255, 255);
`;

const DeleteBtn = styled.button`
  border: none;
  cursor: pointer;
  .deleteIcon {
    width: 25px;
    height: 25px;
  }
  margin-right: 10px;
`;

const Text = styled.span`
  color: ${Colors.grey400};
  font-size: 14px;
  margin-left: 10px;
`;
