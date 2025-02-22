import { Container } from "react-bootstrap";
import HotOffers from "../components/HotOffers";
import CategoryShop from "../components/Category";

export default function Home() {
  return (
    <Container>
      <CategoryShop />
      <HotOffers />
    </Container>
  );
}
