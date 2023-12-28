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
import { Nav, Arr, NavBtn, Drop, PhnText, Logo, NavBtnLink, NavMenu, Input } from './navbarelements';
import LogoSrc from '../../images/logo.png';
import Profile from '../../images/Ellipse.png';
import Arrow from '../../images/Vector.png';
import { LoginOutlined, LogoutOutlined, SearchOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

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
  const navigation = useNavigate();
 
  const handle = () => {
    navigation('/Signin')
  };
  return (
    <>
        <Nav>
          <Logo src={LogoSrc}/>

          <NavBtnLink>
              <Input placeholder='Search'/><SearchOutlined />
              <NavBtnLink>
                <NavMenu>George</NavMenu>
              <NavBtn>
                 <Logo src={Profile}/>
              </NavBtn>  
              <Arr src={Arrow} onClick={handleOpen}/>
              </NavBtnLink>
          </NavBtnLink> 
        </Nav>
        {open ? (
          <Drop>
            <div onClick={handle}>
              <PhnText onClick={handleMenuOne}><LoginOutlined /> Sign In</PhnText>
            </div>
            <PhnText onClick={handleMenuTwo}><LogoutOutlined /> Sign Out</PhnText>
          </Drop>
        ) : null}
    </>
  );
};

export default NavBar;