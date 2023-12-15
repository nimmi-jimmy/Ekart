import React, { useState } from 'react';
import {Close, Contentss, Closes, Drop, DInput, BtnTime, Contents, MainTime, MImg, PhnText, Input, ModalDiv, Modal, Content, Main, Img, Profilepic, ProfileDiv, BtnOver, MsgImg, About, ProImg, BtnMain, BtnText, DivViewRow, Text, SubImg, DivRows, SubText, Div, AccDiv, DivRow, Rows, SubDetText, Row, ImgMain, MainDet, MainText, Det } from './WorkElements';
import Button from '../../components/Button/Button';
import ImgSrc from '../../images/Frame.png';
import SubSrc from '../../images/Ellipse.png';
import Group1 from '../../images/Group1.png';
import Group2 from '../../images/Group2.png';
import Group3 from '../../images/Group3.png';
import Group4 from '../../images/Group4.png';
import Group5 from '../../images/Group5.png';
import Group6 from '../../images/Group6.png';
import Group7 from '../../images/Group7.png';
import Profile from '../../images/Ellipse3.png';
import Msgimg from '../../images/msg.png';
import Booking from '../../images/booking.png';
import Home from '../../screens/Home/Home';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { HeartOutlined, HeartFilled, EyeOutlined, CloseOutlined, DeleteOutlined } from '@ant-design/icons';

const Profiles = () => {
    const images = [
          {
            slno: 1,
            time: '08:00-10:00AM',
            src: ImgSrc, 
            subsrc: SubSrc,
            title: 'Lorem Ipsum',
            sub: '12$',
            about: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
          },
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
            slno: 6,
            time: '08:00-10:00PM',
            src: Group6,
            subsrc: SubSrc,
            title: 'Lorem Ipsum',
            sub: '10$',
            about: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
          
          },
          {
            slno: 7,
            time: '10:00-12:00AM',
            src: Group7,
            subsrc: SubSrc,
            title: 'Lorem Ipsum',
            sub: '60$',
            about: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
          },
          // {
          //   src: ImgSrc,
          //   subsrc: SubSrc, 
          //   title: 'Lorem Ipsum',
          //   sub: '60$',
          //   about: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
         
          // },
          // {
          //   src: ImgSrc, 
          //   subsrc: SubSrc,
          //   title: 'Lorem Ipsum',
          //   sub: '60$',
          //   about: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
         
          // },
          // {
          //   src: ImgSrc,
          //   subsrc: SubSrc,
          //   title: 'Lorem Ipsum',
          //   sub: '60$',
          //   about: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
          
          // },
          // {
          //   src: ImgSrc, 
          //   subsrc: SubSrc,
          //   title: 'Lorem Ipsum',
          //   sub: '60$',
          //   about: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
         
          // },
    ]
    const [startDate, setStartDate] = useState(new Date());
    const [visible, setVisible] = useState("");
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    const handleShow = () => {
      setShow(!show);
    };

    const [file, setFile] = useState();
  function handleChange(e) {
      console.log(e.target.files);
      setFile(URL.createObjectURL(e.target.files[0]));
  }


  return (
    <>

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

      </Div>
               
            <Button title='Add to works gallery' />
            
            
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

export default Profiles;