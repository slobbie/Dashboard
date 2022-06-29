import React from 'react';
import styled from 'styled-components';
import ContactList from '../components/ContactList';
import Colors from '../constants/Colors';

const Contact = () => {
  return (
    <Section>
      <Wrapper>
        <Title>
          <H2>Contact</H2>
        </Title>
        <ContactList />
      </Wrapper>
    </Section>
  );
};

export default Contact;

const Section = styled.section`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Wrapper = styled.div`
  margin: 30px;
  height: 93%;
  border-radius: 20px;
  overflow: hidden;
  background: ${Colors.grey100};
  box-shadow: 0 4px 8px 0 rgba(206, 206, 245, 0.5);
`;

const Title = styled.div`
  /* border-bottom: 1px solid ${Colors.grey800}; */
  box-shadow: 0 4px 8px 0 rgba(206, 206, 245 / 20%);
  width: 90%;
  padding: 20px;
  margin: 0 auto;
`;

const H2 = styled.h2`
  margin-left: 5px;
  margin-top: 30px;
`;
