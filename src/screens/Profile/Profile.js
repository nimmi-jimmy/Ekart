import React, { useState } from 'react';
import { Main, Img, Profilepic, ProfileDiv, MsgImg, About, ProImg, BtnMain, BtnText, DivViewRow, Text, SubImg, DivRows, SubText, Div, AccDiv, DivRow, Rows, SubDetText, Row, ImgMain, MainDet, MainText, Det } from './ProfileElements';
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


import { HeartOutlined, HeartFilled, EyeOutlined } from '@ant-design/icons';

const Home = () => {
    const images = [
          {
            slno: 1,
            src: ImgSrc, 
            subsrc: SubSrc,
            title: 'Lorem Ipsum',
            sub: '12K'
          },
          {
            slno: 2,
            src: Group1,
            subsrc: SubSrc,   
            title: 'Lorem Ipsum',
            sub: '12K'       
          },
          {
            slno: 3,
            src: Group2,  
            subsrc: SubSrc,
            title: 'Lorem Ipsum',
            sub: '12K'        
          },
          {
            slno: 4,
            src: Group3,   
            subsrc: SubSrc,  
            title: 'Lorem Ipsum',
            sub: '12K'     
          },
          {
            slno: 5,
            src: Group4,  
            subsrc: SubSrc,
            title: 'Lorem Ipsum',
            sub: '12K'        
          },
          {
            slno: 5,
            src: Group5,
            subsrc: SubSrc,
            title: 'Lorem Ipsum',
            sub: '12K'          
          },
          {
            slno: 6,
            src: Group6,
            subsrc: SubSrc,
            title: 'Lorem Ipsum',
            sub: '12K'          
          },
          {
            src: Group7,
            subsrc: SubSrc,
            title: 'Lorem Ipsum',
            sub: '12K'         
          },
          {
            src: ImgSrc,
            subsrc: SubSrc, 
            title: 'Lorem Ipsum',
            sub: '12K'         
          },
          {
            src: ImgSrc, 
            subsrc: SubSrc,
            title: 'Lorem Ipsum',
            sub: '12K'         
          },
          {
            src: ImgSrc,
            subsrc: SubSrc,
            title: 'Lorem Ipsum',
            sub: '12K'          
          },
          {
            src: ImgSrc, 
            subsrc: SubSrc,
            title: 'Lorem Ipsum',
            sub: '12K'         
          },
    ]

    const [visible, setVisible] = useState("");

  return (
    <>
    {/* <Div>
      <ProImg src={SubSrc} />
    </Div> */}
    {/* <MainDet>
        <ImgMain src={ImgSrc} />
        
        <Det>
            <MainText>The Mud Cave</MainText>           
        
        <DivRow>
            <SubImg src={SubSrc} />
            <SubDetText>Anil James</SubDetText>
        </DivRow>
        <SubDetText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</SubDetText>
        <DivViewRow>
            <DivRows>
            <Rows><EyeOutlined /></Rows>
            <SubText>67.3K Views</SubText>
            </DivRows> 
            <DivRow onClick={() => setVisible(!visible)}>
                  <Rows>{ visible ? <HeartFilled /> : <HeartOutlined /> }</Rows>
              <SubText>12K</SubText>
            </DivRow> 
        </DivViewRow>
        <DivViewRow>
          <MainText>Price</MainText>
          <MainText>$63</MainText>
        </DivViewRow>
        <BtnMain>
            <BtnText>Buy</BtnText>
        </BtnMain>
        </Det>   
    </MainDet> */}
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
            <Button title='Works gallery'/>
            <Button title='Book an appointment'/>
            </div>  
            
        </ProfileDiv>
        
        <Main> 
            
            {
                images.map((image, index) => (
                <Div>
                <Img src={image.src} key={index} />
                <AccDiv>
                <DivRow>
                <Text>{image.title}</Text>
                </DivRow>
                <DivRow onClick={() => setVisible(!visible)}>
                <Row>{ visible ? <HeartFilled /> : <HeartOutlined /> }</Row>  
                </DivRow>
                </AccDiv>
                </Div>       
            ))}
            
        </Main>
    </DivRow>
    </>
  );
};

export default Home;