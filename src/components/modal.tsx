import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Modal = ({ modalClose }: any) => {
  // 모달창 띄우는 코드
  const onCloseModal = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      modalClose();
    }
  };

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
      <form>
        <ModalBox>
          <CloesBtn className='cloes_btn' onClick={modalClose}>
            X
          </CloesBtn>
          <TextTitle></TextTitle>
          <TxetBox className='txet_box'></TxetBox>
          <Modalbtn>완료</Modalbtn>
        </ModalBox>
      </form>
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

const ModalBox = styled.div`
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
`;

const CloesBtn = styled.button`
  position: relative;
  display: block;
  border: none;
  background-color: white;
  color: black;
  margin: 20px;
`;

const InputTitle = styled.div`
  width: 50%;
`;

const TextTitle = styled.div``;

const Modalbtn = styled.button`
  position: absolute;
  bottom: 0;
  margin-bottom: 10px;
  border-radius: 15px;
  border: none;
`;

const TxetBox = styled.div`
  position: relative;
  top: 30%;
`;

// const Textarea = styled.div`
//   resize: none;
//   width: 80%;
//   height: 35vh;
//   border-radius: 15px;
//   padding: 20px;
//   background-color: $color-note;
//   font-size: 15px;
//   line-height: 30px;
//   border: none;
//   text-align: center;
//   box-shadow: 1px 2px 9px rgb(163 177 198);
//   outline: none;
// `;
