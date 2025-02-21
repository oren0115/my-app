import { Container } from "react-bootstrap";
import HotOffers from "../components/HotOffers";
import Carousel from "../components/SlideShow";
import CategoryShop from "../components/Category";

export default function Home() {
  return (
    <Container>
      <Carousel />
      <CategoryShop />
      <HotOffers />
    </Container>
  );
}
