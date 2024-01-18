import React, { useState } from 'react';
import { NavbarContainer, ImgMain, MainDet, Drop, PhnText, PhnText1, Row, Logo, Cen } from './SearchElements';
import ImgSrc from '../../images/photo.jpg';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/navbar/navbar';
import LogoSrc from '../../images/logo.png';

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

  const handleMenu = () => {
    navigation('/Signin')
  };

  return (
    <>
    {/* <NavBar></NavBar> */}
    <MainDet>
        <Cen>
          <Logo src={LogoSrc}></Logo> 
        </Cen>
          <Row>
            <PhnText1>HOME</PhnText1>
            <PhnText1>WEDDING</PhnText1>
            <PhnText1>PORTRAIT</PhnText1>
            <PhnText1>CONTACT</PhnText1>
            <PhnText1 onClick={handleMenu}>SIGN UP/SIGN IN</PhnText1>
          </Row>
       
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