import React from "react";
import { Button, Carousel, Col, Modal, Row } from "react-bootstrap";
import { Cart } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { ProductType } from "../../types";
import Rating from "../Rating/Rating";
import { addItems } from "../../redux/slices/cartSlice";
const ProductCard = (props: { product: ProductType }) => {
  const [previewModalShow, setPreviewModalShow] = React.useState(false);
  const [addedModalShow, setAddedModalShow] = React.useState(false);
  const [itemCount, setItemCount] = React.useState(1);
  const dispatch = useDispatch();
  const priceFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  const addItemsToCart = async () => {
    await dispatch(
      addItems({
        cartCount: itemCount,
        product: props.product,
      })
    );
  };
  //////////
  function PreviewModal(props: any) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col xs={12} lg={8}>
              <Carousel variant="dark">
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={`/assets/products/${props.product.preview_media}`}
                    alt={props.product.title}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={`/assets/products/${props.product.preview_media}`}
                    alt={props.product.title}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={`/assets/products/${props.product.preview_media}`}
                    alt={props.product.title}
                  />
                </Carousel.Item>
              </Carousel>
            </Col>
            <Col xs={12} lg={4} className='modal-product-info'>
              <div className="modal-product-title">{props.product.title}</div>
              <div className="product-card-rating">
                <Rating count={5} value={4} edit={false} />
              </div>
              <div className="modal-product-price">
                {priceFormatter.format(props.product.implementation_price)}
              </div>
              <div className="modal-product-description">
                {props.product.description}
              </div>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  function AddToCartModal(props: any) {
    return (
      <Modal
        {...props}
        className="added-to-cart-modal"
        size="sm"
        aria-labelledby="contained-modal-added-to-cart"
      >
        Added {itemCount} item(s) to Cart
      </Modal>
    );
  }
  //////////
  return (
    <div className="product-card-container">
      <div
        className="product-card-image-container"
        onClick={() => setPreviewModalShow(true)}
      >
        <div className="product-card-img-overlay">Preview</div>
        <img
          src={`/assets/products/${props.product.preview_media}`}
          alt={props.product.title}
          className="product-card-img"
        />
      </div>
      <div className="product-card-title">{props.product.title}</div>
      <div className="product-container-price-bar">
        <div className="product-card-price">
          {priceFormatter.format(props.product.implementation_price)}
        </div>
        <div className="product-card-rating">
          <Rating count={5} value={4} edit={false} />
        </div>
      </div>
      <div className="product-card-description">{props.product.summary}</div>
      <div className="product-card-footer">
        <button
          className="product-card-addToCard"
          onClick={() => {
            addItemsToCart();
            setAddedModalShow(true);
            setTimeout(() => {
              setAddedModalShow(false);
            }, 3000);
          }}
        >
          <Cart /> Add to Cart
        </button>
        <div className="product-card-count">
          <button
            className="items-count-btn"
            onClick={() => {
              setItemCount(itemCount - 1);
            }}
          >
            -
          </button>
          <div className="items-count">{itemCount}</div>
          <button
            className="items-count-btn"
            onClick={() => {
              setItemCount(itemCount + 1);
            }}
          >
            +
          </button>
        </div>
      </div>

      <PreviewModal
        show={previewModalShow}
        onHide={() => setPreviewModalShow(false)}
        product={props.product}
      />
      <AddToCartModal
        show={addedModalShow}
        onHide={() => setAddedModalShow(false)}
      />
    </div>
  );
};

export default ProductCard;
