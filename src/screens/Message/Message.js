import React, { useState } from 'react';
import { Logo, MessageDiv, BtnMain, ReceiveText, SendText, Main, ReceiveDiv, SendDiv, Div, Input, BtnMain1, BtnMain2 } from './MessageElements';
import Button from '../../components/Button/Button';
import LogoSrc from '../../images/google.png';
import SubSrc from '../../images/Ellipse.png';
import SubSrc2 from '../../images/Ellipse3.png';


import { EyeOutlined, EyeInvisibleOutlined, SendOutlined } from '@ant-design/icons';

const Message = () => {
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState("");

  const images = [
    {
      subsrc: SubSrc,
      title: 'Hey !',
      subsrc2: SubSrc2,
      about: 'Hello'
    },
    {
      subsrc: SubSrc,
      title: 'Are you free now?',
      subsrc2: SubSrc2,
      about: 'Yes'
    },
]

  return (
    <Main>
      
        {images.map((images, index) => (
          <MessageDiv>
            <BtnMain1>
              <Logo src={images.subsrc} />
              <SendDiv><SendText>{images.title}</SendText></SendDiv>
            </BtnMain1>
            <BtnMain2>
              <Logo src={images.subsrc2} />
              <ReceiveDiv><ReceiveText>{images.about}</ReceiveText></ReceiveDiv>
            </BtnMain2>
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

export default Message;