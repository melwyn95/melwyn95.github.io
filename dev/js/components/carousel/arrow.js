import React, {Component} from "react";
import PropTypes from "prop-types";
import CommonConstants from "../../tack/common-constants";
import _ from "lodash";

class Arrow extends Component {

  getArrowFromArrowDirection() {
    let oArrowDOM = null;
    let sArrowClassName = "";

    switch (this.props.arrowDirection) {
      case CommonConstants.ARROW_LEFT:
        sArrowClassName = "arrowLeft";
        break;
      case CommonConstants.ARROW_RIGHT:
        sArrowClassName = "arrowRight";
        break;
    }

    if (!_.isEmpty(sArrowClassName)) {
      oArrowDOM = (<div className={sArrowClassName}>asdasdasdasd</div>);
    }

    return oArrowDOM;
  }

  render() {
    let oArrowDOM = this.getArrowFromArrowDirection();

    return (<div className="arrowContainer" onClick={this.props.clickHandler}>
        {oArrowDOM}
      </div>
    );
  }

}

Arrow.propTypes = {
  clickHandler: PropTypes.func,
  arrowDirection: PropTypes.string
};

export default Arrow;