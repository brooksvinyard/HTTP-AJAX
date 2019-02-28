import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import FriendForm from './Friends/FriendForm';
import Header from './Header/Header'
import Home from './Home'
// import Route from 'react-router-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      error: ''
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(res => {
        this.setState({ friends: res.data });
      })
      .catch(err => {
        console.log(err);
        this.setState({ error: err });
      });
  }


  render() {
    return (
      <div className="App">
        {<Header />}
        {<Route exact path="/" render={props => <Home {...props} friends={this.state.friends} /> } />}
        {<Route path="/friend-form" render={props => <FriendForm {...props} /> } />}
      </div>
    )
  }
}

export default App;
