import styled from 'styled-components'

export const ImgMain = styled.img`
    // position: absolute;
    width: 100%; 
    height:100%;
    top:0; 
    left:0;
    background:rgba(255,255,255,0.5);
    opacity: 1;
    transition: all 0.5s;
`
export const MainDet= styled.div`
//     position: relative;
//   width: 100%;
//   max-width: 400px;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-inline: 28rem;
`
export const Logo = styled.img`
    // width: 50px;
    // height: 50px;
    justify-content: center;
`;

export const Cen = styled.div`
    justify-content: center;
    display: flex;
    padding-block: 15px;
`;

export const Drop = styled.div`
    border-radius: 5px;
    background-color: #fff;
    width: 31%;
    transform: translate(-50%, -50%);
    font-size: 14px;
    z-index: 1;
    display: flex;
    position: absolute;
    top: 60%;
    left: 50%;
    flex-direction: column;
    color: #fff;
    padding: 10px;
     @media screen and (max-width: 500px) {
        width: 61%
    }
`
export const PhnText = styled.div`
    color: #000;
    font-family: "Poppins", sans-serif; 
    font-size: 14px;  
    padding: 10px 0px 10px 0px;
`
export const PhnText1 = styled.div`
    color: #000;
    font-weight: bold;
    font-family: "Poppins", sans-serif; 
    font-size: 14px;  
    padding: 10px 0px 10px 0px;
    cursor: pointer;
`
export const NavbarContainer = styled.input`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: space-between;
    height: 2.5rem;
    z-index: 1;
    border: 1px solid #808080;
    border-radius: 15px;
    width: 30%;
    align-items: center;
    background-color: #282828;
    color: #fff;
    padding-inline: 20px;
    font-size: 14px;

    @media screen and (max-width: 500px) {
        width: 60%
    }

    `;