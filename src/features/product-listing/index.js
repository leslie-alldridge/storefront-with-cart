import React from 'react';
import { connect } from 'react-redux';
import ProductListItem from './ProductListItem';
import { cartItemsWithQuantity } from '../cart';

function ProductListing(props) {
  return (
    <div className="product-listing">
      {props.products.map(product => (
        <ProductListItem
          product={product}
          addToCart={props.addToCart}
          cart={cartItemsWithQuantity(props.cart)}
        />
      ))}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: item => {
      dispatch({ type: 'ADD', payload: item });
    },
    removeFromCart: item => {
      dispatch({ type: 'REMOVE', payload: item });
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductListing);
