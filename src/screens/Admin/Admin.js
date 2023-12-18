import React, { useState } from 'react';
import { Main, Img, ProImg, BtnMain, BtnText, DivViewRow, Text, SubImg, DivRows, SubText, Div, AccDiv, DivRow, Rows, SubDetText, Row, ImgMain, MainDet, MainText, Det } from './AdminElements';
import Button from '../../components/Button/Button';
import SubSrc from '../../images/Ellipse3.png';
import SubSrc1 from '../../images/booking.png';
import SubSrc2 from '../../images/avathar.png';
import Group1 from '../../images/accept.png';
import Group2 from '../../images/decline.png';
import Group3 from '../../images/chat.png';

import { UserOutlined, MailOutlined, EnvironmentOutlined, PhoneOutlined, CalendarOutlined, FieldTimeOutlined, QuestionOutlined, FormOutlined } from '@ant-design/icons';

const Home = () => {
    const images = [
          {
            src: SubSrc, 
            title: 'Davis',
            email: 'davis123@gmail.com',
            feedback: 'Nice'
          },
          {
            src: SubSrc2, 
            title: 'Manoj',
            email: 'Manoj@gmail.com',
            feedback: 'Good'
          },
    ]

    const [visible, setVisible] = useState("");

  return (
    <>
   
    <Main> 
          
        {
            images.map((image, index) => (
            <Div>
            <AccDiv>
                <MainDet>
                    <Img src={image.src} key={index} />
                    
                </MainDet>
                <MainDet>
                    <AccDiv>
                        <SubImg><UserOutlined /></SubImg>
                        <MainText>{image.title}</MainText>
                    </AccDiv>
                    <AccDiv>
                        <SubImg><MailOutlined /></SubImg>
                        <Text>{image.email}</Text>
                    </AccDiv>
                    <AccDiv>
                        <SubImg><FormOutlined /></SubImg>
                        <Text>{image.feedback}</Text>
                    </AccDiv>
                                        
                        <Button title='Report' />                      
                   
                </MainDet>
            </AccDiv>
            
            </Div>       
        ))}
          
    </Main>
    </>
  );
};

export default Home;