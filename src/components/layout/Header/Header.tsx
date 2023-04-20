import React from "react";
import { Dropdown } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Cart2, Person } from "react-bootstrap-icons";
import { useAppSelector } from "../../../redux/hooks";

const CustomToggle = React.forwardRef<any, any>(
  ({ children, onClick }, ref) => (
    <div
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      style={{ marginLeft: "10px" }}
      id="profile-icon"
    >
      {children}
    </div>
  )
);

const Header = () => {
  const cartItems = useAppSelector((state) => state.cartItems);
  return (
    <Navbar expand="md" id="navbar-container">
      <Container>
        <Navbar.Brand href="/">
          <img src="/assets/inovaai.png" className="logo-img" alt="INOVA-AI" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-$'md'`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-$'md'`}
          aria-labelledby={`offcanvasNavbarLabel-expand-$'md'`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <img
              src="/assets/inovaai.png"
              className="logo-img"
              alt="INOVA-AI"
            />
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="search..."
                className="me-2"
                aria-label="Search"
                size="sm"
              />
              <Button size="sm" id="search-btn">
                Search
              </Button>
            </Form>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="/invest">Invest</Nav.Link>
              <Nav.Link href="/models?page=1">Models</Nav.Link>
              <Dropdown align="end" className="header-links">
                <Dropdown.Toggle as={Container} id="dropdown-categories">
                  Categories
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/categories/sports">
                    Sports
                  </Dropdown.Item>
                  <Dropdown.Item href="/categories/business">
                    Business
                  </Dropdown.Item>
                  <Dropdown.Item href="/categories/ai">
                    Artifical Intelligence
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Nav.Link href="/about">inova-ai</Nav.Link>
              <Nav.Link id="cart-link" href="/cart?user-id=">
                <Cart2 size={20}/>
                {(cartItems.itemsCount !== 0) && (
                  <span className="cart-items-count">{cartItems.itemsCount}</span>
                )}
              </Nav.Link>
              <Dropdown align="end" className="header-links">
                <Dropdown.Toggle
                  as={CustomToggle}
                  id="dropdown-custom-components"
                >
                  {false ? (
                    <img src="/inovaai.png" id="logo-img" />
                  ) : (
                    <Person
                      size={30}
                      title="Account"
                      color="gray"
                      style={{
                        border: "solid 1px gray",
                        borderRadius: "9999px",
                        padding: "5px",
                        backgroundColor: "white",
                        cursor: "pointer",
                      }}
                    />
                  )}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Login</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Create account
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Header;
