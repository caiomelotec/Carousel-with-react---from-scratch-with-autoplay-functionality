import React from "react";

export const CarouselItem = ({ item }) => {
  return (
    <div className="carousel-item">
      <img id="carousel-img" src={item.icon} alt="" />
    </div>
  );
};
