import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Styles = styled.div`
  .navbar { background-color: transparent}
  a, .navbar-nav, .navbar-light .nav-link {
    color: white;
        &:hover { color: red; };
        &:visited { color: blue }
  `;
export const Navigation = () => (
  <Styles>
    <Navbar expand="lg">
     <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Link to="/">Home</Link></Nav.Item>
          <Nav.Item><Link to="/about">About</Link></Nav.Item>
          <Nav.Item><Link to="/portfolio">Portfolio</Link></Nav.Item>
          <Nav.Item><Link to="/contact">Contact</Link></Nav.Item> 
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)

export default Navigation