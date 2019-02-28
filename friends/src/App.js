import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import FriendForm from './Friends/FriendForm';
import Header from './Header/Header'
import Home from './Home'
// import Route from 'react-router-dom'
import { Route, Link } from 'react-router-dom';
import friend from './Friends/Friend';

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
        console.log(res);
        this.setState({ friends: res.data });
      })
      .catch(err => {
        console.log(err);
        this.setState({ error: err });
      });
  }

  addFriend = (e, friend) => {
    e.preventDefault();

    axios.post('http://localhost:5000/friends', friend)
      .then(res => {
        this.setState({
          friends: res.data
        });

        //Change page here
        //
      })
      .catch(err => {
        console.log(err);
      })
  };


  render() {
    return (
      <div className="App">
        {<Header />}
        {<Route exact path="/" render={props => <Home {...props} friends={this.state.friends} />} />}
        {<Route path="/friend-form" render={props => <FriendForm {...props} addFriend={this.addFriend} />} />}
      </div>
    )
  }
}

export default App;
