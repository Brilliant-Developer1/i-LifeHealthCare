import React from 'react';
import { Container, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import useAuth from '../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';


const Header = () => {
    const {user, logout} = useAuth();
    return (
        <div>
        <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">i-Life <small>Health Care</small> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as = { HashLink } to="/home#home">Home</Nav.Link>
            <Nav.Link as = { HashLink } to="/services#services">Services</Nav.Link>
            <Nav.Link as = { HashLink } to="/healthCheckUp">Health Check-Up</Nav.Link>
            <Nav.Link as = { HashLink } to="/about">About Us</Nav.Link>
            
          </Nav>
          <Nav>
          { user?.email ?
            <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#user">{user.displayName}</a>
          </Navbar.Text>
            <Button onClick={logout} variant="dark">Logout</Button>
            </Navbar.Collapse>
            :
            <Nav.Link as = { HashLink } to="/login#login">Login</Nav.Link>}
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
        </div>
    );
};

export default Header;