import React, { useState } from 'react';
import { Main, Logo, Text, SubText, PhnText, Div, Divp, PassDiv, Divc, Input, BtnMain, BtnText, AccText, SignUp, AccDiv, PDiv, Drop } from './SignupElements';
import Button from '../../components/Button/Button';
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import LogoSrc from '../../images/google.png';

const Sign = () => {

  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState("");

  const [cpassword, setCpassword] = useState("");
  const [cvisible, setCvisible] = useState("");

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleMenuOne = () => {
    setOpen(false);
    setValue("Customer");
  };

  const handleMenuTwo = () => {
    setOpen(false);
    setValue("Photograper");
  };

  const [file, setFile] = useState();
  function handleChange(e) {
      console.log(e.target.files);
      setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <Main>
      <Text>Sign Up</Text>
      <SubText>Enter details to create your account</SubText>
      <Div>
          <PhnText>Your name</PhnText>
          <Input placeholder='Enter your name'></Input>
          <PhnText>User type</PhnText>
          <Input onClick={handleOpen} placeholder={value ? value : 'Select user type'}></Input>
          {open ? (
            <Drop>
              <PhnText onClick={handleMenuOne}>Customer</PhnText>
              <PhnText onClick={handleMenuTwo}>photograper</PhnText>
            </Drop>
          ) : null}
          <PhnText>Profile picture</PhnText>
          <Input type="file" onChange={handleChange} />
            <img src={file} />
          <PhnText>E-mail or phone number</PhnText>
          <Input placeholder='Enter your E-mail or phone number'></Input>
          <PDiv>
          <Divp>
            <PhnText>Password</PhnText>
            <PassDiv>
            <Input placeholder='Enter your password' 
            type={visible ? "text" : "password"}
            value={password} id='password' onChange={(e) => setPassword(e.target.value)}>
            </Input>
            <div style={{marginLeft: "-20px"}} onClick={() => setVisible(!visible)}>{ visible ? <EyeOutlined /> : <EyeInvisibleOutlined /> }</div>  
            </PassDiv>
          </Divp>
          <Divc>
            <PhnText>Confirm Password</PhnText>
            <PassDiv>
            <Input placeholder='Enter your password' 
            type={cvisible ? "text" : "password"}
            value={cpassword} id='password' onChange={(e) => setCpassword(e.target.value)}>
            </Input>
            <div style={{marginLeft: "-20px"}} onClick={() => setCvisible(!cvisible)}>{ cvisible ? <EyeOutlined /> : <EyeInvisibleOutlined /> }</div>  
            </PassDiv>
          </Divc>
          </PDiv>
      </Div>
      <Button title='Sign up'/>
      <BtnMain>
          <Logo src={LogoSrc}/>
          <BtnText>Sign up with Google</BtnText>
      </BtnMain>
      <AccDiv>
        <AccText>Already have an account?</AccText>
        <SignUp>Sign in</SignUp>
      </AccDiv>
    </Main>
  );
};

export default Sign;
