import React, { useRef, useState } from 'react';
import { Inputs, PhnText, Input, EditDiv, Main, Img, Profilepic, ProfileDiv, BtnOver, MsgImg, About, ProImg, BtnMain, BtnText, DivViewRow, Text, SubImg, DivRows, SubText, Div, AccDiv, DivRow, Rows, SubDetText, Row, ImgMain, MainDet, MainText, Det } from './EditProfileElements';
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
import Home from '../../screens/Home/Home';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { HeartOutlined, HeartFilled, EyeOutlined, CloseOutlined } from '@ant-design/icons';

const EditProfile = ({handleFile}) => {

    const [file, setFile] = useState();
    // function handleChange(e) {
    //     console.log(e.target.files);
    //     setFile(URL.createObjectURL(e.target.files[0]));
    // }

    const inputRef = useRef(null);

  const handleClick = () => {
    // 👇️ open file input box on click of another element
    inputRef.current.click();
  };

  const handleFileChange = event => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }

    console.log('fileObj is', fileObj.name);
    setFile(fileObj.name)
    event.target.value = null;

  };

  return (

    <DivRow>
        <ProfileDiv>          
            <Profilepic src={file} />     
            {/* <BtnMain type="file" style={{display:'none'}} onChange={handleChange} /> */}
            <BtnMain onClick={handleClick}>
                Change profile picture
            </BtnMain>
        <input 
            style={{display: 'none'}}
            ref={inputRef}
            type="file"
            onChange={handleFileChange}
        />
            {/* <Button title='Change profile picture'></Button> */}
        </ProfileDiv>

        <EditDiv>
            <Div>
                <PhnText>Your name</PhnText>
                <Input placeholder='Enter your name' ></Input>
                <PhnText>Email id</PhnText>
                <Input placeholder='Enter E-mail here' ></Input>
                <PhnText>About</PhnText>
                <Inputs placeholder='Enter the details to show on your profile.' ></Inputs>
                <Button title='Delete account'/>
            </Div>     
        </EditDiv>
    </DivRow>
    
  );
};

export default EditProfile;