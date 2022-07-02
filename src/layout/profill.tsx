import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import ProfilBox from '../components/ProfilBox';
import TodoTask from '../components/TodoTask';
import Colors from '../constants/Colors';
import { BsArrowBarLeft, BsArrowBarRight } from 'react-icons/bs';
import MarginTop from '../components/ui/MarginTop';

const Profill = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <CloseBtn onClick={() => setToggle(!toggle)}>
        {toggle ? (
          <BsArrowBarRight className='closeBtn' />
        ) : (
          <BsArrowBarLeft className='closeBtn' />
        )}
      </CloseBtn>

      <Section className={toggle ? 'on' : ''}>
        <Wrapper className={toggle ? 'on' : 'none'}>
          <MarginTop margin={30} />
          <ProfilBox />
          <MarginTop margin={20} />
          <TodoTask />
        </Wrapper>
      </Section>
    </>
  );
};

export default Profill;

const inSlide = keyframes`
  0% {
    right: -100px;
  }
  50% {
    right: -30px;
  }
  100% {
    right: 0;
  }
`;

const Section = styled.section`
  transition: 0.5s;
  width: 0%;
  right: -100px;
  overflow: hidden;
  position: relative;
  &.on {
    width: 30%;
    min-width: 260px;
    height: 100%;
    background: ${Colors.background2};
    right: 0;
    animation: ${inSlide} 0.3s linear;
  }
  @media screen and (max-width: 768px) {
    transition: 0.5s;
    position: absolute;
    width: 0%;
    &.on {
      right: 0;
      min-width: 350px;
      animation: ${inSlide} 0.3s linear;
    }
  }
`;

const Wrapper = styled.div`
  transition: 0.5s;
  height: 93%;
  margin: 0 auto;
  &.none {
    display: none;
  }
  &.on {
    min-width: 260px;
    height: 100%;
    overflow: hidden;
    background: ${Colors.background2};
  }
  @media screen and (max-width: 768px) {
  }
`;

const CloseBtn = styled.button`
  position: relative;
  display: block;
  margin-left: auto;
  border: none;
  background: transparent;
  transition: 0.6s;
  .closeBtn {
    width: 20px;
    height: 18px;
    fill: ${Colors.blue500};

    &:hover {
      fill: orange;
    }
  }
  @media screen and (max-width: 768px) {
    top: 0px;
    right: 0;
    position: absolute;
    z-index: 20;
  }
`;
