import React, { useState } from 'react';
import { NavbarContainer, ImgMain, MainDet } from './SearchElements';
import ImgSrc from '../../images/photo.jpg';

const Home = () => {

  return (
    
    <MainDet>
        <ImgMain src={ImgSrc} ></ImgMain> 
        <NavbarContainer placeholder='Search'></NavbarContainer>
    </MainDet>
    
  );
};

export default Home;