import React from 'react';
import styled from 'styled-components';
import Button from './components/Button';

function App() {
  return (
    <div className='App'>
      <BtnBox>
        <Box>
          <Button onClick={() => {}} Color='' label='Button' Size='S' />
        </Box>
        <Box>
          <Button onClick={() => {}} label='Button' Size='M' />
        </Box>
        <Box>
          <Button onClick={() => {}} label='Button' Size='L' fullWidth />
        </Box>
      </BtnBox>
    </div>
  );
}

export default App;
const BtnBox = styled.div`
  width: 720px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;
const Box = styled.div`
  width: 100%;
`;
