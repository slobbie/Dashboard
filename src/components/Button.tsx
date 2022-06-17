import React from 'react';
import styled, { css } from 'styled-components';

interface props {
  label: string;
  Size: string;
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
`;

const ButtonModel = styled.button<props>`
  ${sizeStyles}
`;
