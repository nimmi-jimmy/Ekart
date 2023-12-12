import styled from 'styled-components'

export const Main = styled.div`
    // display: flex;
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
export const PhnText = styled.div`
    color: #000;
    font-family: "Poppins", sans-serif; 
    font-size: 14px;  
    padding: 20px 0px 10px 0px;
`
export const Div = styled.div`
display: flex;
flex-direction: row;
`
export const Input = styled.input`
    border: none;
    background-color: #F0F4F8;
    font-family: "Poppins", sans-serif;   
    padding: 10px;
    border-radius: 5px;
    color: #829AB1;
    font-size: 14px; 
    width: 90%;
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
    height: 30px;
    z-index: 1;
    border-radius: 20px;
    width: 30px;
    align-items: center;
    background-color: #F0F4F8;
    margin: 20px 0px 20px 0px;
    border: 1px solid #829AB1;
`;

export const BtnText = styled.div`
    color: #000;
    font-family: "Poppins", sans-serif;   
   
`
export const AccDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
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