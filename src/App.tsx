import React from 'react';
import styled from 'styled-components';
import Button from './components/Button';
import Colors from './constants/Colors';

function App() {
  return (
    <div className='App'>
      <BtnBox>
        <Box>
          <Button onClick={() => {}} Color='Pink' label='Button' Size='L' />
          <Button onClick={() => {}} Color='Pink' label='Button' Size='M' />
          <Button onClick={() => {}} Color='Pink' label='Button' Size='S' />
        </Box>
        <Box>
          <Button
            onClick={() => {}}
            Color={Colors.gray}
            label='Button'
            Size='L'
          />
          <Button
            onClick={() => {}}
            Color={Colors.gray}
            label='Button'
            Size='M'
          />
          <Button
            onClick={() => {}}
            Color={Colors.gray}
            label='Button'
            Size='S'
          />
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
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;
const Box = styled.div`
  width: 100%;
`;
