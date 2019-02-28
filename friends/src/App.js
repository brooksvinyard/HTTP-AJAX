import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import FriendList from './Friends/FriendList';
import Header from './Header/Header'

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
        <Header />
        <FriendList friends={this.state.friends} />
      </div>
    );
  }
}

export default App;
