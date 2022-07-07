import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import Colors from '../constants/Colors';
import { IoAddOutline } from 'react-icons/io5';
import Button from './ui/Button';
import { useAppDispatch } from '../store';
import TodoSlice from '../slices/todo';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducer';

interface props {
  modalClose: () => void;
}

const Modal = ({ modalClose }: props) => {
  const dispatch = useAppDispatch();
  const Todotext = useSelector((state: RootState) => state.todo.text);
  const [active, setActive] = useState<boolean>(true);
  const [text, setText] = useState<string>('');

  // 모달창 띄우는 코드
  const onCloseModal = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      modalClose();
    }
  };

  // Input 창을 띄우기 위한 Handler
  const onFormInputHandler = useCallback(() => {
    setActive((prev) => !prev);
  }, []);

  // Input onChange
  const onChangeInput = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setText(e.target.value);
    },
    []
  );

  // 상태 업데이트
  const onSubmit = useCallback(
    (e: React.MouseEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch(
        TodoSlice.actions.setTodo({
          id: Date.now(),
          text: text,
          done: false,
        })
      );
      setText('');
    },
    [dispatch, text]
  );

  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []); // 모달을 제외한 스크린의 스크롤을 막기위한 이벤트

  return (
    <>
      <ModalContainer onClick={onCloseModal}> </ModalContainer>
      <Container>
        <CloesBtn onClick={modalClose}>X</CloesBtn>
        <TxetBox>
          <CheckboxLabel htmlFor='yes'>
            <CheckboxInput type='checkbox' id='yes' name='yes' />
            <CheckboxP>{Todotext}</CheckboxP>
          </CheckboxLabel>
        </TxetBox>
        <Form onSubmit={onSubmit}>
          {active && (
            <InputBox>
              <TextArea value={text} onChange={onChangeInput} />
              <Button type='submit' label='추가' Size='S' Valid='ture' />
            </InputBox>
          )}
        </Form>
        <Addbtn onClick={() => onFormInputHandler()}>
          <IoAddOutline className='Addicon' />
        </Addbtn>
      </Container>
    </>
  );
};

export default Modal;

const ModalContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);
  top: 0;
  left: 0;
`;

const Container = styled.div`
  width: 60%;
  height: 60vh;
  background-color: white;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgb(206 206 245 / 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-bottom: auto;
  margin-top: 30px;
  justify-content: space-between;
`;

const CloesBtn = styled.button`
  position: relative;
  display: block;
  border: none;
  background-color: white;
  color: black;
  margin: 20px;
  margin-right: auto;
`;

const Addbtn = styled.button`
  position: relative;
  bottom: 0;
  margin-bottom: 10px;
  border-radius: 15px;
  border: none;
  background: transparent;
  cursor: pointer;
  opacity: 0.3;
  &:hover {
    opacity: 1;
  }
  .Addicon {
    width: 50px;
    height: 50px;
  }
`;

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
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 200px;
  margin-bottom: 15px;
`;

const TextArea = styled.textarea`
  outline: none;
  resize: none;
  width: 100%;
  height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  padding: 10px;
`;
