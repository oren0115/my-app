import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Spinner } from "react-bootstrap";
import ProductCard from "./ui/ProductCard";
import { Link } from "react-router-dom";

const HotOffers = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://dummyjson.com/products/category/tops?limit=8"
        );
        setProducts(response.data.products.slice(0, 7)); // Ambil 7 produk pertama
        setLoading(false);
      } catch (error) {
        console.error("Error fetching hot offers:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading)
    return (
      <div className="text-center">
        <Spinner animation="border" />
        <p>Loading products...</p>
      </div>
    );

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">🔥 Hot Offers 🔥</h2>
      <Row className="justify-content-center">
        {/* Render 7 Produk */}
        {products.map((product, index) => (
          <Col key={product.id} sm={12} md={6} lg={3} className="mb-4">
            <ProductCard product={product} />
          </Col>
        ))}

        {/* Kartu ke-8: Link ke All Products */}
        <Col
          sm={12}
          md={6}
          lg={3}
          className="mb-4 d-flex justify-content-center align-items-stretch">
          <Card className="text-center w-100">
            <Card.Body className="d-flex flex-column justify-content-center">
              <h5>See All Products</h5>
              <Link to="/all-products" className="btn btn-primary mt-2">
                View More →
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HotOffers;
