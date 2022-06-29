import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import Colors from './constants/Colors';
import Navbar from './layout/Navbar';
import Profill from './layout/profill';
import Contact from './Page/ Contact';

function App() {
  const navigate = useNavigate();
  const Next = () => {
    navigate('test');
  };

  const [valid, setValid] = useState(true);

  return (
    <Section>
      <Wrapper>
        <GlobalStyle />
        <Navbar />
        <Routes>
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
    background-color: #EAEEF4;
    overflow-x: hidden;
 }
 ul,nav, section {
  margin: 0;
 }
 ul{
  list-style: none;
  padding: 0;
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
  background: ${Colors.background};
`;

const Wrapper = styled.div`
  display: flex;
  margin: 30px;
  height: 93%;
  border-radius: 30px;
  box-shadow: 35px 35px 68px 0px rgba(206, 206, 245, 0.5),
    inset -8px -8px 16px 0px rgba(206, 206, 245, 0.6),
    inset 0px 11px 28px 0px rgb(255, 255, 255);
`;
