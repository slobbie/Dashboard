import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import Button from './components/Button';
import Input from './components/Input';
import Colors from './constants/Colors';
import Navbar from './layout/Navbar';

function App() {
  const navigate = useNavigate();
  const Next = () => {
    navigate('test');
  };

  const [valid, setValid] = useState(true);

  return (
    <Section>
      <GlobalStyle />
      <Navbar />
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
`;

const Section = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  border: 1px solid black;
`;
