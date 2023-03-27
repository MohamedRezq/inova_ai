import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useAppSelector } from "../../redux/hooks";

const Cart = () => {
  const cartItems = useAppSelector((state) => state.cartItems);
  const priceFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <Container className="cart-page">
      <div className="cart-page-title">Shopping Cart</div>
      <Row className="cart-section">
        <Col className="cart-items">
          {cartItems.items.map((item, i) => (
            <Row key={i} className="cart-item-details">
              <Col className="cart-item-image">
                <img src="" alt="" />
              </Col>
              <Col className="cart-item-text">
                <div className="cart-item-title">Title</div>
                <div className="cart-item-summary">Summary</div>
              </Col>
              <Col className="cart-item-changeCount">
                <div className="product-card-count">
                  <button
                    className="items-count-btn"
                    onClick={() => {
                      //setItemCount(itemCount - 1);
                    }}
                  >
                    -
                  </button>
                  <div className="items-count">{item.cartCount}</div>
                  <button
                    className="items-count-btn"
                    onClick={() => {
                      //setItemCount(itemCount + 1);
                    }}
                  >
                    +
                  </button>
                </div>
              </Col>
              <Col className="cart-item-total-price">
                {priceFormatter.format(
                  item.cartCount * item.product.implementation_price
                )}
              </Col>
              <Col className="cart-item-delete">Delete</Col>
            </Row>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
