import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { withRouter } from 'react-router';
import './nav.css';

function Navigation({ location }) {
    return (
        <Navbar className='justify-content-center navbar-style' expand='md' activeKey={location.pathname}>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse className='justify-content-center nav-style' id='basic-navbar-nav'>
                <Nav>
                    <Nav.Link className ="navlinks" href='/About'>About</Nav.Link>
                    <Nav.Link className ="navlinks"  href='/Portfolio'>Portfolio</Nav.Link>
                    <Nav.Link className ="navlinks" href='/Contact'>Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    )
};

const NavBar = withRouter(Navigation)

export default NavBar;