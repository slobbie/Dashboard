import React from 'react';
import styled from 'styled-components';

const Contact = () => {
  return (
    <Section>
      <Wrapper>
        <H2>Contact</H2>
      </Wrapper>
    </Section>
  );
};

export default Contact;

const Section = styled.section`
  border: 1px solid black;
  width: 100%;
`;

const Wrapper = styled.div`
  margin: 30px;
  border: 1px solid black;
`;

const H2 = styled.h2``;
