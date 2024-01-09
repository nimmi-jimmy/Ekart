import React, { useEffect, useState } from 'react';
import { Img, Main, Logo, Text, SubText, PhnText, Div, Divp, PassDiv, Divc, Input, BtnMain, BtnText, AccText, SignUp, AccDiv, PDiv, Drop } from './ShippingElements';
import Button from '../../components/Button/Button';
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import LogoSrc from '../../images/google.png';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/navbar/navbar';
import axios from 'axios';

const Shipping = () => {

  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState("");

  const [cpassword, setCpassword] = useState("");
  const [cvisible, setCvisible] = useState("");

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleMenuOne = () => {
    setOpen(false);
    setValue("Customer");
  };

  const handleMenuTwo = () => {
    setOpen(false);
    setValue("Photograper");
  };

  const [file, setFile] = useState();
  function handleChange(e) {
      console.log(e.target.files);
      setFile(URL.createObjectURL(e.target.files[0]));
  }

    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [postcode, setPostcode] = useState("");
 
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
 
    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        setSubmitted(false);
    };
    const handleLastName = (e) => {
        setLastName(e.target.value);
        setSubmitted(false);
    };
    const handleAddress = (e) => {
        setAddress(e.target.value);
        setSubmitted(false);
    };
 
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    };

    const handlePost = (e) => {
        setPostcode(e.target.value);
        setSubmitted(false);
    };
    const [apiResponse, setApiResponse] = useState("");

    const handleSubmit = (e) => {
      
    const sendData = {
        firstname,
        lastname,
        address,
        postcode,
        email
    }    

    // console.log("sendData",sendData);

    axios
      .post("http://localhost/ekart/register.php", sendData)
      
      .then((response) => {
        console.log("res=>",response);
        // setApiResponse(response.data.message);
      })
      .catch((error) => {
        console.error(error);
        // setApiResponse(error.response.data.message);
      });
  };
    

  const navigation = useNavigate();
  const handle = () => {
    
  };
  
  return (
    <>
    <NavBar></NavBar>
    <Main>
      <Text>Shipping</Text>
      <SubText>Please enter your shipping details</SubText>
      <Div>
      <PDiv>
          <Divp>
            <PhnText>First Name</PhnText>
            <PassDiv>
            <Input placeholder='Enter your first name' onChange={handleFirstName} value={firstname}></Input>
            </PassDiv>
          </Divp>
          <Divc>
            <PhnText>Last Name</PhnText>
            <PassDiv>
            <Input placeholder='Enter your last name' onChange={handleLastName} value={lastname}></Input>
            </PassDiv>
          </Divc>
          </PDiv>
          <PhnText>Address</PhnText>
          <Input placeholder='Enter your address' onChange={handleAddress} value={address}></Input>
          <PhnText>Postcode</PhnText>
          <Input placeholder='Enter your postcode' onChange={handlePost} value={postcode}></Input>
          <PhnText>E-mail or Phone numbers</PhnText>
          <Input placeholder='Enter your email' onChange={handleEmail} value={email}></Input>
          
      </Div>
      <Button title='Continue' onClick={handle}/>
      
    </Main>
    </>
  );
};

export default Shipping;
