import styled from 'styled-components'

export const Main = styled.div`
    // display:grid;
    justify-content: center;
    z-index: 1;
    margin: auto;
    width: 35%;
    align-items: center;
    padding: 100px 0px 50px 0px;

    @media screen and (max-width: 500px) {
        width: 70%;
    }
    @media screen and (max-width: 400px) {
        width: 68%;
    }       
`;

export const Text = styled.div`
    // text-align: center;
    color: #00c281;
    font-family: "Poppins", sans-serif;   
    font-weight: bold;
    font-size: 24px;
    padding-top: 20px;
    padding-bottom: 10px;
`
export const SubText = styled.div`
    color: #ACACAC;
    font-family: "Poppins", sans-serif; 
    font-size: 14px;  
   
`
export const PhnText = styled.div`
    color: #ACACAC;
    font-family: "Poppins", sans-serif; 
    font-size: 16px;  
    padding: 10px 0px 10px 0px;
    font-weight: bold;
`
export const Input = styled.input`
    // text-align: center;
    border: 1px solid #949CA9;
    font-family: "Poppins", sans-serif;   
    padding: 10px;
    border-radius: 5px;
    color: #949CA9;
    width: 95%;
    font-size: 14px; 
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
export const PDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const Divp = styled.div`
    display: flex;
    justify-content: space-between;
`
export const Divc = styled.div`
    width: 100%;
    padding-left: 10px;

    @media screen and (max-width: 500px) {
        padding-left: 0px;    } 
`
export const PassDiv = styled.div`
    margin-top: 80px
`
export const Div = styled.div`
    padding: 30px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`
export const Img = styled.img`
    display: flex;
    object-fit: cover;
    width: 60px;
    height: 60px;
`;