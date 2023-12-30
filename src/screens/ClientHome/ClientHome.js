import React, { useState } from 'react';
import { Main, Img, Text, Div, AccDiv, DivRow, BtnOver, About, Row } from './ClientHomeElements';
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
import NavBar from '../../components/navbar/navbar';
import { useNavigate } from 'react-router-dom';
import { HeartFilled, HeartOutlined } from '@ant-design/icons';


const ClientHome = () => {
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
        }
  ]
  const [visible, setVisible] = useState("");

const [isHovering, setIsHovering] = useState(false);
const [isactive, setIsActive] = React.useState(false);

function handleEnter(id) {
  localStorage.setItem("inslt", JSON.stringify(id));
  setIsActive(id);
  console.log("instaids", isactive === id)
  setIsHovering(true);
}

const navigation = useNavigate();
const handleclicks = () => {
  navigation('/Payment')
};
    
  return (
    <>
    <NavBar></NavBar>
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

                <DivRow onClick={() => [setVisible(!visible),handleEnter(image?.slno)]}>
                <Row>{ visible ? <HeartFilled/> : <HeartOutlined /> }</Row>  
                </DivRow>
                </DivRow>
               
                </AccDiv>
                <About>
                    {image.about}
                </About>
                <BtnOver onClick={handleclicks}>
                    <Text>Buy</Text>
                </BtnOver>
                </Div>    
        ))}
          
    </Main>
    </>
  );
};

export default ClientHome;