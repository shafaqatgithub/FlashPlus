import React from "react";
import { Carousel } from "react-bootstrap";
import "./slider.css";

const Slider = () => {
  return (
    <div className="home-slider">
      <Carousel>
        <Carousel.Item>
          <img
            src="https://flashplus.in/wp-content/uploads/2023/11/Healthy-food.jpg"
            className="d-block w-100"
            alt="..."
          />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://flashplus.in/wp-content/uploads/2023/11/superoffer-slider.jpg"
            className="d-block w-100"
            alt="..."
          />
          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
