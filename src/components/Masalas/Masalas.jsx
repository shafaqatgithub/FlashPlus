import React from 'react'

import ProductCard from '../Dals/ProductCard'


export default function Masalas() {
  const products = [
    {
      id: 1,
      productimage: "https://flashplus.in/groceries/wp-content/uploads/sites/4/2023/08/ajwain_400x400-300x300.jpg",
      productname: 'Ajwain',
      productprice: '75.00'
    },
    {
      id: 2,
      productimage: "https://flashplus.in/groceries/wp-content/uploads/sites/4/2023/08/assafoetida-hing_400x400-300x300.jpg",
      productname: 'Assafoetida or Hing',
      productprice: '59.00'
    },
    {
      id: 3,
      productimage: "https://flashplus.in/groceries/wp-content/uploads/sites/4/2023/08/badi-saunf_400x400-300x300.jpg",
      productname: 'Badi Saunf 50g',
      productprice: '76.00'
    },
    {
      id: 4,
      productimage: "https://flashplus.in/groceries/wp-content/uploads/sites/4/2023/08/bay-leaf-isolated-white-background_400x400-300x300.jpg",
      productname: 'Bay Leaf',
      productprice: '130.00'
    },
    {
      id: 5,
      productimage: "https://flashplus.in/groceries/wp-content/uploads/sites/4/2023/08/cardamom-_400x400-300x300.jpg",
      productname: 'Cardamom 250g',
      productprice: '50.00'
    },
    {
      id: 6,
      productimage: "https://flashplus.in/groceries/wp-content/uploads/sites/4/2023/08/chia-seeds-wooden-bowl_400x400-300x300.jpg",
      productname: 'Chai Seeds 250g',
      productprice: '50.00'
    },
    {
      id: 7,
      productimage: "https://flashplus.in/groceries/wp-content/uploads/sites/4/2023/08/chilli-powder_400x400-300x300.jpg",
      productname: 'Chilli Powder 500g',
      productprice: '125.00'
    },
    {
      id: 8,
      productimage: "https://flashplus.in/groceries/wp-content/uploads/sites/4/2023/08/cinnamon_400x400-300x300.jpg",
      productname: 'Cinnamon 250g',
      productprice: '170.00'
    },
    {
      id: 9,
      productimage: "https://flashplus.in/groceries/wp-content/uploads/sites/4/2023/08/Cloves_400x400-300x300.jpg",
      productname: 'Cloves 100g',
      productprice: '90.00'
    },
    {
      id: 10,
      productimage: "https://flashplus.in/groceries/wp-content/uploads/sites/4/2023/08/coriander-powdered-_400x400-300x300.jpg",
      productname: 'Coriander Powder 500g',
      productprice: '100.00'
    },
    {
      id: 11,
      productimage: "https://flashplus.in/groceries/wp-content/uploads/sites/4/2023/08/coriander-seed_400x400-300x300.jpg",
      productname: 'Coriander Seeds 500g',
      productprice: '150.00'
    },
    {
      id: 12,
      productimage: "https://flashplus.in/groceries/wp-content/uploads/sites/4/2023/08/fenugreek-seeds-brown-ceramic-bowl-isolated-white-background_400x400-300x300.jpg",
      productname: 'Fenugreek Seeds 500g',
      productprice: '40.00'
    },
    {
      id: 13,
      productimage: "https://flashplus.in/groceries/wp-content/uploads/sites/4/2023/08/ginger-garlic-paste-_400x400-300x300.jpg",
      productname: 'Ginger Garlic Paste 250g',
      productprice: '33.00'
    },
    {
      id: 14,
      productimage: "https://flashplus.in/groceries/wp-content/uploads/sites/4/2023/08/green-ilachi-cardamom_400x400-300x300.jpg",
      productname: 'Green Ilaichi cardamom 100g',
      productprice: '100.00'
    },
    {
      id: 15,
      productimage: "https://flashplus.in/groceries/wp-content/uploads/sites/4/2023/08/jeera_400x400-300x300.jpg",
      productname: 'Jeera 250g',
      productprice: '150.00'
    },
    {
      id: 16,
      productimage: "https://flashplus.in/groceries/wp-content/uploads/sites/4/2023/08/kalonji_400x400-300x300.jpg",
      productname: 'Kalonji 100g',
      productprice: '47.00'
    },
    {
      id: 17,
      productimage: "https://flashplus.in/groceries/wp-content/uploads/sites/4/2023/08/kasuri-methi-fenogreek-dried_400x400-300x300.jpg",
      productname: 'Kasuri Methi Fenogreek Dried 200g',
      productprice: '125.00'
    },
    {
      id: 18,
      productimage: "https://flashplus.in/groceries/wp-content/uploads/sites/4/2023/08/mustard_400x400-300x300.jpg",
      productname: 'Mustard 500g',
      productprice: '60.00'
    },
    {
      id: 19,
      productimage: "https://flashplus.in/groceries/wp-content/uploads/sites/4/2023/08/peppercorn-wood-bowl_400x400-300x300.jpg",
      productname: 'Pepprecorn 250g',
      productprice: '60.00'
    },
    {
      id: 20,
      productimage: "https://flashplus.in/groceries/wp-content/uploads/sites/4/2023/08/red-chilli-powder-_400x400-300x300.jpg",
      productname: 'Red Chilli Powder 1kg',
      productprice: '140.00'
    },
    {
      id: 21,
      productimage: "https://flashplus.in/groceries/wp-content/uploads/sites/4/2023/08/saffron-isolated-white-background-natural-dry-saffron-threads-from-crocus-flowers-clipping-path_400x400-300x300.jpg",
      productname: 'Saffron ',
      productprice: '750'
    },
    {
      id: 22,
      productimage: "https://flashplus.in/groceries/wp-content/uploads/sites/4/2023/08/turmeric-root-turmeric-powder_400x400-300x300.jpg",
      productname: 'Turmeric Root Turmeric powder 500g',
      productprice: '114.00'
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
