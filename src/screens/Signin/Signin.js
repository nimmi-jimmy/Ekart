import React, { useState } from 'react';
import { Logo, Main, Text, SubText, PhnText, Div, Input, PText, BtnMain, BtnText, AccText, Signup, AccDiv } from './SignInElements';
import Button from '../../components/Button/Button';
import LogoSrc from '../../images/google.png';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

const Signin = () => {
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState("");

  return (
    <Main>
      <Text>Sign In</Text>
      <SubText>Let's build something greate</SubText>
      <Div>
          <PhnText>E-mail or phone number</PhnText>
          <Input placeholder='Enter E-mail or phone number' ></Input>
          
          <PhnText>Password</PhnText>

          <AccDiv>
          <Input placeholder='Enter your password' 
          type={visible ? "text" : "password"}
          value={password} id='password' onChange={(e) => setPassword(e.target.value)}>
          </Input>
          <div style={{marginLeft: "-20px"}} onClick={() => setVisible(!visible)}>{ visible ? <EyeOutlined /> : <EyeInvisibleOutlined /> }</div>  
          </AccDiv>
          
      </Div>
      <Button title='Login'/>
      <PText>Forgot Password?</PText>
      <BtnMain>
        <Logo src={LogoSrc}/>
       
        <BtnText>Sign up with Google</BtnText>
      </BtnMain>
      <AccDiv>
        <AccText>Don't have an account?</AccText>
        <Signup>Signup</Signup>
      </AccDiv>
    </Main>
  );
};

export default Signin;