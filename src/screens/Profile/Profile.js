import React, { useState } from 'react';
import {Close, Contentss, Closes, Drop, DInput, BtnTime, MainTime, MImg, PhnText, Input, ModalDiv, Modal, Content, Main, Img, Profilepic, ProfileDiv, BtnOver, MsgImg, About, BtnMain, Text, DivRows, Div, AccDiv, DivRow, Row, MainText } from './ProfileElements';
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
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { HeartOutlined, HeartFilled, CloseOutlined } from '@ant-design/icons';
import NavBar from '../../components/navbar/navbar';
import { useNavigate } from 'react-router-dom';

const Profiles = () => {
    const images = [
      {
        slno: 1,
        time: '08:00-10:00AM',
        src: ImgSrc, 
        subsrc: SubSrc,
        title: 'Fashion',
        
      },
      {
        slno: 2,
        time: '10:00-12:00PM',
        src: Group1,
        subsrc: SubSrc,   
        title: 'Wedding',
        
      },
      {
        slno: 3,
        time: '12:00-02:00PM',
        src: Group2,  
        subsrc: SubSrc,
        title: 'Wedding',
       
      },
      {
        slno: 4,
        time: '02:00-04:00PM',
        src: Group3,   
        subsrc: SubSrc,  
        title: 'Fashion',
        
      },
      {
        slno: 5,
        time: '04:00-06:00PM',
        src: Group4,  
        subsrc: SubSrc,
        title: 'Fashion',
        
      },
      {
        slno: 5,
        time: '06:00-08:00PM',
        src: Group5,
        subsrc: SubSrc,
        title: 'Product',
        
      },
      {
        slno: 6,
        time: '08:00-10:00PM',
        src: Group6,
        subsrc: SubSrc,
        title: 'Product',
       
      },
      {
        slno: 7,
        time: '10:00-12:00AM',
        src: Group7,
        subsrc: SubSrc,
        title: 'Car',
        
      }
    ]
    const [startDate, setStartDate] = useState(new Date());
    const [visible, setVisible] = useState("");
    const [show, setShow] = useState(false);

    const handleClose = () => {
      setShow(false);
      navigation('/Profile1');
    }
    const handleShow = () => {
      setShow(!show);
      // navigation('/Shipping');
    };

    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(false);
    const [opens, setOpens] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  const handleMenuOne = () => {
    setOpen(false);
    setValue("Portrait");
  };
  const handleMenuTwo = () => {
    setOpen(false);
    setValue("Family");
  };
  const handleMenuThree = () => {
    setOpen(false);
    setValue("Graduation");
  };
  const handleMenuFour = () => {
    setOpen(false);
    setValue("Party");
  };
  const handleMenuFive = () => {
    setOpen(false);
    setValue("Wedding");
  };
  const handleMenuSix = () => {
    setOpen(false);
    setValue("Engagement");
  };
  const handleMenuSeven = () => {
    setOpen(false);
    setValue("Dating");
  };
  const handleMenuEight = () => {
    setOpen(false);
    setValue("Maternity");
  };
  const alertbox = () => {
    setOpens(!opens);
  }

  const [isHovering, setIsHovering] = useState(false);
  const [isactive, setIsActive] = React.useState(false);

  function handleEnter(id) {
    localStorage.setItem("inslt", JSON.stringify(id));

    setIsActive(id);

    console.log("instaids", isactive === id)

    setIsHovering(true);
  }
  const navigation = useNavigate();
  const handle = () => {
    navigation('/ClientHome')
  };
  const handleclick = () => {
    navigation('/Chat')
  };
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  const [active1, setActive1] = useState(false);
  const handleClick1 = () => {
    setActive1(!active1);
  };
  const [active2, setActive2] = useState(false);
  const handleClick2 = () => {
    setActive2(!active2);
  };
  const [active3, setActive3] = useState(false);
  const handleClick3 = () => {
    setActive3(!active3);
  };
  const [active4, setActive4] = useState(false);
  const handleClick4 = () => {
    setActive4(!active4);
  };
  const [active5, setActive5] = useState(false);
  const handleClick5 = () => {
    setActive5(!active5);
  };
  const [active6, setActive6] = useState(false);
  const handleClick6 = () => {
    setActive6(!active6);
  };
  const [active7, setActive7] = useState(false);
  const handleClick7 = () => {
    setActive7(!active7);
  };
  return (
    <>
    <NavBar></NavBar>

    <DivRow>
        <ProfileDiv>
          
            <Profilepic src={Profile}></Profilepic>
            
            <AccDiv>
                <Text>Games david</Text>
                <BtnMain onClick={handleclick}>
                    <MsgImg src={Msgimg} />
                </BtnMain>
            </AccDiv>  
            <About>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </About>
            <div>  
            <Button title='Buy images' onClick={handle}/>
            <Button title='Book your shoot' onClick={handleShow}/>
            </div>  
            
        </ProfileDiv>

        {show ? (
        <Modal>

          <Content>
              <MImg src={Booking} />
              <ModalDiv>
                <Close onClick={handleClose}>
                  <CloseOutlined />
                </Close>
                <MainText>Book your shoot</MainText>
                <Div>
                    <PhnText style={{fontWeight: 'bold'}}>Email Id</PhnText>
                    <Input placeholder='Enter email here' ></Input>
                    
                    <PhnText style={{fontWeight: 'bold'}}>Address</PhnText>
                    <Input placeholder='Enter your address here' ></Input>
                    
                    <PhnText style={{fontWeight: 'bold'}}>Phone number</PhnText>
                    <Input placeholder='Enter your phone number here' ></Input>

                    <PhnText style={{fontWeight: 'bold'}}>Postcode</PhnText>
                    <Input placeholder='Enter your postcode here' ></Input>

                    <PhnText style={{fontWeight: 'bold'}}>Select a day for booking appointment</PhnText>
                    <DInput>
                    <DatePicker  
                      selected={startDate}
                      onChange={date => setStartDate(date)}
                      // showTimeSelect
                      // timeFormat="HH:mm"
                      // timeIntervals={15}
                      // timeCaption="time"
                      dateFormat="MMMM d, yyyy"
                    />
                    </DInput>
                    <DivRows>
                      <PhnText style={{fontWeight: 'bold'}}>Select time &nbsp;</PhnText>
                      <PhnText>(Non available time slots are disabled)</PhnText>
                    </DivRows>

                    <MainTime>
                    {/* {images.map((image, index) => ( */}
                    <BtnTime onClick={handleClick}
                    style={{ borderColor: active ? "black" : "#dddddd" }}>
                        <PhnText>08:00-10:00AM</PhnText>
                    </BtnTime>
                    <BtnTime onClick={handleClick1}
                    style={{ borderColor: active1 ? "black" : "#dddddd" }}>
                        <PhnText>10:00-12:00PM</PhnText>
                    </BtnTime>
                    <BtnTime onClick={handleClick2}
                    style={{ borderColor: active2 ? "black" : "#dddddd" }}>
                        <PhnText>12:00-02:00PM</PhnText>
                    </BtnTime>
                    <BtnTime onClick={handleClick3}
                    style={{ borderColor: active3 ? "black" : "#dddddd" }}>
                        <PhnText>02:00-04:00PM</PhnText>
                    </BtnTime>
                    <BtnTime onClick={handleClick4}
                    style={{ borderColor: active4 ? "black" : "#dddddd" }}>
                        <PhnText>04:00-06:00PM</PhnText>
                    </BtnTime>
                    <BtnTime onClick={handleClick5}
                    style={{ borderColor: active5 ? "black" : "#dddddd" }}>
                        <PhnText>06:00-08:00PM</PhnText>
                    </BtnTime>
                    <BtnTime onClick={handleClick6}
                    style={{ borderColor: active6 ? "black" : "#dddddd" }}>
                        <PhnText>08:00-10:00PM</PhnText>
                    </BtnTime>
                    <BtnTime onClick={handleClick7}
                    style={{ borderColor: active7 ? "black" : "#dddddd" }}>
                        <PhnText>10:00-12:00AM</PhnText>
                    </BtnTime>
                    {/* ))} */}
                    </MainTime>

                    <PhnText style={{fontWeight: 'bold'}}>What do you need to shoot?</PhnText>
                    <Input onClick={handleOpen} placeholder={value ? value : 'Select'}></Input>
                      {open ? (
                        <Drop>
                          <PhnText onClick={handleMenuOne}>Portrait</PhnText>
                          <PhnText onClick={handleMenuTwo}>Family</PhnText>
                          <PhnText onClick={handleMenuThree}>Graduation</PhnText>
                          <PhnText onClick={handleMenuFour}>Party</PhnText>
                          <PhnText onClick={handleMenuFive}>Wedding</PhnText>
                          <PhnText onClick={handleMenuSix}>Engagement</PhnText>
                          <PhnText onClick={handleMenuSeven}>Dating</PhnText>
                          <PhnText onClick={handleMenuEight}>Maternity</PhnText>

                        </Drop>
                      ) : null}

                      <div style={{marginBottom: '2rem'}}>
                      <Button title='Book now' onClick={alertbox}/>
                      </div>

                      {opens ? (
                        <Modal>
                          <Contentss>
                          <Closes onClick={handleClose}>
                            <CloseOutlined />
                          </Closes>
                            <PhnText>You will get a notification after confired!</PhnText>
                          </Contentss>
                        </Modal>
                      ): null}
                      
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
                {/* <Text>{image.sub}</Text> */}

                
                <DivRow onClick={() => [setVisible(!visible),handleEnter(image?.slno)]}>
                <Row>{ visible ? <HeartFilled /> : <HeartOutlined /> }</Row>  
                </DivRow>
                </DivRow>
               
                </AccDiv>
                <About>
                    {image.about}
                </About>
                {/* <BtnOver onClick={handleclicks}>
                    <Text>Buy</Text>
                </BtnOver> */}
                </Div>  
                   
            ))}
            
        </Main>
    </DivRow>
    </>
  );
};

export default Profiles;