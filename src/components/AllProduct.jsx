import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import ProductCard from "./ui/ProductCard";

const MenShirt = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://dummyjson.com/products?limit=0"
        );
        setProducts(response.data.products);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data beauty", error);
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
      <h2 className="text-start mb-4">All Products</h2>
      <Row className="justify-content-center">
        {products.map((product) => (
          <Col
            key={product.id}
            sm={12}
            md={6}
            lg={3}
            className="mb-4 d-flex justify-content-center">
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MenShirt;
