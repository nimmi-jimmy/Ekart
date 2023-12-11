import React, { useState } from 'react';
import {Close, MImg, PhnText, Input, ModalDiv, Modal, Content, Main, Img, Profilepic, ProfileDiv, BtnOver, MsgImg, About, ProImg, BtnMain, BtnText, DivViewRow, Text, SubImg, DivRows, SubText, Div, AccDiv, DivRow, Rows, SubDetText, Row, ImgMain, MainDet, MainText, Det } from './ProfileElements';
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

import { HeartOutlined, HeartFilled, EyeOutlined, CloseOutlined } from '@ant-design/icons';

const Profiles = () => {
    const images = [
          {
            slno: 1,
            src: ImgSrc, 
            subsrc: SubSrc,
            title: 'Lorem Ipsum',
            sub: '12$',
            about: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
          },
          {
            slno: 2,
            src: Group1,
            subsrc: SubSrc,   
            title: 'Lorem Ipsum',
            sub: '60$',
            about: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
       
          },
          {
            slno: 3,
            src: Group2,  
            subsrc: SubSrc,
            title: 'Lorem Ipsum',
            sub: '40$',
            about: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        
          },
          {
            slno: 4,
            src: Group3,   
            subsrc: SubSrc,  
            title: 'Lorem Ipsum',
            sub: '51$',
            about: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
     
          },
          {
            slno: 5,
            src: Group4,  
            subsrc: SubSrc,
            title: 'Lorem Ipsum',
            sub: '30$',
            about: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        
          },
          {
            slno: 5,
            src: Group5,
            subsrc: SubSrc,
            title: 'Lorem Ipsum',
            sub: '60$',
            about: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
         
          },
          {
            slno: 6,
            src: Group6,
            subsrc: SubSrc,
            title: 'Lorem Ipsum',
            sub: '10$',
            about: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
          
          },
          {
            src: Group7,
            subsrc: SubSrc,
            title: 'Lorem Ipsum',
            sub: '60$',
            about: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
         
          },
          {
            src: ImgSrc,
            subsrc: SubSrc, 
            title: 'Lorem Ipsum',
            sub: '60$',
            about: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
         
          },
          {
            src: ImgSrc, 
            subsrc: SubSrc,
            title: 'Lorem Ipsum',
            sub: '60$',
            about: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
         
          },
          {
            src: ImgSrc,
            subsrc: SubSrc,
            title: 'Lorem Ipsum',
            sub: '60$',
            about: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
          
          },
          {
            src: ImgSrc, 
            subsrc: SubSrc,
            title: 'Lorem Ipsum',
            sub: '60$',
            about: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
         
          },
    ]
    const [startDate, setStartDate] = useState(new Date());
    const [visible, setVisible] = useState("");
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    const handleShow = () => {
      setShow(!show);
    };

  return (
    <>

    <DivRow>
        <ProfileDiv>
          
            <Profilepic src={Profile}></Profilepic>
            
            <AccDiv>
                <Text>Games david</Text>
                <BtnMain>
                    <MsgImg src={Msgimg} />
                </BtnMain>
            </AccDiv>  
            <About>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </About>
            <div>  
            <Button title='Works gallery' onClick='/Profile'/>
            <Button title='Book an appointment' onClick={handleShow}/>
            </div>  
            
        </ProfileDiv>

        {show ? (
        <Modal>

          <Content>
              <MImg src={Booking} />
              <ModalDiv>
                <Close>
                  <CloseOutlined />
                </Close>
                <MainText>Book an Appointment</MainText>
                <Div>
                    <PhnText>Email Id</PhnText>
                    <Input placeholder='Enter email here' ></Input>
                    
                    <PhnText>Address</PhnText>
                    <Input placeholder='Enter your address here' ></Input>
                    
                    <PhnText>Phone number</PhnText>
                    <Input placeholder='Enter your phone number here' ></Input>

                    <PhnText>Select date and time for booking appointment</PhnText>
                    <DatePicker
                      selected={startDate}
                      onChange={date => setStartDate(date)}
                      showTimeSelect
                      timeFormat="HH:mm"
                      timeIntervals={15}
                      timeCaption="time"
                      dateFormat="MMMM d, yyyy h:mm aa"
                    />
                   
                </Div>
              </ModalDiv>
          </Content>

        </Modal>
        ) : null
        }
        
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
                <Row>{ visible ? <HeartFilled /> : <HeartOutlined /> }</Row>  
                </DivRow>
                </DivRow>
               
                </AccDiv>
                <About>
                    {image.about}
                </About>
                <BtnOver>
                    <Text>Buy</Text>
                </BtnOver>
                </Div>  
                   
            ))}
            
        </Main>
    </DivRow>
    </>
  );
};

export default Profiles;