import React, { useState } from 'react';
import { Main, Img, Text, SubImg, Div, AccDiv, MainDet, MainText } from './AdminElements';
import Button from '../../components/Button/Button';
import SubSrc from '../../images/Ellipse3.png';
import SubSrc2 from '../../images/avathar.png';


import { UserOutlined, MailOutlined, FormOutlined } from '@ant-design/icons';
import NavBar from '../../components/navbar/navbar';

const Home = () => {
    const customer = [
          {
            src: SubSrc, 
            title: 'Davis',
            email: 'davis123@gmail.com',
            feedback: 'Nice'
          }
    ]

    const photographer = [
        {
            src: SubSrc2, 
            title: 'Manoj',
            email: 'Manoj@gmail.com',
            feedback: 'Good'
        }
  ]

  return (
    <>
    <NavBar></NavBar>
        <MainText style={{paddingInline: 50, paddingTop: 20}}>Customer</MainText>
        <Main>         
            {
                customer.map((image, index) => (
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
                            <Button title='Delete' />                                        
                    </MainDet>
                </AccDiv>
                
                </Div>       
            ))}
            
        </Main>
        
        <MainText style={{paddingInline: 50, paddingTop: 20}}>Photographer</MainText>
        <Main>         
            {
                photographer.map((image, index) => (
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
                            <Button title='Delete' />                                        
                    </MainDet>
                </AccDiv>
                
                </Div>       
            ))}
            
        </Main>
    </>
  );
};

export default Home;