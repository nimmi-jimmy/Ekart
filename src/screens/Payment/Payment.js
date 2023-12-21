import React, { useState } from 'react';
import { Logo, Main, Text, SubText, PhnText, Div, Input } from './PaymentElements';
import Button from '../../components/Button/Button';
import LogoSrc from '../../images/google.png';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import NavBar from '../../components/navbar/navbar';

const Feedback = () => {
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState("");

  return (
    <><NavBar></NavBar>
   
    </>
  );
};

export default Feedback;