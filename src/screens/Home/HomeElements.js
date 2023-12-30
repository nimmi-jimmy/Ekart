import styled from 'styled-components'

export const Main = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 30px;
    grid-column-gap: 30px;
    padding: 50px 50px 50px 50px;
    justify-content: center;

    @media screen and (max-width: 1400px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 600px) {
        grid-template-columns: repeat(1, 1fr);
    }
    
`;

export const Modal = styled.div`
    // display: none; 
    position: fixed; 
    z-index: 1; 
    padding-top: 50px; 
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%; 
    overflow: auto; 
    background-color: rgb(0,0,0); 
    background-color: rgba(0,0,0,0.4); 
`
export const Closes = styled.div`
    right: 40%;
    position: absolute;
    font-size: 12px;

    @media screen and (max-width: 800px){
        right: 25%;
    }
`

export const Close = styled.div`
    right: 22%;
    position: absolute;

`
export const Content = styled.div`
    background-color: #fefefe;
    margin: auto;
    border: 1px solid #888;
    width: 60%;
    display: flex;
    flex-direction: row;
     @media screen and (max-width: 500px) {
        width: 80%;
    }
`
export const Contentss = styled.div`
    background-color: #fefefe;
    margin: auto;
    border: 1px solid #888;
    width: 20%;
    padding: 20px;
    border-radius: 15px;
    display: flex;
    flex-direction: row;
    @media screen and (max-width: 800px) {
        width: 50%;
    }
`

export const Img = styled.img`
display: flex;
object-fit: cover;
// width: 300px;
height: 200px;
border-radius: 20px;
// @media screen and (max-width: 1400px) {
//         width: 250px;
//     }
//     @media screen and (max-width: 800px) {
//         width: 200px;
//     }
`;

export const MImg = styled.img`
display: flex;
object-fit: cover;
width: 300px;

@media screen and (max-width: 1400px) {
        width: 250px;
    }
    @media screen and (max-width: 800px) {
        display: none;
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
        max-width: 30rem;
    }
    // @media screen and (max-width: 800px) {
    //     max-width: 10rem;
    // }
`
export const Div = styled.div`
    display: flex;
    flex-direction: column;
`
export const MainTime = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 30px;

    @media screen and (max-width: 1400px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 500px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

export const BtnTime = styled.div`
display: flex;
justify-content: center;
height: 3rem;
border-radius: 5px;
align-items: center;
border: 1px solid #dddddd;
margin: 0px 0px 20px 0px;
`
export const Drop = styled.div`
    // text-align: center;
    border: 1px solid #949CA9;
    font-family: "Poppins", sans-serif;   
    padding: 10px;
    border-radius: 5px;
    color: #949CA9;
    width: 95%;
    font-size: 14px; 
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
export const DInput = styled.div`
    // text-align: center;
    border: 1px solid #949CA9;
    font-family: "Poppins", sans-serif;   
    padding: 10px;
    border-radius: 5px;
    color: #949CA9;
    width: 95%;
    font-size: 14px; 
`
export const PhnText = styled.div`
    color: #000;
    font-family: "Poppins", sans-serif; 
    // font-size: 14px;  
    padding: 20px 0px 10px 0px;
`
export const ModalDiv = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 50%;
    @media screen and (max-width: 800px) {
    width: 90%;
    }
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
    border-radius: 5px;
    // width: 30%;
    align-items: center;
    border: 1px solid #000;
    margin: 20px 0px 20px 0px;
`


