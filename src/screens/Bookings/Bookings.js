import React, { useState } from 'react';
import { Main, Img, Text, SubImg, Div, AccDiv, ImgMain, MainDet, MainText, Det } from './BookingsElements';
import Button from '../../components/Button/Button';
import SubSrc from '../../images/Ellipse3.png';
import SubSrc1 from '../../images/booking.png';
import SubSrc2 from '../../images/avathar.png';
import Group1 from '../../images/accept.png';
import Group2 from '../../images/decline.png';
import Group3 from '../../images/chat.png';
import NavBar2 from '../../components/navbar_photo/navbar2';

import { UserOutlined, MailOutlined, EnvironmentOutlined, PhoneOutlined, CalendarOutlined, FieldTimeOutlined, QuestionOutlined } from '@ant-design/icons';
import NavBar from '../../components/navbar/navbar';
import { useNavigate } from 'react-router-dom';

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
    const navigation = useNavigate();
    const handleclicks = () => {
      navigation('/Chat')
    };
    const handle = () => {
        alert("Booking confirmed on 12/01/2024");
      };
      const handle2 = () => {
        alert("Not available for this date");
      };
  return (
    <>
   <NavBar2></NavBar2>
    <Main> 
          
        {
            images.map((image, index) => (
            <Div>
            <AccDiv>
                <MainDet>
                    <Img src={image.src} key={index} />
                    <Det>
                        <ImgMain src={Group1} onClick={handle}/>
                        <ImgMain src={Group2} onClick={handle2}/>
                        <ImgMain src={Group3} onClick={handleclicks}/>
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
            
            </Div>       
        ))}
          
    </Main>
    </>
  );
};

export default Home;