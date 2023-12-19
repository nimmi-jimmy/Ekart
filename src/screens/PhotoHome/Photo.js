import React, { useState } from 'react';
import { Main, Img, ProfileDiv, About, Text, Div, AccDiv, DivRow } from './PhotoElements';
import Button from '../../components/Button/Button';
import Group1 from '../../images/Group11.jpg';
import Group2 from '../../images/Group12.jpg';
import Group3 from '../../images/Group13.jpg';
import Group4 from '../../images/Group14.jpg';
import Group5 from '../../images/Group15.jpg';
import Group6 from '../../images/Group16.jpg';

const PhotoHome = () => {
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

    <DivRow>
        <ProfileDiv>
        
            <div>  
            <Button title='Edit profile'/>
            <Button title='Works gallery'/>
            <Button title='Sell your photos'/>
            <Button title='View bookings'/>
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