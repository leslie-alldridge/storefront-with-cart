import React from 'react';
import ProductListing from '../features/product-listing';

import data from '../data/products.json';

export default function Home(props) {
  return (
    <div>
      <h2>Home</h2>
      <ProductListing products={data.products} />
    </div>
  );
}
