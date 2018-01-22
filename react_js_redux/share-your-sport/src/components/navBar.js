import React from 'react';
import ReactDOM from 'react-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink} from 'reactstrap';



export const NavBar=(props) => (
			 <div>
		        <Navbar color="dark" dark expand="md">
		          <NavbarBrand href="/">ShareYourSport</NavbarBrand>
		          <NavbarToggler onClick={props.onToggle} />
		          <Collapse isOpen={props.isOpen} navbar>
		            <Nav className="ml-auto" navbar>
		             <NavItem >
		                <NavLink href="/home/">Home</NavLink>
		              </NavItem>
		              <NavItem>
		                <NavLink href="/creer/">Créer un événement</NavLink>
		              </NavItem>
		              <NavItem>
		                <NavLink href="/parametres">Paramètres</NavLink>
		              </NavItem>       
		            </Nav>
		          </Collapse>
		        </Navbar>
		      </div>
	      )








