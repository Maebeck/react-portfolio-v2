import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { withRouter } from 'react-router';
import './nav.css';

function Navigation({ location }) {
    return (
        <Navbar bg='dark' expand='md' activeKey={location.pathname}>
            <Navbar.Brand className ="navlinks"  href='/about'>Corey Smith</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse className='justify-content-end' id='basic-navbar-nav'>
                <Nav>
                    <Nav.Link className ="navlinks" href='/about'>About</Nav.Link>
                    <Nav.Link className ="navlinks"  href='/portfolio'>Portfolio</Nav.Link>
                    <Nav.Link className ="navlinks" href='/contact'>Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    )
};

const NavBar = withRouter(Navigation)

export default NavBar;