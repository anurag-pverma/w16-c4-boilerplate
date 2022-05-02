import React, { useEffect, useState } from 'react';

import { Select, Grid } from './Styled';

const Products = () => {
  const [data, setData] = useState([]);
  

  useEffect(() => {
    // fetch ProductsData using redux-thunk on every mount
    const getData = async () => {
      const res = await fetch(
        'https://movie-fake-server.herokuapp.com/products'
      );
      const data = await res.json();

      setData(data);
    };
    getData();
  }, []);

   const priceLowToHigh = () => {
      let newData = data.sort((a, b) => {
        return +a.price - +b.price;
      });
      setData([...newData]);
    };
    const priceHighToLow = () => {
      let newData = data.sort((a, b) => {
        return +b.price - +a.price;
      });
      setData([...newData]);
    };

  const handleSort = (e) => {
  
    // dispatch sort products on change
   
  };
  return (
    <>
      <h2>Products</h2>
      <Select data-testid='product-sort-order' onChange={handleSort}>
        <option>Sort by--</option>
        <option value='asc' onClick={priceLowToHigh}>
          Low to High
        </option>
        <option value='desc' onClick={priceHighToLow}>
          High to Low
        </option>
      </Select>
      <Grid data-testid='products-container'>
        {/* iterate data and show each POroduct card */}
        {data.map((item) => {
          const { id, brand, title, image, price, category } = item;
          return (
            <div key={id}>
              <img src={image} /> <h3>{brand}</h3> <h3>{title}</h3>
              <h3>{price}</h3>
              <h3>{category}</h3>
            </div>
          );
        })}
      </Grid>
    </>
  );
};

export default Products;
