import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import Colors from './constants/Colors';
import Navbar from './layout/Navbar';
import Profill from './layout/profile';
import Calendar from './Page/Calendar';
import Contact from './Page/Contact';

function App() {
  return (
    <Section>
      <Wrapper>
        <GlobalStyle />
        <Navbar />
        <Routes>
          <Route path='/calendar/*' element={<Calendar />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Profill />
      </Wrapper>
    </Section>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
 body {
    margin: 0;
    min-height: 100vh;
    overflow-x: hidden;
    background: ${Colors.black};
 }
 ul,nav, section {
  margin: 0;
 }
 ul{
  list-style: none;
  padding: 0;
 }
 h2,input,p {
  margin: 0;
 }
 a{
  text-decoration: none;
  color: ${Colors.white};
 }

`;

const Section = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
`;

const Wrapper = styled.div`
  display: flex;
  /* margin: 30px; */
  width: 100%;
  height: 100%;
  /* border-radius: 30px; */
  background: #dde4e9;
  align-items: center;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;
