import { Button, Typography, Alert } from "@mui/material";
import React, { useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const CartPage = () => {
  const [products, setProducts] = useState(true);
  return (
    <Container className="my-5" style={{ minHeight: "88vh" }}>
      <Row>
        <Col>
          <Link to="/">
            <Button
              startIcon={<ArrowBackIosNewIcon />}
              className="my-3"
              color="appleBlack"
              // variant="outlined"
            >
              Back to shopping
            </Button>
          </Link>
          <Typography variant="h4">Aapka shopping Cart 🛒</Typography>
          <Typography variant="h5">Items</Typography>
        </Col>
      </Row>
    </Container>
  );
};

export default CartPage;
