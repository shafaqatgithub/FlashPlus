import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import PropTypes from "prop-types";

const CategoryCard = ({ categoryImgPath, pageLink, categoryName }) => {
  return (
    <Link to={pageLink}>
      <Card style={{ width: "100%", display: "block" }} className="p-0">
        <Card.Img variant="top" src={categoryImgPath} />
        <Card.Body>
          <Button
            // style={{ width: "100%", textAlign: "left" }}
            variant="contained"
            color="primary"
            disableElevation
          >{`explore ${categoryName}`}</Button>
        </Card.Body>
      </Card>
    </Link>
  );
};

CategoryCard.propTypes = {
  categoryImgPath: PropTypes.string,
  pageLink: PropTypes.string,
  categoryName: PropTypes.string,
};

export default CategoryCard;
