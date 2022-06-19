import React from 'react';
import styled, { css } from 'styled-components';
import Color from '../constants/Colors';

interface props {
  label: string;
  Size: string;
  Color?: string;
  fullWidth?: boolean | null;
  onClick: () => void | null;
}

const Button = ({ ...props }: props) => {
  const { label } = props;
  return <ButtonModel {...props}>{label}</ButtonModel>;
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
`;

const ButtonModel = styled.button<props>`
  color: white;
  cursor: pointer;
  border: none;
  border-radius: 16px;
  margin: 5px;

  ${sizeStyles}
  &:hover {
    background-color: ${Color.blue500};
  }
`;
