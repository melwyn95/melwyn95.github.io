import React, {Component} from "react";
import {connect} from "react-redux";

import  AppContainer from "./app-container";
import LoginPage from "../components/login-page";

require("../../scss/style.scss");

class LoginContainer extends Component{


  render() {
    let bIsUserLoggedIn = this.props.loginStatus.isUserLoggedIn;
    let oView = <LoginPage />;
    if (bIsUserLoggedIn) {
      oView = <AppContainer />
    }

    return oView;
  }
}

function mapStateToProps(state) {
  return {
    loginStatus: state.loginStatus
  }
}

export default connect(mapStateToProps)(LoginContainer);