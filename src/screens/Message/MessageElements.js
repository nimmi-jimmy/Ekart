import styled from 'styled-components'

export const Main = styled.div`
    height: 550px;
    justify-content: center;
    z-index: 1;
    margin: auto;
    width: 50%;
    align-items: center;
    padding-inline: 50px;
    padding-block: 50px;
    margin-block: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    @media screen and (max-width: 500px) {
        width: 70%;
    }
    @media screen and (max-width: 400px) {
        width: 68%;
    }  
        
`;

export const Text = styled.div`
    text-align: center;
    color: #000;
    font-family: "Poppins", sans-serif;   
    font-weight: bold;
    font-size: 24px;
    padding: 10px;
`
export const SubText = styled.div`
    color: #949CA9;
    font-family: "Poppins", sans-serif;  
    font-size: 14px; 
    text-align: center;
`
export const SendText = styled.div`
    color: #000;
    font-family: "Poppins", sans-serif; 
    font-size: 14px;  
    cursor: pointer;
    max-width: 200px;
`
export const ReceiveText = styled.div`
    color: #fff;
    font-family: "Poppins", sans-serif; 
    font-size: 14px;  
    cursor: pointer;
    max-width: 200px;
`

export const Div = styled.div`
    position: absolute;
    bottom: 0;
    width: 50%;
    flex-direction: row;
    display: flex;
    margin-bottom: 2rem;
`
export const Input = styled.input`
    border: none;
    background-color: #F0F4F8;
    font-family: "Poppins", sans-serif;   
    padding: 10px;
    border-radius: 10px;
    color: #829AB1;
    font-size: 14px; 
    width: 90%;
    display: flex;
    flex-direction: column;
    flex: 1;
    max-height: 460px;
    overflow-y: scroll;
`
export const MessageDiv = styled.div`  
    display: flex;
    flex-direction: column; 
`
export const PText = styled.div`
    color: #2F93F6;
    font-family: "Poppins", sans-serif; 
    font-size: 14px;  
    text-align: end;
`
export const BtnMain = styled.div`
    display: flex;
    justify-content: center;
    height: 40px;
    z-index: 1;
    border-radius: 30px;
    width: 40px;
    align-items: center;
    background-color: #F0F4F8;
    margin-inline: 20px;
    border: 1px solid #829AB1;
`;

export const BtnText = styled.div`
    color: #000;
    font-family: "Poppins", sans-serif;   
`
export const SendDiv = styled.div`
background-color: #D9E2EC;
padding: 10px;
border-radius: 5px;
text-align: right;
float: right;
borderTopRightRadius: 5;
paddingHorizontal: 12;
max-width: fit-content;
display: flex;
flex-direction: row;
align-items: flex-end;
justify-content: end;
margin-left: auto; 
margin-right: 0;
`

export const ReceiveDiv = styled.div`
background-color: #2186EB;

padding: 10px;
border-radius: 5px;
text-align: left;
float: left;
borderTopRightRadius: 5;
paddingHorizontal: 12;
max-width: fit-content;
display: flex;
flex-direction: row;
align-items: flex-end;
justify-content: end;
// min-width: 50px;
`
export const AccText = styled.div`
    color: #000;
    font-family: "Poppins", sans-serif;   
    padding-inline: 5px;
`
export const Signup = styled.div`
    color: #2F93F6;
    font-family: "Poppins", sans-serif;    
`
export const Logo = styled.img`
    padding: 20px;
`;