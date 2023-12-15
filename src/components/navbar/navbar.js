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
import { Nav, Arr, NavBtn, Drop, PhnText, Logo, NavBtnLink, NavMenu } from './navbarelements';
import LogoSrc from '../../images/logo.png';
import Profile from '../../images/Ellipse.png';
import Arrow from '../../images/Vector.png';
import { LoginOutlined, LogoutOutlined } from '@ant-design/icons';

const NavBar = () => {

  const handleOpen = () => {
    setOpen(!open);
  };
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(false);

  const handleMenuOne = () => {
    // do something
    setOpen(false);
    setValue("Customer");
  };

  const handleMenuTwo = () => {
    // do something
    setOpen(false);
    setValue("Photograper");
  };

  return (
    <>
        <Nav>
          <Logo src={LogoSrc}/>
              <NavBtnLink>
                <NavMenu>George</NavMenu>
              <NavBtn>
                 <Logo src={Profile}/>
              </NavBtn>  
              <Arr src={Arrow} onClick={handleOpen}/>
              </NavBtnLink>
              
        </Nav>
        {open ? (
          <Drop>
            <PhnText onClick={handleMenuOne}><LoginOutlined /> Sign In</PhnText>
            {/* <PhnText onClick={handleMenuTwo}>Sign Up</PhnText> */}
            <PhnText onClick={handleMenuTwo}><LogoutOutlined /> Sign Out</PhnText>
          </Drop>
        ) : null}
    </>
  );
};

export default NavBar;