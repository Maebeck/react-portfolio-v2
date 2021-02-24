import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { withRouter } from 'react-router';

function Navigation({ location }) {
    return (
        <Navbar bg='light' expand='md' activeKey={location.pathname}>
            <Navbar.Brand href='/'>Corey Smith</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse className='justify-content-end' id='basic-navbar-nav'>
                <Nav>
                    <Nav.Link href='/about'>About</Nav.Link>
                    <Nav.Link href='/portfolio'>Portfolio</Nav.Link>
                    <Nav.Link href='/contact'>Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    )
};

const NavBar = withRouter(Navigation)

export default NavBar;