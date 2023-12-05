// import React from 'react';
// import {Nav, Search} from './navbarelements'


// const Navbar = () => {
//     return (
//         <Nav>
//             <Search>
                
//             </Search>
//         </Nav>
//     )
// }

// export default Navbar;

import React from 'react';
import { Nav, NavbarContainer, NavMenu, NavBtn, Logo } from './navbarelements';
import { FaSearch } from "react-icons/fa";
import LogoSrc from '../../images/logo.png';

const NavBar = () => {
  return (
    
        <Nav>
          <Logo src={LogoSrc}/>
          {/* <img
            src={"../../images/logo.png"}
            style={{ width: 50, height: 50 }}
        
            // resizeMode="cover"
          /> */}
            <NavbarContainer>
                <NavMenu>Search</NavMenu>
                <NavBtn><FaSearch/></NavBtn>
            </NavbarContainer>
        </Nav>
    
  );
};

export default NavBar;