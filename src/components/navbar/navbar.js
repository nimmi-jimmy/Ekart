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
import { Nav, Arr, NavBtn, Logo, NavBtnLink } from './navbarelements';
import { CaretDownOutlined, SearchOutlined } from "@ant-design/icons";
import LogoSrc from '../../images/logo.png';
import Profile from '../../images/Ellipse.png';
import Arrow from '../../images/Vector.png';

const NavBar = () => {
  return (
    
        <Nav>
          <Logo src={LogoSrc}/>
        
              <NavBtnLink>
              <NavBtn>
                 <Logo src={Profile}/>
              </NavBtn>  
              <Arr src={Arrow}/>
              </NavBtnLink>
        </Nav>
    
  );
};

export default NavBar;