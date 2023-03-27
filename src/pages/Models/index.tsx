import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "../../components/ProductCard/ProductCard";
import products from './../../db/Product Content/product.json';

const Models = () => {
  return (
    <div className="models-page">
      <div className="page-header">
        <Container>
        <div className="page-title">Best Models 2023</div>
        </Container>
      </div>
      <Container className="models-container">
      <Row>
        {products.map((product, i) => (
          <Col key={i} xs={12} md={6} lg={4} xl={3}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
    </div>
  );
};

export default Models;
