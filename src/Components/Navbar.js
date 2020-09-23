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
  DropdownItem,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle
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
        <NavbarToggler onClick={toggleNavbar} className="text-white" >{collapsed ? <i class="fas fa-bars"/> : <i class="fas fa-times"/> }</NavbarToggler>
        <Collapse isOpen={!collapsed} navbar className="mr-right" >
          <Nav navbar>
            <NavItem>
              <NavLink><Link className="text-white" to="/blog"><i class="fas fa-bullhorn"/> Blog</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link className="text-white" to="/inscription"><i class="fas fa-edit"/> Inscription en ligne</Link></NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret className="text-white">
                <i class="fas fa-plus"/> Sections
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <Link to='/sections/pilate'>Pilate</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to='/sections/danse'>Danse</Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink><Link className="text-white" to="/agenda"><i class="far fa-calendar-alt"/> Agenda des Activités</Link></NavLink>   
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