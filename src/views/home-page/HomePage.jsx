import React from "react";
import "./home-page.css";
import Slider from "../../components/carousel-slider/Slider";
import { Container } from "react-bootstrap";

const HomePage = () => {
  return (
    <div className="home-page">
      {/* carousel */}
      <Container>
        <Slider />
      </Container>
      {/* explore section */}
      {/* other branding sections */}
    </div>
  );
};

export default HomePage;
