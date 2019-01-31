import React, { Component } from 'react'
import {
  Container,
  Col,
  Row,
  ListGroup,
  ListGroupItem,
  Form
} from 'react-bootstrap'
import '../App.css';

export default class NewCat extends Component {
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
    forma[e.target.name] = e.target.value
    this.setState({
      form: form
    })
  }
  render() {
    return(
      <Form>
      <Form.Control
        type="text"
        name="name"
        onChange={this.handleChange.bind(this)}
        value={this.state.form.name}/>
        </Form>

    )
  }
}
