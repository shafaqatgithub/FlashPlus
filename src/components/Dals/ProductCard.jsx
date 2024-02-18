import React from "react";
import "./product-card.css";
import { Link } from "react-router-dom";
import AddToCart from "../AddToCart/AddToCart";
import { propTypes } from "react-bootstrap/esm/Image";
import { Button, Typography } from "@mui/material";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";

const ProductCard = ({ productImage, productName, productPrice }) => {
  return (
    <div className="product">
      <img src={productImage} alt={"no image"} />
      <div className="s2">
        <Typography variant="h6">{productName}</Typography>
        <Typography variant="h5">Rs. {productPrice}</Typography>
      </div>
      <Button endIcon={<AddShoppingCartOutlinedIcon />} color="success">
        Add to Cart
      </Button>
    </div>
  );
};

ProductCard.propTypes = {
  productImage: propTypes.string,
  productName: propTypes.string,
  productPrice: propTypes.number,
};

export default ProductCard;
