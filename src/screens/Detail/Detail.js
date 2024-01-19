import React, { useState } from 'react';
import { Main, Img, Text, Div, AccDiv, DivRow, BtnOver, About, Row, MsgImg, DivRows, PhnText } from './DetailElements';
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
        title: 'Sobha City',
        sub: '£12',
        about: 'SOBHA offers a fabulous range of new flats, luxury apartments, and villa projects for sale in Thrissur, Kerala.'
      },
      {
        slno: 2,
        time: '10:00-12:00PM',
        src: Group1,
        subsrc: SubSrc,   
        title: 'Skyline',
        sub: '£60',
        about: 'Tallest building in Bangalore”. A pocket park, a sky bar, and a viewing gallery “with sky bridges” '
      },
      {
        slno: 3,
        time: '12:00-02:00PM',
        src: Group2,  
        subsrc: SubSrc,
        title: 'Hyatt',
        sub: '£40',
        about: 'Hyatt Hotels Corporation, commonly known as Hyatt Hotels & Resorts. Hyatt introduced the Hyatt Place brand.'     
      },
      {
        slno: 4,
        time: '02:00-04:00PM',
        src: Group3,   
        subsrc: SubSrc,  
        title: 'Chennai',
        sub: '£51',
        about: 'Chennai, on the Bay of Bengal in eastern India, is the capital of the state of Tamil Nadu.' 
      },
      {
        slno: 5,
        time: '04:00-06:00PM',
        src: Group4,  
        subsrc: SubSrc,
        title: 'Madurai',
        sub: '£30',
        about: 'Madurai is an energetic, ancient city on the Vaigai River in the South Indian state of Tamil Nadu.'     
      },
      {
        slno: 5,
        time: '06:00-08:00PM',
        src: Group5,
        subsrc: SubSrc,
        title: 'Gardens by the Bay',
        sub: '£46',
        about: 'The Supertree Groves at Gardens by the Bay (Source) Gardens by the Bay is the most famous garden in Singapore.'    
      },
      {
        slno: 6,
        time: '08:00-10:00PM',
        src: Group6,
        subsrc: SubSrc,
        title: 'Chinese architecture',
        sub: '£10',
        about: 'Chinese architecture is the embodiment of an architectural style that has developed over millennia in China.'     
      },
      {
        slno: 7,
        time: '10:00-12:00AM',
        src: Group7,
        subsrc: SubSrc,
        title: 'Inland Steel Building',
        sub: '£34',
        about: 'he Inland Steel Building is a skyscraper located at 30 W. Monroe Street in Chicago, Illinois.'
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
  navigation('/Shipping')
};
    
  return (
    <>
    <NavBar></NavBar>
        <DivRow>
            <Img src={ImgSrc} />
            <Div>
                <Text>Sobha city</Text>
                <DivRows>
                    <MsgImg src={SubSrc} />
                    <PhnText>Anil Games</PhnText>
                </DivRows>
                <About>SOBHA offers a fabulous range of new flats, luxury apartments, and villa projects for sale in Thrissur, Kerala.</About>
                <Row>
                <DivRows>
                    <Text>Price</Text>
                    <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;£12</Text>
                </DivRows>
                <Button title='Buy' onClick={handleclicks}/>
                </Row>
            </Div>
        </DivRow>
    </>
  );
};

export default ClientHome;