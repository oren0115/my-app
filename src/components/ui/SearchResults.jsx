import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios"; // Import axios
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductCard from "./ProductCard";
import Spinner from "react-bootstrap/Spinner"; // Tambahkan loading spinner

function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || "";
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch product data from API
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://dummyjson.com/products?limit=100"
        );
        setProducts(response.data.products);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (query && products.length > 0) {
      const results = products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(results);
    } else {
      setFilteredProducts([]);
    }
  }, [query, products]);

  return (
    <Container className="mt-4">
      <h2>Search Results for "{query}"</h2>
      {loading ? (
        <div className="text-center">
          <Spinner animation="border" />
          <p>Loading products...</p>
        </div>
      ) : (
        <Row className="justify-content-center">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Col
                key={product.id}
                sm={12}
                md={6}
                lg={3}
                className="mb-4 d-flex justify-content-center">
                <ProductCard product={product} />
              </Col>
            ))
          ) : (
            <p>No products found</p>
          )}
        </Row>
      )}
    </Container>
  );
}

export default SearchResults;
