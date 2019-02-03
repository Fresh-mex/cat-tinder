import React, { Component } from 'react'
import {
  Container,
  Col,
  Row,
  ListGroup,
} from 'react-bootstrap'
import '../App.css';

class Cats extends Component {
  render() {
    return(
      <div>
        <div >
          <h1 className='felines'>Feline Prostpects</h1>
        </div>
      <Container>
      <Row>
        <Col xs={10}>
          <ListGroup>
          {this.props.cats.map((cat,index)=>{
            return (
              <div key={index} className='profiles'>
                <picture > {cat.image}</picture>
                  <h4 >
                  <span className='cat-name'>
                  {cat.name}
                  </span>
                  - <small className='cat-age'>{cat.age} years old</small>
                  </h4>
                <span className='cat-enjoys'> Enjoys:
                  {cat.enjoys}
                </span>
              </div>
            )
          })}
          </ListGroup>
        </Col>
      </Row>
      </Container>
    </div>
    )
  }
}

export default Cats;
