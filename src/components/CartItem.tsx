import React from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { CartItemType } from "../types";
import { editItemsCount, removeItems } from "../redux/slices/cartSlice";

const CartItem = (props: { item: CartItemType }) => {
  const dispatch = useDispatch();
  const [itemCount, setItemCount] = React.useState(props.item.cartCount);
  const priceFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <Row className="cart-item-details">
      <Col className="cart-item-image">
        <img
          src={`/assets/products/${props.item.product.preview_media}`}
          alt={props.item.product.title}
        />
      </Col>
      <Col className="cart-item-text">
        <div className="cart-item-title">{props.item.product.title}</div>
        <div className="cart-item-summary">{props.item.product.summary}</div>
      </Col>
      <Col className="cart-item-changeCount">
        <div className="product-card-count">
          <button
            className="items-count-btn"
            onClick={() => {
              dispatch(editItemsCount({
                cartCount: itemCount-1,
                product: props.item.product,
              }));
              setItemCount(itemCount - 1);
            }}
          >
            -
          </button>
          <div className="items-count">{itemCount}</div>
          <button
            className="items-count-btn"
            onClick={() => {
              dispatch(editItemsCount({
                cartCount: itemCount+1,
                product: props.item.product,
              }));
              setItemCount(itemCount + 1);
            }}
          >
            +
          </button>
        </div>
      </Col>
      <Col className="cart-item-total-price">
        {priceFormatter.format(
          props.item.cartCount * props.item.product.implementation_price
        )}
      </Col>
      <Col
        className="cart-item-delete"
        onClick={() => {
          dispatch(removeItems(props.item.product.model_id));
        }}
      >
        Delete
      </Col>
    </Row>
  );
};

export default CartItem;
