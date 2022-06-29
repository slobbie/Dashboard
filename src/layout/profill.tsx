import React from 'react';
import styled from 'styled-components';
import ProfilBox from '../components/ProfilBox';
import TodoTask from '../components/TodoTask';
import Colors from '../constants/Colors';

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
  background: ${Colors.background2};
`;

const Wrapper = styled.div`
  height: 93%;
  margin: 24px;
`;
