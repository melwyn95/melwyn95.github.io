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
    this.SLIDE_WIDTH = 240;
  }

  componentWillReceiveProps (nextProps, nextState) {
    if (this.props.slides.length !== nextProps.slides.length) {
      this.setState({translateX: 0});
    }
  }

  moveSlideLeft() {
    let iOldTranslateX = this.state.translateX;
    let iNewTranslateX = iOldTranslateX - (this.SLIDE_WIDTH);

    if (iNewTranslateX > -this.getClientWidth() && this.getShouldAllowSlide()) {
      this.setState({translateX: iNewTranslateX});
    }
  }

  moveSlidesRight() {
    let iOldTranslateX = this.state.translateX;
    let iNewTranslateX = iOldTranslateX + (this.SLIDE_WIDTH);

    if (iNewTranslateX <= 0 && this.getShouldAllowSlide()) {
      this.setState({translateX: iNewTranslateX});
    }
  }

  getStyleForSlidesWrapper(iNumberOfSlides) {
    let iWidth = iNumberOfSlides * this.SLIDE_WIDTH;
    return {
      transform: `translateX(${this.state.translateX}px)`,
      transition: 'transform ease-out 0.45s',
      width: iWidth
    };
  }

  getSlideViews(aSlides) {
    return aSlides.map((oSlide, iIndex) => {
      return (<Slide key={iIndex} data={oSlide}/>);
    });
  }

  getClientWidth () {
    return this.slidesWrapper.clientWidth - this.sliderContainer.clientWidth + this.SLIDE_WIDTH;
  }

  getShouldAllowSlide() {
    return this.slidesWrapper.clientWidth > this.sliderContainer.clientWidth;
  }

  render () {
    let aSlides = this.props.slides;
    let iNumberOfSlides = aSlides.length;
    let oStyleForSlidesWrapper = this.getStyleForSlidesWrapper(iNumberOfSlides);

    return (<div className="sliderContainer" ref={(node) => {this.sliderContainer = node}}>
      <Arrow arrowDirection={CommonConstants.ARROW_LEFT} clickHandler={this.moveSlidesRight.bind(this)}/>
        <div className="sliderSlideWrapper" ref={(node) => {this.slidesWrapper = node}} style={oStyleForSlidesWrapper}>
          {this.getSlideViews(aSlides)}
        </div>
      <Arrow arrowDirection={CommonConstants.ARROW_RIGHT} clickHandler={this.moveSlideLeft.bind(this)}/>
    </div>);
  }

}

function mapStateToProps(state) {
  return {
    slides: state.slides
  }
}

Slider.propTypes = {
  slides: PropTypes.array
};

export default connect(mapStateToProps)(Slider);