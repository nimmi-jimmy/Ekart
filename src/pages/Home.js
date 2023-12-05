import React,{useState} from 'react';
import styled from 'styled-components';
// import Header from "../components/Header/Header";
import NavBar from "../components/navbar/navbar";
// import Sidebar from "../components/Sidebar/index";

const Bg = styled.div`
    position: relative;
    margin: auto;
    -ms-overflow-style: none;
    -scrollbar-width: none;

`;

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
     
        <Bg>
            {/* <Header /> */}
            {/* <Sidebar isOpen={isOpen} toggle={toggle} /> */}
            <NavBar toggle={toggle} />
        </Bg> 
            
    )
}

export default Home;