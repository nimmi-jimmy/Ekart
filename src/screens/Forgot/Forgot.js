import React from 'react';
import { Main, Text, SubText, PhnText, Div, Input, PText, BtnMain, BtnText, AccText, Signup, AccDiv } from './ForgotElements';
import Button from '../../components/Button/Button';

const Forgot = () => {
  return (
    <Main>
      <Text>Forgot Password</Text>
      <SubText>Enter your email and we will send you a reset link</SubText>
      <Div>
          <PhnText>E-mail or phone number</PhnText>
          <Input>Enter your email or phone number</Input>
      </Div>
      <Button title='Send me the link'/>
    </Main>
  );
};

export default Forgot;