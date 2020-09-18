import React, { useState } from 'react';

import logo from '../Assets/Medias/millenium_white.svg';

import { 
  Collapse, 
  Navbar, 
  NavbarToggler, 
  NavbarBrand, 
  Nav, 
  NavItem, 
  NavLink,
} from 'reactstrap';

import { 
  Link,
} from 'react-router-dom';


const NavBar = (props) => {

  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  
  return (
    <div className='App-header'>
      <Navbar color="faded" dark>
        <NavbarBrand href="/" className="mr-auto"><img src={logo} alt='' className='NavBar-logo'/>AEP - Millénium</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="text-white" >{collapsed ? <i class="fas fa-bars"/> : <i class="fas fa-times"/> }</NavbarToggler>
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <Link className="text-white" to="/blog"><i class="fas fa-bullhorn"/> Blog</Link>
            </NavItem>
            <NavItem>
              <Link className="text-white" to="/inscription"><i class="fas fa-edit"/> Inscription en ligne</Link>
            </NavItem>
            <NavItem>
              <Link className="text-white" to="/sections"><i class="fas fa-plus"/> Sections</Link>
            </NavItem>
            <NavItem>
              <Link className="text-white" to="/calendrier"><i class="far fa-calendar-alt"/> Calendrier des Activités</Link>
            </NavItem>
            <NavItem>
              <NavLink className="text-white" href="https://github.com/baptistedftn"><i class="fab fa-github"/> GitHub</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
export default NavBar;