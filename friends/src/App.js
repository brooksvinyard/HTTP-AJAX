import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import FriendForm from './Friends/FriendForm';
import Header from './Header/Header'
import Home from './Home'
// import Route from 'react-router-dom'
import { Route } from 'react-router-dom';
import FriendCard from './Friends/FriendCard';
import FriendList from './Friends/FriendList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      activeFriend: [],
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

  deleteFriend = (e, id) => {
    debugger;
    e.preventDefault();

    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(res => {
        this.setState({
          friends: res.data
        });
        this.props.history.push('/friend-list');
      })
      .catch(err => {
        console.log(err);
      });
  };


  setUpdateForm = (e, friend) => {
    e.preventDefault();

    this.setState({
      activeFriend: friend
    });
    this.props.history.push('/friend-form');
  };



  updateFriend = (e, friend) => {
    e.preventDefault();

    axios
      .put(`http://localhost:5000/friends/${friend.id}`, friend)
      .then(res => {
        this.setState({
          activeFriend: null,
          friends: res.data
        });
        this.props.history.push('/friend-list');
      })
      .catch(err => {
        console.log(err);
      });
  };


  render() {
    return (
      <div className="App">
        {<Header />}
        {<Route exact path="/" render={props => <Home {...props} friends={this.state.friends} setUpdateForm={this.setUpdateForm}/>} />}
        {<Route exact path="/friend-list" render={props => <FriendList {...props} friends={this.state.friends} setUpdateForm={this.setUpdateForm}/>} />}
        {<Route path="/friend-form" render={props => <FriendForm {...props} addFriend={this.addFriend} activeFriend={this.state.activeFriend} updateFriend={this.updateFriend} />} />}
        {<Route path="/friend-list/:id" render={props =>  <FriendCard {...props} deleteFriend={this.deleteFriend} friends={this.state.friends} setUpdateForm={this.setUpdateForm} /> } />}
      </div>
    )
  }
}

export default App;
