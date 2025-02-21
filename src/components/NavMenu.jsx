import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function NavMenu() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate(); // Hook for navigation

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?query=${searchTerm}`); // Redirect to search results
    }
  };

  return (
    <Navbar expand="lg" sticky="top" className="bg-primary">
      <Container>
        <Navbar.Brand as={Link} to="/" className="text-light">
          My Commerce
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link as={Link} to="/" className="text-light">
              Home
            </Nav.Link>
            <NavDropdown
              title={<span className="text-light">Category</span>}
              id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/category/beauty">
                Beauty
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/mens-shirt">
                Men's Shirts
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/womens-bags">
                Women's Bags
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/category/mens-shoes">
                Mens Shoes
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/about" className="text-light">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="text-light">
              Contact
            </Nav.Link>
          </Nav>

          {/* Search Form */}
          <Form className="d-flex" onSubmit={handleSearch}>
            <Form.Control
              type="search"
              placeholder="Search products..."
              className="me-2"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button type="submit" variant="light">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavMenu;
