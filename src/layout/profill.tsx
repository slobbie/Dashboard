import React, { useState } from 'react';
import styled from 'styled-components';
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
          <TodoTask />
        </Wrapper>
      </Section>
    </>
  );
};

export default Profill;

const Section = styled.section`
  transition: 0.5s;
  width: 0%;
  &.on {
    width: 30%;
    min-width: 260px;
    height: 100%;
    overflow: hidden;
    background: ${Colors.background2};
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
    width: 30%;
    min-width: 260px;
    height: 100%;
    overflow: hidden;
    background: ${Colors.background2};
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
`;
