import React from "react";
import { Carousel } from "react-bootstrap";

const Slideshow = ({ images }) => {
  if (!images || images.length === 0) {
    return <p>No images available</p>;
  }

  return (
    <Carousel interval={3000} indicators={true} controls={true}>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={image}
            alt={`Slide ${index + 1}`}
            style={{
              objectFit: "cover",
              height: "400px",
              borderRadius: "10px",
            }}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slideshow;
