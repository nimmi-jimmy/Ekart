import React, { useState } from 'react';
import { Logo, Main, Text, SubText, PhnText, Div, Input, PText, BtnMain, BtnText, AccText, Signup, AccDiv } from './MessageElements';
import Button from '../../components/Button/Button';
import LogoSrc from '../../images/google.png';
import { EyeOutlined, EyeInvisibleOutlined, SendOutlined } from '@ant-design/icons';

const Signin = () => {
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState("");

  return (
    <Main>
          <Div>
            <Input placeholder='Message' ></Input>
            <BtnMain>
              <SendOutlined />
            </BtnMain>
          </Div>
    </Main>
  );
};

export default Signin;