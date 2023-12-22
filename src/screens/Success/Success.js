import React, { useState } from 'react';
import { Div, Main, Text, SubText, PhnText, Divc, Input, PDiv, Divp, PassDiv, Img } from './SuccessElements';
import Button from '../../components/Button/Button';
import NavBar from '../../components/navbar/navbar';
import Checked from '../../images/checked.png';

const Success = () => {
  
  return (
    <><NavBar></NavBar>
      <Main>
        <Div>
            <PDiv>
                <Img src={Checked}/>
                <Text>Payment Successful!</Text>
                <SubText>Transaction Number: 1234568910</SubText>
            </PDiv>
            <PassDiv>
                <Divp>
                    <PhnText>Account Paid:</PhnText>
                    <PhnText>$250</PhnText>
                </Divp>
                <Divp>
                    <PhnText>Bank:</PhnText>
                    <PhnText>SBI</PhnText>
                </Divp>
            </PassDiv>
        </Div>
      </Main>
    </>
  );
};

export default Success;