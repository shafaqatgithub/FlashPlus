import React from 'react'
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import './ProductCard.css'


function Dals() {

  const products = [
    {
      id: 1,
      productimage: "https://flashplus.in/groceries/wp-content/uploads/sites/4/2023/08/BROWN-CHANA_400x400-300x300.jpg",
      productname: 'Brown Chana',
      productprice: '150'
    },
    {
      id: 2,
      productimage: "https://flashplus.in/groceries/wp-content/uploads/sites/4/2023/08/Chole_400x400.jpg",
      productname: 'Chole 1kg',
      productprice: '130.0'
    },
    {
      id: 3,
      productimage: "https://flashplus.in/groceries/wp-content/uploads/sites/4/2023/08/Green-peas_400x400-300x300.jpg",
      productname: 'Green peas 1kg',
      productprice: '80.00'
    }, {
      id: 4,
      productimage: "https://flashplus.in/groceries/wp-content/uploads/sites/4/2023/08/kabooli-chana_400x400-300x300.jpg",
      productname: 'Kabooli Chana 500g',
      productprice: '200.00'
    },
    {
      id: 5,
      productimage: "https://flashplus.in/groceries/wp-content/uploads/sites/4/2023/08/kala-chana_400x400.jpg",
      productname: 'Kala Chana 500g',
      productprice: '70.00'
    },
    {
      id: 6,
      productimage: "https://flashplus.in/groceries/wp-content/uploads/sites/4/2023/08/kulti_400x400-300x300.jpg",
      productname: 'Kulti 500g',
      productprice: '23.00'
    },
    {
      id: 7,
      productimage: "https://flashplus.in/groceries/wp-content/uploads/sites/4/2023/08/masoor-daal1_400x400-300x300.jpg",
      productname: 'Masoor Dal 1kg',
      productprice: '60.00'
    },
    {
      id: 8,
      productimage: "https://flashplus.in/groceries/wp-content/uploads/sites/4/2023/08/moong-daal_400x400-300x300.jpg",
      productname: 'Moong Dal 500g',
      productprice: '99.00'
    },
    {
      id: 9,
      productimage: "https://flashplus.in/groceries/wp-content/uploads/sites/4/2023/08/moth-beans_400x400-300x300.jpg",
      productname: 'Moth Beans 500g',
      productprice: '114.00'
    },
    {
      id: 10,
      productimage: "https://flashplus.in/groceries/wp-content/uploads/sites/4/2023/08/mung-beans-isolated-white-background-1_400x400-300x300.jpg",
      productname: 'Moong Beans 1kg',
      productprice: '150.00'
    },
    {
      id: 11,
      productimage: "https://flashplus.in/groceries/wp-content/uploads/sites/4/2023/08/muttor_400x400-300x300.jpg",
      productname: 'Muttor 1kg',
      productprice: '80.00'
    },
    {
      id: 12,
      productimage: "https://flashplus.in/groceries/wp-content/uploads/sites/4/2023/08/peanuts_400x400-300x300.jpg",
      productname: 'Peanuts 1kg',
      productprice: '80.00'
    },
    {
      id: 13,
      productimage: "https://flashplus.in/groceries/wp-content/uploads/sites/4/2023/08/rajma_400x400-300x300.jpg",
      productname: 'Rajma 500g',
      productprice: '96.00'
    },
    {
      id: 14,
      productimage: "https://flashplus.in/groceries/wp-content/uploads/sites/4/2023/08/soy-beans-white_400x400-300x300.jpg",
      productname: 'Soy Beans White 500g',
      productprice: '67.00'
    },
    {
      id: 15,
      productimage: "https://flashplus.in/groceries/wp-content/uploads/sites/4/2023/08/soybean-chunks-_400x400-300x300.jpg",
      productname: 'Soy beans Chunks',
      productprice: '150.00'
    },
    {
      id: 16,
      productimage: "https://flashplus.in/groceries/wp-content/uploads/sites/4/2023/08/toor-dal_400x400.jpg",
      productname: 'Toor Dal 2kg',
      productprice: '97.00'
    },
    {
      id: 17,
      productimage: "https://flashplus.in/groceries/wp-content/uploads/sites/4/2023/08/Urad-Dal_400x400-300x300.jpg",
      productname: 'Urad Dal 1kg',
      productprice: '150.00'
    },
  ]


  return (
    <>

      
        
        <div className='products'>
          {
            products.map((item) => {
              return (
                <ProductCard data={item} key={item.id} />
              )
            })
          }
        </div>
      



    </>
  )
}

export default Dals