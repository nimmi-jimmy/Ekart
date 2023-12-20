import React, { useRef, useState } from 'react';
import { Inputs, PhnText, Input, EditDiv, Profilepic, ProfileDiv, BtnMain, Div, DivRow } from './EditProfileElements';
import Button from '../../components/Button/Button';
import Avathar from '../../images/avathar.png';
import "react-datepicker/dist/react-datepicker.css";
import NavBar from '../../components/navbar/navbar';


const EditProfile = ({handleFile}) => {

    const [file, setFile] = useState();
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
<><NavBar></NavBar>
    <DivRow>
        <ProfileDiv>          
            <Profilepic src={file ? file : Avathar} />     
            <BtnMain onClick={handleClick}>
                Change profile picture
            </BtnMain>
        <input 
            style={{display: 'none'}}
            ref={inputRef}
            type="file"
            onChange={handleFileChange}
        />
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
    </>
  );
};

export default EditProfile;