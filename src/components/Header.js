import React, { Component } from "react";
import {
    NavLink,
  } from "react-router-dom";
import logo from '../assets/img/logo.png';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


class AppHeader extends Component {
    render() {
      return (

        <Navbar collapseOnSelect expand="lg" className="header headerNav">
          <Navbar.Brand href="#">
              <img alt="" src={logo} className="d-inline-block align-top imgLogo"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <NavLink exact to="/">Transação</NavLink>
              <NavLink to="/Dashboard"> Dashboard</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        
        );
    }
  }



export default AppHeader;




