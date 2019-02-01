import React, { Component } from 'react'
import {
  Col,
  Row,
  Form,
  Button,
} from 'react-bootstrap'
import '../App.css';

export default class NewDog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form:{
        name:'',
        age:'',
        enjoys:''
      }
    }
  }
  handleChange(e){
    let { form } = this.state
    form[e.target.name] = e.target.value
    form[e.target.age] = e.target.value
    form[e.target.enjoys] = e.target.value
    this.setState({
      form: form
    })
  }
  addDog(){
    this.props.handleNewDog(this.state.form)
  }

  render()
   {
     // console.log(this.state.form);
    return(
      <div>
      <h1>New Dog</h1>
      <Form className="form">
        <Form.Group as={Row}>
          <Form.Label id="name" column sm="2">Name</Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter name"
              onChange={this.handleChange.bind(this)}
              value={this.state.form.name}/>
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label id="age" column sm="2">Age</Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              name="age"
              placeholder="Enter age"
              onChange={this.handleChange.bind(this)}
              value={this.state.form.age}/>
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label id="enjoys" column sm="2">Enjoys</Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              name="enjoys"
              placeholder="Enter enjoys"
              onChange={this.handleChange.bind(this)}
              value={this.state.form.enjoys}/>
          </Col>
        </Form.Group>
      </Form>
        <Button
        variant="primary"
        type="submit" size="sm"
        id="submit" onClick={this.addDog.bind(this)}>Create Dog Profile
        </Button>
      </div>
    )
  }
}
