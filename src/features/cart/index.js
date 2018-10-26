import React from 'react';
import { connect } from 'react-redux';

function Cart(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Quantity</th>
          <th />
          <th />
        </tr>
      </thead>
      <tbody>
        {props.cart.map(item => {
          <tr>
            <td> {item.name}</td>
            <td> {item.quantity}</td>
            <td>
              <button onClick={e => props.addToCart()}>+</button>
            </td>
            <td>
              <button onClick={e => props.removeFromCart()}>-</button>
            </td>
          </tr>;
        })}
      </tbody>
    </table>
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
)(Cart);
