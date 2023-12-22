import React, { useState } from 'react';
import { Div, Main, Text, SubText, PhnText, Divc, Input, PDiv, Divp, PassDiv } from './PaymentElements';
import Button from '../../components/Button/Button';
import NavBar from '../../components/navbar/navbar';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const navigation = useNavigate();
  const handle = () => {
    navigation('/Success')
  };
  return (
    <><NavBar></NavBar>
      <Main>
        <Text>Payment</Text>
        <hr></hr>
        
              <PhnText>Pay With:</PhnText>
              <label><input type='radio' name="payment" value="card" defaultChecked></input>Card</label>
              <label><input type='radio' name="payment" value="bank"></input>Bank</label>
              <label><input type='radio' name="payment" value="transfer"></input>Transfer</label>
              <PhnText>Card Number</PhnText>
              <Input placeholder='1234 3456 4567' ></Input> 
              <PDiv>
                <Divp>
                  <PhnText>Expiration Date</PhnText>
                  <PassDiv>
                    <Input placeholder='MM/YY' ></Input> 
                  </PassDiv>
                </Divp>
                <Divc>
                  <PhnText>CVV</PhnText>
                  <PassDiv>
                    <Input placeholder='123' ></Input> 
                  </PassDiv>
                </Divc>
            </PDiv>
            <Div><input type="checkbox" /><SubText>Save card details</SubText></Div>
        <Button title='Pay' onClick={handle}/>
        <SubText>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.</SubText>
      </Main>
    </>
  );
};

export default Payment;