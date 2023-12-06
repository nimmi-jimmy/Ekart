import React, { useState } from 'react';
import { Main, Img, Text, SubImg, Div, AccDiv, DivRow, Row } from './HomeElements';
import Button from '../../components/Button/Button';
import ImgSrc from '../../images/Frame.png';
import SubSrc from '../../images/Ellipse.png';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';

const Home = () => {
    const images = [
          {
            slno: 1,
            src: ImgSrc, 
            subsrc: SubSrc,
            title: 'Anil James',
            sub: '12K'
          },
          {
            slno: 2,
            src: ImgSrc,
            subsrc: SubSrc,   
            title: 'Anil James',
            sub: '12K'       
          },
          {
            slno: 3,
            src: ImgSrc,  
            subsrc: SubSrc,
            title: 'Anil James',
            sub: '12K'        
          },
          {
            slno: 4,
            src: ImgSrc,   
            subsrc: SubSrc,  
            title: 'Anil James',
            sub: '12K'     
          },
          {
            slno: 5,
            src: ImgSrc,  
            subsrc: SubSrc,
            title: 'Anil James',
            sub: '12K'        
          },
          {
            slno: 5,
            src: ImgSrc,
            subsrc: SubSrc,
            title: 'Anil James',
            sub: '12K'          
          },
          {
            slno: 6,
            src: ImgSrc,
            subsrc: SubSrc,
            title: 'Anil James',
            sub: '12K'          
          },
          {
            src: ImgSrc,
            subsrc: SubSrc,
            title: 'Anil James',
            sub: '12K'         
          },
          {
            src: ImgSrc,
            subsrc: SubSrc, 
            title: 'Anil James',
            sub: '12K'         
          },
          {
            src: ImgSrc, 
            subsrc: SubSrc,
            title: 'Anil James',
            sub: '12K'         
          },
          {
            src: ImgSrc,
            subsrc: SubSrc,
            title: 'Anil James',
            sub: '12K'          
          },
          {
            src: ImgSrc, 
            subsrc: SubSrc,
            title: 'Anil James',
            sub: '12K'         
          },
      ]

    const [visible, setVisible] = useState("");

  return (
    <Main> 
          
        {
            images.map((image, index) => (
            <Div>
            <Img src={image.src} key={index} />
            <AccDiv>
            <DivRow>
              <SubImg src={image.subsrc} key={index} />
              <Text>{image.title}</Text>
            </DivRow>

            <DivRow onClick={() => setVisible(!visible)}>
              <Row>{ visible ? <HeartFilled /> : <HeartOutlined /> }</Row>
              <Text>{image.sub}</Text>
            </DivRow>  
            </AccDiv>
            </Div>       
        ))}
          
    </Main>
  );
};

export default Home;