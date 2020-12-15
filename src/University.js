import React, { Component } from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap'
import axios from 'axios'

class University extends Component {
  state = {
    univ: []
  }

  componentDidMount() {
    axios.get(`http://universities.hipolabs.com/search?name=middle`)
      .then(res => {
        const univ = res.data;
        this.setState({ univ });
        console.log(univ)
      })

  }
  render() {
    return (
      <div className="univ">
        <h1 style={{ marginTop: '30px', marginBottom: '20px', fontSize: '25px' }}>University List</h1>
        <Row style={{ placeContent: 'center', textAlign: '-webkit-center' }}>
          {this.state.univ.map(university =>
            <Col sm={3} style={{ marginLeft: '20px', marginBottom: '20px' }} >
              <Card style={{width: '240px', height: '130px'}}>
                <Card.Body>
                  <Card.Title style={{ fontSize: '15px' }}>{university.name} </Card.Title>
                  <Card.Title style={{ fontSize: '12px' }}>{university.country} ({university.alpha_two_code})</Card.Title>
                  <a style={{ fontSize: '13px' }} href={university.web_pages}>{university.web_pages} </a>
                </Card.Body>
              </Card>
            </Col>
          )}
        </Row>

      </div>
    )
  }
}

export default University;