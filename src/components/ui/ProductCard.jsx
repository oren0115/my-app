import React from "react";
import { Card, Button, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../style.css";
// slice deskripsi
function truncateDescription(description, wordLimit = 10) {
  return description.split(" ").slice(0, wordLimit).join(" ") + "...";
}

const ProductCard = ({ product, addToCart }) => {
  return (
    <Card
      style={{ width: "100%", maxWidth: "18rem" }}
      className="shadow-sm d-flex flex-column">
      <Card.Img
        variant="top"
        src={product.thumbnail}
        alt={product.title}
        className="product-thumbnail"
      />

      <Card.Body className="d-flex flex-column">
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{truncateDescription(product.description)}</Card.Text>
        <h5>
          <del className="text-muted">
            $
            {(product.price / (1 - product.discountPercentage / 100)).toFixed(
              2
            )}
          </del>{" "}
          <span className="text-danger">${product.price}</span>
        </h5>
        <Badge bg="success">{product.availabilityStatus}</Badge>
        <div className="mt-2">
          <strong>Rating:</strong> ⭐ {product.rating} / 5
        </div>

        {/* Tombol Beli & Tambah ke Keranjang */}
        <div className="mt-auto d-flex gap-2">
          <Link to={`/product/${product.id}`} className="btn btn-primary w-50">
            Detail
          </Link>
          <Button
            variant="outline-primary"
            onClick={() => addToCart(product)}
            className="w-50">
            Add to Cart
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
