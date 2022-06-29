import React from 'react';
import styled, { css } from 'styled-components';
import Colors from '../../constants/Colors';

interface props {
  label: string;
  Size: string;
  Color?: string;
  fullWidth?: boolean;
  outLine?: boolean;
  Valid?: string;
  disabled?: boolean;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ ...props }: props) => {
  return (
    <ButtonModel {...props} disabled={!props.Valid}>
      {props.label}
    </ButtonModel>
  );
};

export default Button;

const sizes: any = {
  L: {
    height: '3rem',
    fontSize: '1.25rem',
  },
  M: {
    height: '2.25rem',
    fontSize: '1rem',
  },
  S: {
    height: '1.75rem',
    fontSize: '0.875rem',
  },
};

const sizeStyles = css<props>`
  ${(props) =>
    props.Size &&
    css`
      height: ${sizes[props.Size].height};
      font-size: ${sizes[props.Size].fontSize};
    `}
  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
      justify-content: center;
      & + & {
        margin-left: 0;
        margin-top: 1rem;
      }
    `}
    ${(props) =>
    props.Color &&
    css`
      background-color: ${props.Color};
    `}
    ${(props) =>
    props.outLine &&
    css`
      border: 1px solid ${Colors.blue500};
    `}
    ${(props) =>
    props.Valid &&
    css`
      opacity: 1;
    `}
`;

const ButtonModel = styled.button<props>`
  color: white;
  background-color: ${Colors.grey200};
  cursor: pointer;
  border: none;
  border-radius: 16px;
  margin: 5px;
  opacity: 0.7;

  ${sizeStyles}
  &:hover {
    background-color: ${Colors.blue500};
  }
`;