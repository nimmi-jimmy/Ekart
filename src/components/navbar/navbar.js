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
  const handle1 = () => {
    navigation('/Profile')
  };
  return (
    <>
        <Nav>
          <Logo src={LogoSrc}/>

          <NavBtnLink>
              <Input placeholder='Search'/>
              <div style={{marginLeft: "-40px", marginRight: "20px", marginTop: "20px"}} onClick={handle1}><SearchOutlined /></div>
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
            {/* <div onClick={handle}>
              <PhnText onClick={handleMenuOne}><LoginOutlined /> Sign In</PhnText>
            </div> */}
            <PhnText onClick={handle}><LogoutOutlined /> Sign Out</PhnText>
          </Drop>
        ) : null}
    </>
  );
};

export default NavBar;