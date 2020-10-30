import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

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
          <Nav.Item><a href="/">Home</a></Nav.Item>
          <Nav.Item><a href="/about">About</a></Nav.Item>
          <Nav.Item><a href="/portfolio">Portfolio</a></Nav.Item>
          <Nav.Item><a href="/contact">Contact</a></Nav.Item> 
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)

export default Navigation