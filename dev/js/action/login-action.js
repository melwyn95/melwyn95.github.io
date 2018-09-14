import Events from "../tack/events";

const LoginAction = () => {

  return {

    loginButtonClicked: (oLoginInfo) => {
      return {
        type: Events.LOGIN_BUTTON_CLICKED,
        payload: oLoginInfo
      }
    }

  };

};

export default LoginAction;