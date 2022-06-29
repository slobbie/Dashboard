import React from 'react';
import styled from 'styled-components';
import ProfilBox from '../components/ProfilBox';
import TodoTask from '../components/TodoTask';

const Profill = () => {
  return (
    <Section>
      <Wrapper>
        <ProfilBox />
        <TodoTask />
      </Wrapper>
    </Section>
  );
};

export default Profill;

const Section = styled.section`
  width: 30%;
  height: 100%;
  overflow: hidden;
  box-shadow: 35px 35px 68px 0px rgba(206, 206, 245, 0.5),
    inset -8px -8px 16px 0px rgba(206, 206, 245, 0.6),
    inset 0px 11px 28px 0px rgb(255, 255, 255);
`;

const Wrapper = styled.div`
  height: 93%;
  margin: 24px;
`;
