import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import "./product-card.css";
import { Container } from "react-bootstrap";
import { Button, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

function Dals() {
  const products = [
    {
      id: 1,
      productimage:
        "https://flashplus.in/groceries/wp-content/uploads/sites/4/2023/08/BROWN-CHANA_400x400-300x300.jpg",
      productname: "Brown Chana",
      productprice: 150,
    },
    {
      id: 2,
      productimage:
        "https://flashplus.in/groceries/wp-content/uploads/sites/4/2023/08/Chole_400x400.jpg",
      productname: "Chole 1kg",
      productprice: 130.0,
    },
    {
      id: 3,
      productimage:
        "https://flashplus.in/groceries/wp-content/uploads/sites/4/2023/08/Green-peas_400x400-300x300.jpg",
      productname: "Green peas 1kg",
      productprice: 80.0,
    },
    {
      id: 4,
      productimage:
        "https://flashplus.in/groceries/wp-content/uploads/sites/4/2023/08/kabooli-chana_400x400-300x300.jpg",
      productname: "Kabooli Chana 500g",
      productprice: 200.0,
    },
    {
      id: 5,
      productimage:
        "https://flashplus.in/groceries/wp-content/uploads/sites/4/2023/08/kala-chana_400x400.jpg",
      productname: "Kala Chana 500g",
      productprice: 70.0,
    },
    {
      id: 6,
      productimage:
        "https://flashplus.in/groceries/wp-content/uploads/sites/4/2023/08/kulti_400x400-300x300.jpg",
      productname: "Kulti 500g",
      productprice: 23.0,
    },
    {
      id: 7,
      productimage:
        "https://flashplus.in/groceries/wp-content/uploads/sites/4/2023/08/masoor-daal1_400x400-300x300.jpg",
      productname: "Masoor Dal 1kg",
      productprice: 60.0,
    },
    {
      id: 8,
      productimage:
        "https://flashplus.in/groceries/wp-content/uploads/sites/4/2023/08/moong-daal_400x400-300x300.jpg",
      productname: "Moong Dal 500g",
      productprice: 99.0,
    },
    {
      id: 9,
      productimage:
        "https://flashplus.in/groceries/wp-content/uploads/sites/4/2023/08/moth-beans_400x400-300x300.jpg",
      productname: "Moth Beans 500g",
      productprice: 114.0,
    },
    {
      id: 10,
      productimage:
        "https://flashplus.in/groceries/wp-content/uploads/sites/4/2023/08/mung-beans-isolated-white-background-1_400x400-300x300.jpg",
      productname: "Moong Beans 1kg",
      productprice: 150.0,
    },
    {
      id: 11,
      productimage:
        "https://flashplus.in/groceries/wp-content/uploads/sites/4/2023/08/muttor_400x400-300x300.jpg",
      productname: "Muttor 1kg",
      productprice: 80.0,
    },
    {
      id: 12,
      productimage:
        "https://flashplus.in/groceries/wp-content/uploads/sites/4/2023/08/peanuts_400x400-300x300.jpg",
      productname: "Peanuts 1kg",
      productprice: 80.0,
    },
    {
      id: 13,
      productimage:
        "https://flashplus.in/groceries/wp-content/uploads/sites/4/2023/08/rajma_400x400-300x300.jpg",
      productname: "Rajma 500g",
      productprice: 96.0,
    },
    {
      id: 14,
      productimage:
        "https://flashplus.in/groceries/wp-content/uploads/sites/4/2023/08/soy-beans-white_400x400-300x300.jpg",
      productname: "Soy Beans White 500g",
      productprice: 67.0,
    },
    {
      id: 15,
      productimage:
        "https://flashplus.in/groceries/wp-content/uploads/sites/4/2023/08/soybean-chunks-_400x400-300x300.jpg",
      productname: "Soy beans Chunks",
      productprice: 150.0,
    },
    {
      id: 16,
      productimage:
        "https://flashplus.in/groceries/wp-content/uploads/sites/4/2023/08/toor-dal_400x400.jpg",
      productname: "Toor Dal 2kg",
      productprice: 97.0,
    },
    {
      id: 17,
      productimage:
        "https://flashplus.in/groceries/wp-content/uploads/sites/4/2023/08/Urad-Dal_400x400-300x300.jpg",
      productname: "Urad Dal 1kg",
      productprice: 150.0,
    },
  ];

  return (
    <>
      <Container className="pb-5">
        <header>
          <Link to="/">
            <Button
              startIcon={<ArrowBackIosNewIcon />}
              className="my-3"
              color="appleBlack"
              // variant="outlined"
            >
              Back
            </Button>
          </Link>
          <Typography variant="h4">Dals & Pulses</Typography>
        </header>
      </Container>
      <Container
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "24px",
        }}
      >
        {products?.map((item) => {
          return (
            <ProductCard
              key={item?.id}
              productImage={item?.productimage}
              productName={item?.productname}
              productPrice={item?.productprice}
            />
          );
        })}
      </Container>
      <Container
        className="p-5 my-5"
        style={{
          backgroundColor: "#ED1D24",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderRadius: "16px",
        }}
      >
        <Typography color="white" variant="h6">
          Explore fragrant, flavour enhancing spices & Masala Mixes
        </Typography>
        <Link>
          <Button variant="contained" disableElevation color="white">
            Explore Spices
          </Button>
        </Link>
      </Container>
    </>
  );
}

export default Dals;
