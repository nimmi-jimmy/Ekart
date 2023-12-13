import React, { useState } from 'react';
import { Logo, MessageDiv, ReceiveText, SendText, Main, Text, SubText, ReceiveDiv, SendDiv, PhnText, Div, Input, PText, BtnMain, BtnText, AccText, Signup, AccDiv } from './MessageElements';
import Button from '../../components/Button/Button';
import LogoSrc from '../../images/google.png';
import SubSrc from '../../images/Ellipse.png';

import { EyeOutlined, EyeInvisibleOutlined, SendOutlined } from '@ant-design/icons';

const Signin = () => {
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState("");

  const images = [
    {
      subsrc: SubSrc,
      title: 'Lorem Ipsum1',
      about: '1Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      subsrc: SubSrc,   
      title: 'Lorem Ipsum2',
      about: '2Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      subsrc: SubSrc,
      title: 'Lorem Ipsum3',
      about: '3Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      subsrc: SubSrc,  
      title: 'Lorem Ipsum4',
      about: '4Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    
   
]

  return (
    <Main>
      
      {images.map((images, index) => (
        <MessageDiv>
          <SendDiv><SendText>{images.title}</SendText></SendDiv>
          <ReceiveDiv><ReceiveText>{images.about}</ReceiveText></ReceiveDiv>
        </MessageDiv>
      ))}
        
          <Div>
            <Input placeholder='Message'></Input>
            <BtnMain>
              <SendOutlined />
            </BtnMain>
          </Div>
    </Main>
  );
};

export default Signin;