import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
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
      <BtnBox>
        <Box>
          <Button Color='blue' label='Button' Size='L' outLine />
          <Button Color='Pink' label='Button' Size='M' />
          <Button Color='Pink' label='Button' Size='S' />
        </Box>
        <Box>
          <Button Color={Colors.gray} label='Button' Size='L' />
          <Button
            onClick={() => {}}
            Color={Colors.gray}
            label='Button'
            Size='M'
          />
          <Button
            onClick={Next}
            Color={Colors.gray}
            label='Button'
            Size='S'
            Valid='sss'
            fullWidth
          />
        </Box>
        <Box>
          <Button
            onClick={Next}
            label='Button'
            Size='L'
            fullWidth
            // Valid='sss'
            // Color={Colors.blue500}
            disabled={valid}
          />
        </Box>
        <Input label='이름' placeholder='이름을 입력해주세요' width={300} />
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
