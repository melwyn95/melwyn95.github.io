import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import PropsTypes from "prop-types";

import Button from "@material-ui/core/Button";

import FinishButtonAction from "../action/finish-button-action";

class FinishButton extends Component {

  render() {
    let oStyle = {
      backgroundColor: "#f56009"
    };

    return (<div className="finishButtonContainer">
      <div className="finishButtonWrapper">
        <Button variant="contained"
                color="primary"
                style={oStyle}
                onClick={this.props.buttonClicked}>
          Finish
        </Button>
      </div>
    </div>);
  }

}

FinishButton.propTypes = {
  buttonClicked: PropsTypes.func
};

function mapActionToProps(dispatch) {
  return bindActionCreators({
    buttonClicked: FinishButtonAction().finishButtonClicked
  }, dispatch);
}

export default connect((state) => ({}), mapActionToProps)(FinishButton);