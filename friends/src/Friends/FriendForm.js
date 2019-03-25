import React from 'react';


class FriendForm extends React.Component {
    state = {
        friend: this.props.activeFriend || {
            name: '',
            age: '',
            email: ''
        }
    };

    componentDidUpdate(prevProps) {
        if (
            this.props.activeFriend &&
            prevProps.activeFriend !== this.props.activeFriend
          ) {
            this.setState({
              item: this.props.activeFriend
            });
          }
    }

    changeHandler = e => {
        e.persist();

        if (e.target.name === 'age') {
          e.target.value = parseInt(e.target.value, 10);
        }
        
        this.setState(prevState => ({
            friend: {
                ...prevState.friend,
                [e.target.name]: e.target.value
            }
        }));
    };

    handleSubmit = e => {
        if (this.props.activeFriend) {
            this.props.updateFriend(e, this.state.friend);
          } else {
            this.props.addFriend(e, this.state.friend)
          }
        this.setState({
            friend: {
                name: '',
                age: '',
                email: ''
            }
        })
    }

    render() {
    return (
        <div className="friend-form" >
            <h2>Enter New Friend</h2>

            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="name"
                    onChange={this.changeHandler}
                    placeholder="Name"
                    value={this.state.friend.name}
                />
                <input
                    type="number"
                    name="age"
                    onChange={this.changeHandler}
                    placeholder="Age"
                    value={this.state.friend.age}
                />
                <input
                    type="text"
                    name="email"
                    onChange={this.changeHandler}
                    placeholder="Email"
                    value={this.state.friend.email}
                />
                <button>Click!</button>
            </form>
        </div>
    )
}
};


export default FriendForm;