import React from 'react';
import { Main, BtnText } from './ButtonElements';

const Button = ({title}) => {
  return (
    <Main>
        <BtnText>{title}</BtnText>
    </Main>
  );
};

export default Button;