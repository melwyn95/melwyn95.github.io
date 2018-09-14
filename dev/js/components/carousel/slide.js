import React, {Component} from "react";
import PropTypes from "prop-types";

class Slide extends Component{

  render() {
    let oSlide = this.props.data;

    return (<div className="slideContainer">
      <div className="slideContent">
        {oSlide.data}
      </div>
    </div>);
  }
}

Slide.propTypes = {
  data: PropTypes.object
};

export default Slide;