import React, { useState } from 'react';
import { Close, Contentss, Closes, Drop, DInput, BtnTime, Contents, MainTime, MImg, PhnText, Input, ModalDiv, Modal, Content, Main, Img, Profilepic, ProfileDiv, BtnOver, MsgImg, About, ProImg, BtnMain, BtnText, DivViewRow, Text, SubImg, DivRows, SubText, Div, AccDiv, DivRow, Rows, SubDetText, Row, ImgMain, MainDet, MainText, Det } from './PhotoElements';
import Button from '../../components/Button/Button';
import Group1 from '../../images/Group11.jpg';
import Group2 from '../../images/Group12.jpg';
import Group3 from '../../images/Group13.jpg';
import Group4 from '../../images/Group14.jpg';
import Group5 from '../../images/Group15.jpg';
import Group6 from '../../images/Group16.jpg';
import Profile from '../../images/Ellipse3.png';
import Msgimg from '../../images/msg.png';

import { HeartOutlined, HeartFilled, EyeOutlined, CloseOutlined } from '@ant-design/icons';

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
    const [startDate, setStartDate] = useState(new Date());
    const [visible, setVisible] = useState("");
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    const handleShow = () => {
      setShow(!show);
    };

    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(false);
    const [opens, setOpens] = React.useState(false);

  return (
    <>

    <DivRow>
        <ProfileDiv>
          
            {/* <Profilepic src={Profile}></Profilepic>
            
            <AccDiv>
                <Text>Games david</Text>
                <BtnMain>
                    <MsgImg src={Msgimg} />
                </BtnMain>
            </AccDiv>  
            <About>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </About> */}
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
                {/* <DivRow>
        
                <DivRow onClick={() => setVisible(!visible)}>
                <Row>{ visible ? <HeartFilled /> : <HeartOutlined /> }</Row>  
                </DivRow>
                </DivRow> */}
               
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