import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom';
import myImage from '../../images/logo.png';

export const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    // width: 100%;
    list-style-type: none;
    justify-content: space-between;
    height: 4rem;
    padding-inline: 50px;
    align-items: center;
    border-bottom: 1px solid #fff;
    background: #000;

    @media screen and (max-width: 400px) {
        padding-inline: 30px;
    }

    // @media screen and (max-width: 780px) {
    //     display: none;
    // }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 2.5rem;
    z-index: 1;
    border-radius: 15px;
    width: 30%;
    align-items: center;
    background-color: #F2F2F2;

    @media screen and (max-width: 500px) {
        width: 60%
    }

    `;

export const NavMenu = styled.ul`
        display: flex;        
        font-family: "Poppins", sans-serif;   
        color: #ABABAB;   
`;

export const NavItem = styled.li`
        height: 80px;
`;

// export const HeaderImg = styled.div`
//         background-image: url(${myImage});
//         width: 50px;
//         height: 50px;
// `;

export const Logo = styled.img`
    // width: 50px;
    // height: 50px;
`;

export const NavLinks = styled.div`
        color: #fff;
        display: flex;
        align-items: center;
        text-decoration: none;
        padding: 0 1rem;
        height: 100%;
        cursor: pointer;
        

`;
    
export const NavBtn = styled.nav`
        display: flex;
        padding: 0px 35px;
        
`;

export const NavBtnLink = styled(LinkR)`
        border-radius: 50px;
        background: #01bf71;
        white-space: nowrap;
        padding: 10px 22px;
        color: #010606;
        font-size: 16px;
        outline: none;
        border: none;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        text-decoration: none;

`;