import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import UserActions from "../action/user-action";

class ActiveUserDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {update: false}
  }

  changeState() {
    this.setState({update: !this.state.update});
  }

  showUserDetails() {
    return (<div>
      <div>UserName: {this.props.user.name}</div>
      <div>Description: {this.props.user.description}</div>
    </div>);
  }

  update() {
    let id = this.props.user.id;
    let name = this.name.value;
    let description = this.description.value;
    let updatedUser = {id: id, name: name, description: description};
    this.setState({update: false});
    this.props.userClicked(updatedUser);
    this.props.updateUserFunction(updatedUser);
  }

  componentDidUpdate() {
    if (this.props.user && this.name && this.description) {
      this.name.value = this.props.user.name;
      this.description.value = this.props.user.description;
    }
  }

  updateUser() {
    return (<div>
      <input onChange={this.change} ref={(node) => {this.name = node}}/>
      <input onChange={this.change} ref={(node) => {this.description = node}}/>
      <button onClick={this.update.bind(this)}>Update</button>
    </div>);
  }

  render() {
    if (!this.props.user) {
      return <div>Select a User...</div>
    }
    return <div>
      <div onClick={this.changeState.bind(this)}>Update User</div>
      {this.state.update ?
        this.updateUser() :
      this.showUserDetails()}</div>;
  }


};

function mapStateToProps(state) {
  return {
    user: state.activeUser
  }
}

function matchActionToProps(dispatch) {
  return bindActionCreators({updateUserFunction: UserActions().updateUser, userClicked: UserActions().userClicked}, dispatch);
}

export default connect(mapStateToProps, matchActionToProps)(ActiveUserDetails);