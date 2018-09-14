import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import PropTypes from "prop-types";

import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import LoginAction from "../action/login-action";

const oPaperStyle = {
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "column",
  width: "35%",
  margin: "auto",
  padding: "10px",
  position: "absolute",
  height: "28%",
  top: "0",
  bottom: "0",
  left: "0",
  right: "0",
  overflow: "auto"
};

const oTextFieldStyle = {
  width: "100%",
  margin: "8px"
};

const oButtonStyle = {
  backgroundColor: "#f56009",
  margin: "5px 0",
  width: "35%"
};

class LoginPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: ""
    };
  }

  handleTextFieldChange (key, event) {
    this.setState({
      [key]: event.target.value
    });
  }

  loginButtonClicked () {
    this.props.loginButtonClicked(this.state);
  }

  render () {
    return (<Paper square={true} elevation={2} style={oPaperStyle}>
      <div className="userNameContainer">
        <TextField margin="normal"
                   label="Username"
                   style={oTextFieldStyle}
                   onChange={this.handleTextFieldChange.bind(this, "userName")}/>
      </div>
      <div className="passwordContainer">
        <TextField margin="normal"
                   type="password"
                   label="Password"
                   style={oTextFieldStyle}
                   onChange={this.handleTextFieldChange.bind(this, "password")}/>
      </div>
      <div className="loginButton">
        <Button variant="contained"
                color="primary"
                style={oButtonStyle}
                onClick={this.loginButtonClicked.bind(this)}>
          Login
        </Button>
      </div>
    </Paper>)
  }

}

LoginPage.propTypes = {
  loginButtonClicked: PropTypes.func
};

function mapActionToProps(dispatch) {
  return bindActionCreators({
    loginButtonClicked: LoginAction().loginButtonClicked
  }, dispatch);
}

export default connect(() => ({}), mapActionToProps)(LoginPage);