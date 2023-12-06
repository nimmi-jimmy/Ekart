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
export const Row = styled.div`
    padding: 6px;
`

export const AccDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`