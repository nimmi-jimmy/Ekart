import React, { useState } from 'react';
import { Main, Img, Text, SubImg, Div, AccDiv, ImgMain, MainDet, MainText, Det } from './ViewordersElements';
import Button from '../../components/Button/Button';
import SubSrc from '../../images/Group-1.jpg';
import SubSrc1 from '../../images/Group-2.jpg';
import SubSrc2 from '../../images/Group-3.jpg';
import Group1 from '../../images/Group-4.jpg';
import Group2 from '../../images/Group-5.jpg';
import Group3 from '../../images/Group-6.jpg';

import { UserOutlined, MailOutlined, EnvironmentOutlined, PhoneOutlined, CalendarOutlined, FieldTimeOutlined, QuestionOutlined, InboxOutlined } from '@ant-design/icons';
import NavBar from '../../components/navbar/navbar';

const Vieworders = () => {
    const images = [
          {
            src: SubSrc, 
            head: 'Lorem ipsum',
            about: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            amount: '60',
            title: 'Davis',
            email: 'davis123@gmail.com',
            address: 'Bangaluru',
            phone: '6788339989',
            post: '	UB10',
            id: '12345'
          },
          {
            src: SubSrc1, 
            head: 'Lorem ipsum',
            about: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            amount: '40',
            title: 'Manoj',
            email: 'Manoj@gmail.com',
            address: 'Kerala',
            phone: '9766339989',
            post: '	UB10',
            id: '15566'
          },
          {
            src: SubSrc2, 
            head: 'Lorem ipsum',
            about: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            amount: '50',
            title: 'Jackson',
            email: 'jackson@gmail.com',
            address: 'Bangaluru',
            phone: '8788349999',
            post: '	UB10',
            id: '54471'
          }
    ]

  return (
    <>
   <NavBar></NavBar>
    <Main> 
          
        {
            images.map((image, index) => (
            <Div>
            <AccDiv>
                <MainDet>
                    <Img src={image.src} key={index} />
                    <Button title='Delivery Done'/>
                </MainDet>
                <MainDet>
                <MainDet>
                    <AccDiv>
                        <MainText>{image.head}</MainText>
                    </AccDiv>
                    <AccDiv>
                        <Text>{image.about}</Text>
                    </AccDiv>
                    <AccDiv>
                        <MainText>${image.amount}</MainText>
                    </AccDiv>  
                    <AccDiv>
                        <MainText>Shipping address</MainText>
                    </AccDiv>
                    <AccDiv>
                        <SubImg><UserOutlined /></SubImg>
                        <Text>{image.title}</Text>
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
                        <SubImg><InboxOutlined /></SubImg>  
                        <Text>{image.post}</Text>
                    </AccDiv> 
                    <AccDiv>
                        <Text>Transaction id: {image.id}</Text>
                    </AccDiv>                 
                </MainDet>
                
                    
                   
                </MainDet>
                
            </AccDiv>
            
            </Div>       
        ))}
          
    </Main>
    </>
  );
};

export default Vieworders;