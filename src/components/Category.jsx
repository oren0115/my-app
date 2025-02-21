import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom"; // ✅ Perbaikan import
import { Row, Col, Container, Button } from "react-bootstrap";
import mensShirtimg from "../assets/mens-shirts.jpg";
import mensShoes from "../assets/mens-shoes.jpg";
import womensShirtimg from "../assets/womens-shirts.jpg";
import womensShoes from "../assets/womens-shoes.jpg";

function CategoryShop() {
  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Shop by Categories</h2>
      <Row className="justify-content-center">
        {/* Men's Shirts */}
        <Col
          sm={12}
          md={6}
          lg={3}
          className="d-flex justify-content-center mb-3">
          <Card
            style={{
              width: "18rem",
              height: "400px",
              backgroundImage: `url(${mensShirtimg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              color: "white",
              border: "none",
            }}
            className="shadow-lg">
            <div
              className="d-flex flex-column align-items-center justify-content-center text-center w-100 h-100"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                borderRadius: "0.5rem",
              }}>
              <Card.Title className="fw-bold">Men's Shirts</Card.Title>
              <Card.Text>Get the best deals on our products!</Card.Text>
              <Link to="/category/mens-shirt">
                <Button variant="light" className="mt-2">
                  View More →
                </Button>
              </Link>
            </div>
          </Card>
        </Col>

        {/* Women's Dresses */}
        <Col
          sm={12}
          md={6}
          lg={3}
          className="d-flex justify-content-center mb-3">
          <Card
            style={{
              width: "18rem",
              height: "400px",
              backgroundImage: `url(${womensShirtimg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              color: "white",
              border: "none",
            }}
            className="shadow-lg">
            <div
              className="d-flex flex-column align-items-center justify-content-center text-center w-100 h-100"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                borderRadius: "0.5rem",
              }}>
              <Card.Title className="fw-bold">Women's Dresses</Card.Title>
              <Card.Text>Get the best deals on our products!</Card.Text>
              <Link to="/category/womens-dresses">
                <Button variant="light" className="mt-2">
                  View More →
                </Button>
              </Link>
            </div>
          </Card>
        </Col>

        {/* Men's Shoes */}
        <Col
          sm={12}
          md={6}
          lg={3}
          className="d-flex justify-content-center mb-3">
          <Card
            style={{
              width: "18rem",
              height: "400px",
              backgroundImage: `url(${mensShoes})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              color: "white",
              border: "none",
            }}
            className="shadow-lg">
            <div
              className="d-flex flex-column align-items-center justify-content-center text-center w-100 h-100"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                borderRadius: "0.5rem",
              }}>
              <Card.Title className="fw-bold">Men's Shoes</Card.Title>
              <Card.Text>Get the best deals on our products!</Card.Text>
              <Link to="/category/mens-shoes">
                <Button variant="light" className="mt-2">
                  View More →
                </Button>
              </Link>
            </div>
          </Card>
        </Col>

        {/* Women's Shoes */}
        <Col
          sm={12}
          md={6}
          lg={3}
          className="d-flex justify-content-center mb-3">
          <Card
            style={{
              width: "18rem",
              height: "400px",
              backgroundImage: `url(${womensShoes})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              color: "white",
              border: "none",
            }}
            className="shadow-lg">
            <div
              className="d-flex flex-column align-items-center justify-content-center text-center w-100 h-100"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                borderRadius: "0.5rem",
              }}>
              <Card.Title className="fw-bold">Women's Shoes</Card.Title>
              <Card.Text>Get the best deals on our products!</Card.Text>
              <Link to="/category/womens-shoes">
                <Button variant="light" className="mt-2">
                  View More →
                </Button>
              </Link>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default CategoryShop;
