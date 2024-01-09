import styled from 'styled-components'

export const Main = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 30px;
    grid-column-gap: 30px;
    padding: 50px 50px 50px 30px;

    @media screen and (max-width: 1500px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 800px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const Img = styled.img`
display: flex;
object-fit: cover;
width: 150px;
height: 150px;
// border-radius: 100px;
margin: 10px;
`;

export const ProImg = styled.img`
display: flex;
object-fit: cover;
`;

export const SubImg = styled.div`
display: flex;
width: 30px;
height: 30px;
// padding-top: 5px;
padding-right: 5px;
 @media screen and (max-width: 500px) {
    display: none;
 }
`;

export const Text = styled.div`
    color: #000;
    font-family: "Poppins", sans-serif;   
    // padding-block: 5px;
    cursor: pointer;
    width: 200px;
    word-wrap: break-word;
`
export const Div = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

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
    // margin-right: 10px;
    @media screen and (max-width: 500px) {
        display: flex;
        flex-direction: column;
        margin-right: 10px;
        align-items: center;
        text-align: center;
    }
`

export const ImgMain = styled.img`
    margin-inline: 5px;
    display: flex;
    width: 30px;
    height: 30px;
    object-fit: cover;
    padding-right: 5px;
`;

export const MainDet= styled.div`
    display: flex;
    flex-direction: column;
    padding-inline: 10px;
    margin-block: 10px;
`;

export const Det= styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const MainText = styled.div`
    color: #000;
    font-family: "Poppins", sans-serif;   
    font-weight: bold;
    padding-block: 5px;
    cursor: pointer;
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