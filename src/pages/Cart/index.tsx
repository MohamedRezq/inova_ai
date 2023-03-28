import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartItem from "../../components/CartItem";
import { useAppSelector } from "../../redux/hooks";

const Cart = () => {
  const [total, setTotal] = React.useState(0);
  const [shipping, setShipping] = React.useState(1000);
  const [promo, setPromo] = React.useState(0);
  const cartItems = useAppSelector((state) => state.cartItems);
  const priceFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  useEffect(() => {
    
  }, [cartItems])
  
  return (
    <Container className="cart-page">
      <div className="cart-page-title">Shopping Cart</div>
      <Row className="cart-section">
        <Col xs={12} lg={8} className="cart-items">
          {cartItems.items.map((item, i) => (
            <CartItem key={i} item={item} />
          ))}
        </Col>
        <Col xs={12} lg={4} className="checkout-bar">
          <div className="order-details">Order Details</div>
          <div className="amount-title">Subtotal</div>
          <div className="amount-value">
            {priceFormatter.format(cartItems.subTotal)}
          </div>
          <div className="amount-title">Shipping</div>
          <div className="amount-value">{priceFormatter.format(shipping)}</div>
          <div className="amount-title">Enter Promo Code</div>
          <input type="text" className="promo-code-input" />
          <div id="total-price">Total Price</div>
          <div id="total-price-value">
            {priceFormatter.format(cartItems.subTotal + shipping - promo)}
          </div>
          <Link to='/checkout'><button className="checkout-btn">CHECKOUT</button></Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
