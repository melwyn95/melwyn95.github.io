import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import UserAction from "../action/user-action"

class UserList extends Component {

  getUsers() {
    return this.props.users.map((user) => {
      return <li key={user.id}>
        <div onClick={this.props.userSelected.bind(this, user)}>{user.name}</div>
        <div onClick={this.props.deleteUser.bind(this, user)}>Delete</div>
      </li>;
    });
  }

  render() {
    return (
      <ul>
        {this.getUsers()}
      </ul>
    );
  }

}

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

function matchActionToState(dispatch) {
  return bindActionCreators({
    userSelected: UserAction().userClicked,
    deleteUser: UserAction().deleteUser
  }, dispatch);
}

export default connect(mapStateToProps, matchActionToState)(UserList);