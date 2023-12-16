import React, { useRef, useState } from 'react';
import { Inputs, PhnText, Input, EditDiv, Main, Img, Profilepic, ProfileDiv, BtnOver, MsgImg, About, ProImg, BtnMain, BtnText, DivViewRow, Text, SubImg, DivRows, SubText, Div, AccDiv, DivRow, Rows, SubDetText, Row, ImgMain, MainDet, MainText, Det } from './EditProfileElements';
import Button from '../../components/Button/Button';
import Avathar from '../../images/avathar.png';
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
    inputRef.current.click();
  };

  const handleFileChange = event => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }

    setFile(URL.createObjectURL(event.target.files[0]));
    console.log('fileObj is', fileObj.name);
    // setFile(fileObj.name)
    event.target.value = null;
    console.log('file', file);
  };

  return (

    <DivRow>
        <ProfileDiv>          
            <Profilepic src={file ? file : Avathar} />     
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
                <Button title='Save'/>
            </Div>     
        </EditDiv>
    </DivRow>
    
  );
};

export default EditProfile;