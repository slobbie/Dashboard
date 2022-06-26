import React from 'react';
import styled, { css } from 'styled-components';
import Color from '../constants/Colors';

interface Inputprops {
  label?: string;
  // Size: string;
  // Color?: string;
  // fullWidth?: boolean;
  // outLine?: boolean;
  // Valid?: string;
  // disabled?: boolean;
  // onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

const Input = ({ ...props }: Inputprops) => {
  return (
    <Div>
      <InputBox>
        <Lebel>dd</Lebel>
        <InputItem placeholder='placeholder' />
      </InputBox>
      <IconBox>
        <IconBtn>
          <P>x</P>
        </IconBtn>
      </IconBox>
    </Div>
  );
};

export default Input;

const Div = styled.div<Inputprops>`
  display: flex;
  width: 380px;
  height: 64px;
  padding: 8px 12px;
  box-sizing: border-box;
  background: ${Color.white};
  border: 1px solid ${Color.grey300};
  border-radius: 5px;
  flex: none;
  order: 0;
  flex-grow: 0;
  &:focus-within {
    border: 1px solid ${Color.grey600};
  }
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100%;
`;

const Lebel = styled.label`
  color: ${Color.grey600};
`;

const InputItem = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  //styleName: Typo/SubTitle 2;
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: -0.01em;
  padding-left: 0;
  color: ${Color.black100};
`;

const IconBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-left: 20px;
`;

const IconBtn = styled.button`
  cursor: pointer;
  height: 24px;
  width: 24px;

  border-radius: 15px;
  background-color: ${Color.grey500};
  border: none;
  color: ${Color.white};
`;

const P = styled.p`
  margin: 0;
`;
