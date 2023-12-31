import React, { useState } from 'react';
import { Logo, Main, Text, SubText, PhnText, Div, Input } from './FeedbackElements';
import Button from '../../components/Button/Button';
import LogoSrc from '../../images/google.png';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import NavBar from '../../components/navbar/navbar';

const Feedback = () => {
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState("");

  return (
    <><NavBar></NavBar>
    <Main>
      <Text>Please enter feedback</Text>
      <Div>
            <PhnText>Name</PhnText>
            <Input placeholder='Enter your name' ></Input>
            <PhnText>Email id</PhnText>
            <Input placeholder='Enter your email id' ></Input> 
            <PhnText>Feedback</PhnText>
            <Input placeholder='Enter your feedback' ></Input>
      </Div>
      <Button title='Save' />
    </Main>
    </>
  );
};

export default Feedback;