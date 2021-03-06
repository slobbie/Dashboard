import React from 'react';
import styled from 'styled-components';
import ContactList from '../components/Contact/ContactList';
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
  margin: 20px 20px 20px 0;
  max-width: 1728px;
  width: 100%;
  max-height: 820px;
  height: 100%;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    min-width: 0;
    max-height: 100%;
    margin: 0;
  }
`;

const Wrapper = styled.div`
  /* margin: 30px; */
  /* padding: 40px; */
  height: 100%;
  border-radius: 20px;
  overflow: hidden;
  background: ${Colors.grey100};
  box-shadow: 0 4px 8px 0 rgba(206, 206, 245, 0.5);
  @media screen and (max-width: 768px) {
    margin: 0;
    border-radius: 0;
  }
`;

const Title = styled.div`
  /* border-bottom: 1px solid ${Colors.grey800}; */
  box-shadow: 0 4px 8px 0 rgba(206, 206, 245 / 20%);
  width: 90%;
  padding: 20px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    margin: 0;
  }
`;

const H2 = styled.h2`
  margin-left: 5px;
  margin-top: 30px;
`;
