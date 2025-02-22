import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "./ui/ProductCard";

const WomenBags = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://dummyjson.com/products/category/womens-shoes"
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
    return <p className="text-center">Loading data womens shoes...</p>;

  return (
    <Container className="mt-4">
      <h2 className="text-start mb-4">Category Womens Shoes</h2>
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

export default WomenBags;
