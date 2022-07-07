import React from 'react';
import styled, { css } from 'styled-components';
import Colors from '../../constants/Colors';

interface Inputprops {
  label?: string;
  placeholder?: string;
  width?: number;
  height?: number;
  icon?: boolean;
  // value의 vail 검사 boolean을 props로 전달
  textVaild?: boolean;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

const Input = ({ ...props }: Inputprops) => {
  return (
    <Div
      style={{
        width: props.width ? props.width : '64px',
        height: props.height ? props.height : '64px',
      }}
    >
      <InputBox>
        {props.label && <Lebel>{props.label}</Lebel>}
        <InputItem placeholder={props.placeholder} />
      </InputBox>
      {props.icon && (
        <IconBox>
          <IconBtn {...props}>
            <P>x</P>
          </IconBtn>
        </IconBox>
      )}
    </Div>
  );
};

export default Input;

const sizeStyles = css<Inputprops>`
  ${(props) =>
    props.textVaild &&
    css`
      border: 1px solid ${Colors.grey600};
    `}
`;

const Div = styled.div<Inputprops>`
  display: flex;
  /* width: 420px; */
  height: 64px;
  padding: 0px 12px;
  box-sizing: border-box;
  background: ${Colors.white};
  border: 1px solid ${Colors.grey300};
  border-radius: 5px;
  flex: none;
  order: 0;
  flex-grow: 0;
  ${sizeStyles}
  &:focus-within {
    border: 1px solid ${Colors.grey600};
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
  color: ${Colors.grey600};
  font-size: 14px;
`;

const InputItem = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  font-family: Pretendard;
  font-size: 15px;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: -0.01em;
  padding-left: 0;
  color: ${Colors.black100};
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
  background-color: ${Colors.grey500};
  border: none;
  color: ${Colors.white};
`;

const P = styled.p`
  margin: 0;
`;
