import React, { useState } from 'react';
import { PhnText, Input, Main, Img, ProfileDiv, About, Text, Div, AccDiv, DivRow, Row } from './SellElements';
import Button from '../../components/Button/Button';
import ImgSrc from '../../images/Frame.png';
import SubSrc from '../../images/Ellipse.png';
import Group1 from '../../images/Group-1.jpg';
import Group2 from '../../images/Group-2.jpg';
import Group3 from '../../images/Group-3.jpg';
import Group4 from '../../images/Group-4.jpg';
import Group5 from '../../images/Group-5.jpg';
import Group6 from '../../images/Group-6.jpg';
import "react-datepicker/dist/react-datepicker.css";
import NavBar2 from '../../components/navbar_photo/navbar2';

import { DeleteOutlined } from '@ant-design/icons';
import NavBar from '../../components/navbar/navbar';

const Sell = () => {
    const images = [
          {
            slno: 2,
            time: '10:00-12:00PM',
            src: Group1,
            subsrc: SubSrc,   
            title: 'Lorem Ipsum',
            sub: '60$',
            about: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
       
          },
          {
            slno: 3,
            time: '12:00-02:00PM',
            src: Group2,  
            subsrc: SubSrc,
            title: 'Lorem Ipsum',
            sub: '40$',
            about: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        
          },
          {
            slno: 4,
            time: '02:00-04:00PM',
            src: Group3,   
            subsrc: SubSrc,  
            title: 'Lorem Ipsum',
            sub: '51$',
            about: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
     
          },
          {
            slno: 5,
            time: '04:00-06:00PM',
            src: Group4,  
            subsrc: SubSrc,
            title: 'Lorem Ipsum',
            sub: '30$',
            about: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        
          },
          {
            slno: 5,
            time: '06:00-08:00PM',
            src: Group5,
            subsrc: SubSrc,
            title: 'Lorem Ipsum',
            sub: '60$',
            about: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
         
          },
          {
            slno: 7,
            time: '08:00-10:00PM',
            src: Group6,
            subsrc: SubSrc,
            title: 'Lorem Ipsum',
            sub: '10$',
            about: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
          
          },
          {
            slno: 8,
            time: '10:00-12:00AM',
            src: ImgSrc,
            subsrc: SubSrc,
            title: 'Lorem Ipsum',
            sub: '60$',
            about: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
          },
    ]
    const [visible, setVisible] = useState("");


    const [file, setFile] = useState();
  function handleChange(e) {
      console.log(e.target.files);
      setFile(URL.createObjectURL(e.target.files[0]));
  }


  return (
    <>
<NavBar2></NavBar2>
    <DivRow>
        <ProfileDiv>
        <Div>
          <PhnText>Title</PhnText>
          <Input placeholder='Enter image title' ></Input>
          
          <PhnText>Description</PhnText>
          <Input placeholder='Enter description' ></Input>

          <PhnText>Image</PhnText>
          <Input type="file" onChange={handleChange} />
            <img src={file} />

          <PhnText>Price</PhnText>
          <Input placeholder='Enter price' ></Input>

      </Div>
               
            <Button title='Sell your photos' />
            
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
                <DivRow>
           
                <Text>{image.sub}</Text>
                <DivRow onClick={() => setVisible(!visible)}>
                <Row><DeleteOutlined /></Row>  
                </DivRow>
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

export default Sell;