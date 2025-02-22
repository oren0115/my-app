import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Button, Card } from "react-bootstrap";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  if (!user) {
    navigate("/login");
    return null;
  }

  return (
    <Container className="mt-5 text-center">
      <Card className="p-4 shadow-lg">
        <h2>
          Welcome, {user.firstName} {user.lastName}!
        </h2>
        <p>Username: {user.username}</p>
        <Button variant="danger" onClick={handleLogout}>
          Logout
        </Button>
      </Card>
    </Container>
  );
};

export default Dashboard;
