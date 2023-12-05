import styled from 'styled-components'

export const Main = styled.div`
    // display:grid;
    justify-content: center;
    z-index: 1;
    margin: auto;
    width: 35%;
    margin-top: 100px;
    align-items: center;
    padding: 50px 50px 50px 50px;

    @media screen and (max-width: 500px) {
        width: 70%;
    }
    @media screen and (max-width: 400px) {
        width: 68%;
    }  
`;

export const Text = styled.div`
    // text-align: center;
    color: #000;
    font-family: "Poppins", sans-serif;   
    font-weight: bold;
    font-size: 24px;
    padding-block: 10px;
`
export const SubText = styled.div`
    color: #949CA9;
    font-family: "Poppins", sans-serif;  
    font-size: 14px; 
    // text-align: center;
`
export const PhnText = styled.div`
    color: #000;
    font-family: "Poppins", sans-serif; 
    font-size: 14px;  
    padding: 20px 0px 10px 0px;
`
export const Div = styled.div`
// display: grid;
// alignItems: center;
// justifyContent: center;
    padding-top: 30px;
`
export const Input = styled.div`
    // text-align: center;
    border: 1px solid #949CA9;
    font-family: "Poppins", sans-serif;   
    padding: 10px;
    border-radius: 5px;
    color: #949CA9;
    // width:50%;
    font-size: 14px; 
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
    height: 3rem;
    z-index: 1;
    border-radius: 5px;
    // width: 30%;
    align-items: center;
    border: 1px solid #949CA9;
    margin: 20px 0px 20px 0px;
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