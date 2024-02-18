import React from "react";
import "./home-page.css";
import Slider from "../../components/carousel-slider/Slider";
import { Container } from "react-bootstrap";
import Categories from "../../components/Categories/Categories";

const HomePage = () => {
  return (
    <div className="home-page">
      {/* carousel */}
      <Container>
        <Slider />
        <Categories />
      </Container>
      {/* explore section */}
      {/* other branding sections */}
    </div>
  );
};

export default HomePage;
