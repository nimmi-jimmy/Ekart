import styled from 'styled-components'

export const Main = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 30px;
    grid-column-gap: 30px;
    padding: 50px 50px 50px 50px;

    @media screen and (max-width: 500px) {
        grid-template-columns: repeat(3, 1fr);
    }
    
`;

export const Img = styled.img`
display: flex;
object-fit: cover;
`;

export const ProImg = styled.img`
display: flex;
object-fit: cover;
`;

export const SubImg = styled.img`
display: flex;
width: 30px;
height: 30px;
padding-top: 5px;
padding-right: 5px;
`;

export const Text = styled.div`
    color: #000;
    font-family: "Poppins", sans-serif;   
    font-weight: bold;
    padding-block: 10px;
  
`
export const Div = styled.div`
    display: flex;
    flex-direction: column;
`
export const DivRow = styled.div`
    display: flex;
    flex-direction: row;
`
export const DivRows = styled.div`
    display: flex;
    flex-direction: row;
    padding-right: 50px;
`
export const Row = styled.div`
    padding: 6px;
`
export const AccDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
export const ImgMain = styled.img`
    width: 100%;
    // height: 50%;
`
export const MainDet= styled.div`
    display: flex;
    flex-direction: row;
    padding: 50px 50px 50px 50px;
`;

export const Det= styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 50px 50px 50px;
`;

export const MainText = styled.div`
    color: #000;
    font-family: "Poppins", sans-serif;   
    font-weight: bold;
    padding-block: 10px;
    font-size: 24px;
    padding-right: 30px;
`
export const SubDetText = styled.div`
    color: #000;
    font-family: "Poppins", sans-serif;   
    padding-block: 10px;
    max-width: 80%;
`
export const Rows = styled.div`
    padding-Block: 6px;
    padding-right: 6px;
`
export const SubText = styled.div`
    color: #000;
    font-family: "Poppins", sans-serif;   
    padding-block: 10px;
`
export const DivViewRow = styled.div`
    display: flex;
    flex-direction: row;
    // padding: 50px 50px 50px 50px;
`
export const BtnMain = styled.div`
    display: flex;
    justify-content: center;
    height: 3rem;
    z-index: 1;
    border-radius: 5px;
    width: 30%;
    align-items: center;
    background-color: #000;
    margin: 20px 0px 20px 0px;
`;

export const BtnText = styled.div`
    color: #fff;
    font-family: "Poppins", sans-serif;   
    font-weight: bold;
`