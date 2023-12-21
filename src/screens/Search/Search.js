import React, { useState } from 'react';
import { NavbarContainer, ImgMain, MainDet, Drop, PhnText } from './SearchElements';
import ImgSrc from '../../images/photo.jpg';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/navbar/navbar';

const Home = () => {

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(false);
  const navigation = useNavigate();
  const handleOpen = () => {
    setOpen(!open);
  };

  const handleMenuOne = () => {
    setOpen(false);
    setValue("AB10");
    navigation('/Works')
  };

  const handleMenuTwo = () => {
    setOpen(false);
    setValue("AB11");
    navigation('/Works')
  };

  return (
    <>
    <NavBar></NavBar>
    <MainDet>
        <ImgMain src={ImgSrc}></ImgMain> 
            <NavbarContainer onClick={handleOpen} placeholder={value ? value : 'Search'}></NavbarContainer> 
            {open ? (
            <Drop>
              <PhnText onClick={handleMenuOne}>AB10</PhnText>
              <PhnText onClick={handleMenuTwo}>AB11</PhnText>
            </Drop>
          ) : null}
    </MainDet>
    </>
  );
};

export default Home;