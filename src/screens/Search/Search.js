import React, { useState } from 'react';
import { NavbarContainer, ImgMain, MainDet } from './SearchElements';
import Button from '../../components/Button/Button';
import ImgSrc from '../../images/photo.jpg';
import SubSrc from '../../images/Ellipse.png';

const Home = () => {

  return (
    
    <MainDet>
        <ImgMain src={ImgSrc} ></ImgMain> 
        <NavbarContainer placeholder='Search'></NavbarContainer>
    </MainDet>
    
  );
};

export default Home;