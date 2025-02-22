import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row>
          <Col md={4} className="text-center text-md-start">
            <h5>ShopEase</h5>
            <p>Best deals, best products, only for you.</p>
          </Col>
          <Col md={4} className="text-center">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/about" className="text-light text-decoration-none">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-light text-decoration-none">
                  Contact
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-light text-decoration-none">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </Col>
          <Col md={4} className="text-center text-md-end">
            <h5>Follow Us</h5>
            <a href="#" className="text-light mx-2">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-light mx-2">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-light mx-2">
              <i className="fab fa-instagram"></i>
            </a>
          </Col>
        </Row>
        <hr className="bg-light" />
        <p className="text-center mb-0">
          © {new Date().getFullYear()} MyCommerce. All Rights Reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer; // ✅ Pastikan ada "export default Footer"
