import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import FriendList from './Friends/FriendList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      error: ''
    };
  }

  componentDidMount() {
    console.log('CDM now running');
    // http://localhost:5000 is the address to the server doorstep
    // /items is the "endpoint"
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
  render() {
    return (
      <div className="App">
        <FriendList friends={this.state.friends} />
      </div>
    );
  }
}

export default App;
