import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col, Image, Badge, Button } from "react-bootstrap";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading)
    return <p className="text-center mt-4">Loading product details...</p>;
  if (!product) return <p className="text-center mt-4">Product not found.</p>;

  return (
    <Container className="mt-4">
      <Row>
        <Col md={5}>
          <Image
            src={product.thumbnail}
            alt={product.title}
            fluid
            className="rounded"
          />
          {/* Cegah error jika product.images tidak ada */}
          {product?.images?.length > 0 && (
            <Row className="mt-3">
              {product.images.map((img, index) => (
                <Col key={index} xs={4}>
                  <Image
                    src={img}
                    alt={`Product ${index}`}
                    fluid
                    className="rounded"
                  />
                </Col>
              ))}
            </Row>
          )}
        </Col>

        <Col md={7}>
          <h2>{product.title}</h2>
          <p className="text-muted">{product.description}</p>
          <h4 className="text-danger">
            ${product.price}{" "}
            <del className="text-muted">
              $
              {(product.price / (1 - product.discountPercentage / 100)).toFixed(
                2
              )}
            </del>
          </h4>
          <Badge bg="success">{product.availabilityStatus}</Badge>

          <div className="mt-3">
            <strong>Brand:</strong> {product.brand}
          </div>
          <div>
            <strong>SKU:</strong> {product.sku}
          </div>
          <div>
            <strong>Stock:</strong> {product.stock} available
          </div>
          <div className="mt-3">
            <strong>Rating:</strong> ⭐ {product.rating} / 5
          </div>

          <div className="mt-4 d-flex gap-2">
            <Button variant="primary" className="w-50">
              Buy Now
            </Button>
            <Button variant="outline-primary" className="w-50">
              Add to Cart
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
