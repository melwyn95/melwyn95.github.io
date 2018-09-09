import React, {Component} from "react";
import PropTypes from "prop-types";
import Slide from "./slide";
import Arrow from "./arrow";
import CommonConstants from "../../tack/common-constants";

import {connect} from "react-redux";

class Slider extends Component {

  constructor(props) {
    super(props);
    this.state = {
      translateX: 0
    };
  }

  moveSlideLeft() {
    let iOldTranslateX = this.state.translateX;
    let iNewTranslateX = iOldTranslateX - this.getClientWidth();

    this.setState({translateX: iNewTranslateX});
  }

  moveSlidesRight() {
    let iOldTranslateX = this.state.translateX;
    let iNewTranslateX = iOldTranslateX + this.getClientWidth();

    this.setState({translateX: iNewTranslateX});
  }

  getStyleForSlidesWrapper() {
    return {
      transform: `translateX(${this.state.translateX}px)`,
      transition: 'transform ease-out 0.45s'
    };
  }

  getClientWidth() {
    return this.slidesWrapper.clientWidth;
  }

  getSlideViews(aSlides) {
    return aSlides.map((oSlide) => {
      return (<Slide data={oSlide}/>);
    });
  }

  render () {
    let aSlides = this.props.slides;
    let oStyleForSlidesWrapper = this.getStyleForSlidesWrapper();

    return (<div className="sliderContainer">
        <div className="sliderSlideWrapper" ref={(node) => {this.slidesWrapper = node}} style={oStyleForSlidesWrapper}>
          <Arrow arrowDirection={CommonConstants.ARROW_LEFT} clickHandler={this.moveSlideLeft.bind(this)}/>
          {this.getSlideViews(aSlides)}
          <Arrow arrowDirection={CommonConstants.ARROW_RIGHT} clickHandler={this.moveSlidesRight.bind(this)}/>
        </div>
    </div>);
  }

}

function mapStateToProps(state) {
  return {
    slides: state.slides
  }
};

Slider.propTypes = {
  slides: PropTypes.array
};

export default connect(mapStateToProps)(Slider);