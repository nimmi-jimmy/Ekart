import React, { useState } from 'react';
import { Main, Img, ProfileDiv, About, Text, Div, AccDiv, DivRow } from './PhotoElements';
import Button from '../../components/Button/Button';
import Group1 from '../../images/Group11.jpg';
import Group2 from '../../images/Group12.jpg';
import Group3 from '../../images/Group13.jpg';
import Group4 from '../../images/Group14.jpg';
import Group5 from '../../images/Group15.jpg';
import Group6 from '../../images/Group16.jpg';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/navbar/navbar';

const PhotoHome = () => {
  const navigation = useNavigate();
  const handle1 = () => {
    navigation('/Work')
  };
  const handle2 = () => {
    navigation('/EditProfile')
  };
  const handle3 = () => {
    navigation('/Bookings')
  };
  const handle4 = () => {
    navigation('/Sell')
  };
    const images = [
          {
            src: Group6, 
            title: 'Lorem Ipsum',
            about: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
          },
          {
            src: Group1,
            title: 'Lorem Ipsum',
            about: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
       
          },
          {
            src: Group2,  
            title: 'Lorem Ipsum',
            about: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
          },
          {
            src: Group3,   
            title: 'Lorem Ipsum',
            about: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
     
          },
          {
            src: Group4,  
            title: 'Lorem Ipsum',
            about: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
          },
          {
            src: Group5,
            title: 'Lorem Ipsum',
            about: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
          },
    ]

  return (
    <>
<NavBar></NavBar>
    <DivRow>
        <ProfileDiv>
        
            <div>  
            <Button title='Edit profile' onClick={handle2}/>
            <Button title='Works gallery' onClick={handle1}/>
            <Button title='Sell your photos' onClick={handle4}/>
            <Button title='View bookings' onClick={handle3}/>
            </div>  
            
        </ProfileDiv>
        
        <Main> 
            
            {
                images.map((image, index) => (
                <Div>                 
                <Img src={image.src} key={index}/>
                <AccDiv>
                <DivRow>
                <Text>{image.title}</Text>
                </DivRow>
               
                </AccDiv>
                <About>
                    {image.about}
                </About>
                
                </Div>  
                   
            ))}
            
        </Main>
    </DivRow>
    </>
  );
};

export default PhotoHome;