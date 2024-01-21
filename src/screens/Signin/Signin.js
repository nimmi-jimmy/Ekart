import React, { useState } from 'react';
import { Logo, Main, Text, SubText, PhnText, Div, Input, PText, BtnMain, BtnText, AccText, Signup, AccDiv, Req } from './SignInElements';
import Button from '../../components/Button/Button';
import LogoSrc from '../../images/google.png';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/navbar/navbar';

const Signin = () => {
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [apiemail, setApiemail] = useState(false);
  const [apipassword, setApipassword] = useState(false);
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
};
  const navigation = useNavigate();

  
  const handleSubmit = (e) => {
      
    const sendData = {
        email,
        password
    }    
    email == '' && setApiemail(true);
    password == '' && setApipassword(true);

    email == 'george@gmail.com' ? navigation('/ClientHome')
    : email && password && navigation('/PhotoHome')
  };

  const handle = () => {
    navigation('/Signup')
  };
  const handleclick = () => {
    navigation('/Profile')
  };
  return (
    <>
    {/* <NavBar></NavBar> */}
    <Main>
      <Text>Sign In</Text>
      <SubText>Let's build something greate</SubText>
      <Div>
          <PhnText>E-mail or phone number</PhnText>
          <Input placeholder='Enter E-mail or phone number' onChange={handleEmail} value={email}></Input>
          {apiemail && <Req>Email is required!</Req>}
          <PhnText>Password</PhnText>

          <AccDiv>
          <Input placeholder='Enter your password' 
          type={visible ? "text" : "password"}
          value={password} id='password' onChange={(e) => setPassword(e.target.value)}>
          </Input>
          <div style={{marginLeft: "-20px"}} onClick={() => setVisible(!visible)}>{ visible ? <EyeOutlined /> : <EyeInvisibleOutlined /> }</div>  
          </AccDiv>
          {apipassword && <Req>Password is required!</Req>}

      </Div>
      <Button title='Login' onClick={handleSubmit}/>
      {/* <PText>Forgot Password?</PText> */}
      {/* <BtnMain>
        <Logo src={LogoSrc}/>
       
        <BtnText>Sign up with Google</BtnText>
      </BtnMain> */}
      <AccDiv>
        <AccText>Don't have an account?</AccText>
        <Signup onClick={handle}>Signup</Signup>
      </AccDiv>
    </Main>
    </>
  );
};

export default Signin;