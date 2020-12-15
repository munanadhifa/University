import React, { Component } from 'react'
import { Navbar, Form, FormControl, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';

class navbar extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">University List</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link><NavLink exact to="/" style={{ color: 'white' }}>Home</NavLink></Nav.Link>
            <Nav.Link><NavLink to="/newsletter" style={{ color: 'white' }}>Newsletter</NavLink></Nav.Link>
            <Nav.Link><NavLink to="/login" style={{ color: 'white' }}>Login</NavLink></Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          </Form>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default navbar