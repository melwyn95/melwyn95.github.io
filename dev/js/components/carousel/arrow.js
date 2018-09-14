import React, {Component} from "react";
import PropTypes from "prop-types";
import CommonConstants from "../../tack/common-constants";

import classNames from "classNames";
import Button from "@material-ui/core/Button";
import {withStyles} from "@material-ui/core";

const styles = {
  root: {
    borderRadius: "50%",
    height: 50,
    width: 50,
    minHeight: "20px !important",
    minWidth: "20px !important",
    padding: "0 !important"
  },
};

class Arrow extends Component {

  getArrowClassName() {
    let sArrowClassName = "";

    switch (this.props.arrowDirection) {
      case CommonConstants.ARROW_LEFT:
        sArrowClassName += " arrowLeft";
        break;
      case CommonConstants.ARROW_RIGHT:
        sArrowClassName += " arrowRight";
        break;
    }

    return sArrowClassName;
  }

  render() {
    const { classes, children, className } = this.props;
    let sArrowClassName = this.getArrowClassName();

    return (<div className={"arrowContainer" + sArrowClassName} onClick={this.props.clickHandler}>
        <Button variant="fab"
                size="small"
                className={classNames(classes.root, className)}>
          <div className={"buttonImage" + sArrowClassName}></div>
        </Button>
      </div>
    );
  }

}

Arrow.propTypes = {
  clickHandler: PropTypes.func,
  arrowDirection: PropTypes.string
};

export default withStyles(styles)(Arrow);