import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import CategoryCard from "./CategoryCard";

const categoryData = [
  {
    _id: 1,
    categoryImg:
      "https://flashplus.in/wp-content/uploads/2023/11/groceries-04.jpg",
    categoryName: "Pulses and Dals",
    categoryDescription:
      "Explore non-polished dals and pulses full of nutrition and fibre",
    categoryPageLink: "/Dals",
  },
  {
    _id: 2,
    categoryImg:
      "https://flashplus.in/wp-content/uploads/2023/11/groceries-03.jpg",
    categoryName: "Spices",
    categoryDescription:
      "Explore a world of flavor with our diverse range of aromatic spices, thoughtfully curated and conveniently categorized on platform",
    categoryPageLink: "/Masalas",
  },
  {
    _id: 3,
    categoryImg:
      "https://flashplus.in/wp-content/uploads/2023/11/groceries-02.jpg",
    categoryName: "Oils",
    categoryDescription:
      "Indulge in the finest selection of cooking oils curated for your kitchen needs at our online grocery store. From heart-healthy olive oils to versatile canola oils and exotic nut oils, explore our diverse range of premium cooking oils to elevate your culinary experience.",
    categoryPageLink: "/Oils",
  },
];

const Categories = () => {
  return (
    <Container className="py-4">
      <Row
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "24px",
        }}
      >
        {categoryData?.map((category) => (
          <Col key={category._id}>
            <CategoryCard
              pageLink={category.categoryPageLink.toString()}
              categoryImgPath={category.categoryImg.toString()}
              categoryName={category.categoryName.toString()}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Categories;
