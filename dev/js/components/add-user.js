import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import UserAction from "../action/user-action";

class AddUser extends Component{

  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  showForm() {
    this.setState({active: !this.state.active});
  }

  addButtonClicked() {
    let name = this.name.value;
    let description = this.description.value;
    this.props.addUser({name: name, description: description});
  }

  getForm() {
    return <div>
      Name: <input ref={(node) => {this.name = node}}/>
      Description: <input ref={(node) => {this.description = node}}/>
      <button onClick={this.addButtonClicked.bind(this)}>Add</button>
    </div>;
  }

  render () {

    return (
      <div>
        <div onClick={this.showForm.bind(this)}>AddUser</div>
        {this.state.active ? this.getForm() : null}
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {};
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({addUser: UserAction().addUser}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(AddUser);