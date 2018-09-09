import React, {Component} from "react";
import PropTypes from "prop-types";

class Slide extends Component{


  render() {
    let oData = this.props.data;

    return (<div className="slideContainer" key={oData.id}>
      {oData.text}
    </div>);
  }
}

Slide.propTypes = {
  data: PropTypes.object
};

export default Slide;