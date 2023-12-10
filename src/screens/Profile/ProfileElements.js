import styled from 'styled-components'

export const Main = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 30px;
    grid-column-gap: 30px;
    padding: 50px 50px 50px 50px;

    @media screen and (max-width: 1400px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 500px) {
        grid-template-columns: repeat(1, 1fr);
    }
    
`;

export const Img = styled.img`
display: flex;
object-fit: cover;
width: 300px;

@media screen and (max-width: 1400px) {
        width: 250px;
    }
    @media screen and (max-width: 800px) {
        width: 200px;
    }
`;

export const MsgImg = styled.img`
display: flex;
object-fit: cover;
width: 20px;
`;

export const ProImg = styled.img`
display: flex;
object-fit: cover;
`;

export const Profilepic = styled.img`
    border-radius: 100px;
    width: 150px;
    height: 150px;
    // position: absolute;
    // top: 15%;
    // left: 10%;
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
    cursor: pointer;
`
export const About = styled.div`
    color: #000;
    font-family: "Poppins", sans-serif;   
    padding-block: 10px;
    max-width: 20rem;
    cursor: pointer;
    @media screen and (max-width: 1400px) {
        max-width: 15rem;
    }
    @media screen and (max-width: 800px) {
        max-width: 10rem;
    }
`
export const Div = styled.div`
    display: flex;
    flex-direction: column;
`
export const ProfileDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    align-items: center;
    margin-top: 20px;
    @media screen and (max-width: 500px) {
        width: 50%;
    }
`
export const DivRow = styled.div`
    display: flex;
    flex-direction: row;
    
    @media screen and (max-width: 500px) {
        flex-direction: column;
        align-items: center;
    }
    
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
    height: 2rem;
    z-index: 1;
    border-radius: 5px;
    // width: 30%;
    align-items: center;
    background-color: #000;
    margin-inline: 20px;
    padding-inline: 5px;
`;

export const BtnText = styled.div`
    color: #fff;
    font-family: "Poppins", sans-serif;   
    font-weight: bold;
`
export const BtnOver = styled.div`
    // position: absolute;
    // top: 50%;
    // left: 50%;
    // transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    height: 3rem;
    z-index: 1;
    border-radius: 5px;
    // width: 30%;
    align-items: center;
    border: 1px solid #000;
    margin: 20px 0px 20px 0px;
`


