import React from "react";
import { Button, Carousel, Modal } from "react-bootstrap";
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
    await dispatch(addItems({
      itemsCount: itemCount,
      items: [{
        ...props.product
      }]
    }))
  }
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
          <Carousel variant="dark">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/assets/products/model101.jfif"
                alt="First slide"
              />
              <Carousel.Caption>
                <h5>First slide label</h5>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/assets/products/model101.jfif"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/assets/products/model101.jfif"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h5>Third slide label</h5>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
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
      />
      <AddToCartModal
        show={addedModalShow}
        onHide={() => setAddedModalShow(false)}
      />
    </div>
  );
};

export default ProductCard;
