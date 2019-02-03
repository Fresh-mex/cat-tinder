import React, { Component } from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import {
  Jumbotron,
  Nav,
  Navbar
} from 'react-bootstrap'

import Header from './components/Header'
import Cats from './pages/Cats'
import NewCat from './pages/NewCat'
import NewDog from './pages/NewDog'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      cats: [
        {
          name: "Felix",
          age: "3",
          enjoys: " Long walks on the beach",
          image: <img src='https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' className='image' alt='cat'/>
        },
        {
          name: 'George',
          age: '6',
          enjoys: ' Chasing lasers anywhere and everywhere!',
          image: <img src='https://images.pexels.com/photos/326875/pexels-photo-326875.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' className='image' alt='cat'/>
        }
      ]
    }
  }
  handleSubmit(newPet){
    console.log(newPet);
  }

  render() {
    return (
      <div className="body">
        <Jumbotron >
          <Router>
            <div style={{BackgroundColor:"#484A4B"}}>
            <Navbar className="navbar">
              <Nav>
                <Link to="/cats" className="title">
                    Cat Tinder
                </Link>
              </Nav>
              <Nav>
                <Link to="/newcat" className="new_cat">
                   New Cat
                </Link>
              </Nav>
            </Navbar>
            <Switch>
              <Route exact path="/cats" render={(props)=> <Cats cats={this.state.cats}/>} />
              <Route exact path="/newcat" render={(props)=> <NewCat handleNewCat={this.handleSubmit}/>}/>
              <Route exact path="/newdog" render={(props)=> <NewDog handleNewDog={this.handleSubmit}/>}/>
            </Switch>
            </div>
          </Router>
        </Jumbotron>
        <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Varela+Round" />
      </div>
    );
  }
}

export default App;
