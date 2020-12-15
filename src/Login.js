import React, { Component } from 'react'
import { Route } from 'react-router'
import { Card, Form, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';

class Login extends Component {
  render() {
    return (
      <div className="home">
        <Route>
          <div className="form" style={{ textAlign: '-webkit-center' }}>
            <h1 style={{ marginTop: '30px', marginBottom: '20px', fontSize: '25px' }}>Login</h1>
            <Card style={{ width: '500px' }}>
              <Form>
                <Form.Group controlId="formBasicEmail" style={{ width: '300px', marginTop: '20px' }}>
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword" style={{ width: '300px' }}>
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit" style={{ marginBottom: '20px'}}>
                  <NavLink exact to="/" style={{ color: 'white' }}>
                  Submit
                  </NavLink>

  </Button>
              </Form>
            </Card>
          </div>
        </Route>
      </div>
    )
  }
}

export default Login