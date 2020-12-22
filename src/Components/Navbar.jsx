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
      <Navbar color="faded" dark expand="md">
        <Link to='/'><NavbarBrand><img src={logo} alt='' className='NavBar-logo'/>AEP - Millénium</NavbarBrand></Link>
        <NavbarToggler onClick={toggleNavbar} className="text-white" >{collapsed ? <small><i class="fas fa-bars"/></small> : <small><i class="fas fa-times"/></small> }</NavbarToggler>
        
        <Collapse isOpen={!collapsed} navbar className="mr-right" >
          <Nav navbar>
            <NavItem>
              <NavLink><Link className="text-white" to="/discussions"><i class="fas fa-comment-alt"/> Discussions</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link className="text-white" to="/inscription"><i class="fas fa-edit"/> Inscription en ligne</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link className="text-white" to="/sections"><i class="fas fa-users"/> Sections</Link></NavLink>   
            </NavItem>
            <NavItem>
              <NavLink><Link className="text-white" to="/agenda"><i class="far fa-calendar-alt"/> Agenda des Activités</Link></NavLink>   
            </NavItem>
            <NavItem>
              <NavLink><Link className="text-white" to="/archives"><i class="fas fa-film"/> Archives</Link></NavLink>   
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
export default NavBar;