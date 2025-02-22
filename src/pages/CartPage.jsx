import React from "react";
import { useCart } from "../context/CartContext";
import { Container, ListGroup, Button } from "react-bootstrap";

const CartPage = () => {
  const { cart } = useCart();

  return (
    <Container className="mt-4">
      <h2>Your Cart</h2>
      <ListGroup>
        {cart.length > 0 ? (
          cart.map((item, index) => (
            <ListGroup.Item key={index}>
              {item.title} - ${item.price}
            </ListGroup.Item>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </ListGroup>
    </Container>
  );
};

export default CartPage;
