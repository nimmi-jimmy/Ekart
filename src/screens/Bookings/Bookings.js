import React, { useState } from 'react';
import { Main, Img, ProImg, BtnMain, BtnText, DivViewRow, Text, SubImg, DivRows, SubText, Div, AccDiv, DivRow, Rows, SubDetText, Row, ImgMain, MainDet, MainText, Det } from './BookingsElements';
import Button from '../../components/Button/Button';
import SubSrc from '../../images/Ellipse3.png';
import SubSrc1 from '../../images/booking.png';
import SubSrc2 from '../../images/avathar.png';
import Group1 from '../../images/accept.png';
import Group2 from '../../images/decline.png';
import Group3 from '../../images/chat.png';

import { HeartOutlined, HeartFilled, EyeOutlined, UserOutlined, MailOutlined, EnvironmentOutlined, PhoneOutlined, CalendarOutlined, FieldTimeOutlined, QuestionCircleOutlined, QuestionOutlined } from '@ant-design/icons';

const Home = () => {
    const images = [
          {
            src: SubSrc, 
            title: 'Davis',
            email: 'davis123@gmail.com',
            address: 'Bangaluru',
            phone: '6788339989',
            date: '12/01/2024',
            time: '10.00AM-12.00PM',
            theme: 'Wedding'
          },
          {
            src: SubSrc1, 
            title: 'Manoj',
            email: 'Manoj@gmail.com',
            address: 'Kerala',
            phone: '9766339989',
            date: '22/12/2023',
            time: '10.00PM-12.00AM',
            theme: 'Party'
          },
          {
            src: SubSrc2, 
            title: 'Jackson',
            email: 'jackson@gmail.com',
            address: 'Bangaluru',
            phone: '8788349999',
            date: '31/12/2023',
            time: '10.00PM-12.00AM',
            theme: 'Party'
          }
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
                    <Det>
                        <ImgMain src={Group1} />
                        <ImgMain src={Group2} />
                        <ImgMain src={Group3} />
                    </Det>
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
                        <SubImg><EnvironmentOutlined /></SubImg>
                        <Text>{image.address}</Text>
                    </AccDiv>
                    <AccDiv>
                        <SubImg><PhoneOutlined /></SubImg>                  
                        <Text>{image.phone}</Text>
                    </AccDiv>
                    <AccDiv>
                        <SubImg><CalendarOutlined /></SubImg>  
                        <Text>{image.date}</Text>
                    </AccDiv>
                    <AccDiv>
                        <SubImg><FieldTimeOutlined /></SubImg>
                        <Text>{image.time}</Text>
                    </AccDiv>                    
                    <AccDiv>
                        <SubImg><QuestionOutlined /></SubImg>
                        <Text>{image.theme}</Text>
                    </AccDiv>
                </MainDet>
            </AccDiv>
            <AccDiv>
            
            
            </AccDiv>
            </Div>       
        ))}
          
    </Main>
    </>
  );
};

export default Home;