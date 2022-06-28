import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import Button from './components/Button';
import Input from './components/Input';
import Colors from './constants/Colors';

function App() {
  const navigate = useNavigate();
  const Next = () => {
    navigate('test');
  };

  const [valid, setValid] = useState(true);

  return (
    <div className='App'>
      <GlobalStyle />
    </div>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
 body {
    margin: 0;
    background-color: #EAEEF4;
 }
`;
