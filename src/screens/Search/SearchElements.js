import styled from 'styled-components'

export const ImgMain = styled.img`
    position: absolute;
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