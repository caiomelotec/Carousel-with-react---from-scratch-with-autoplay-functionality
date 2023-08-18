import React, { useState, useEffect } from "react";
import { CarouselItem } from "./CarouselItem";
import ex01 from "./Media/ex04.jpg";
import { ContainerInfo } from "./ContainerInfo";

export const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const [isPlaying, setIsPlaying] = useState(false);

  const items = [
    {
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, beatae?",
      icon: ex01,
    },
    {
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, beatae?",
      icon: ex01,
    },
    {
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, beatae?",
      icon: ex01,
    },
    {
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, beatae",
      icon: ex01,
    },
  ];

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }

    // if the index is two it will set the index to 0 after 2 seconds
    if (newIndex === 3) {
      setTimeout(() => {
        setActiveIndex(0);
      }, 2000);
    }
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    let interval;

    if (isPlaying) {
      interval = setInterval(() => {
        updateIndex(activeIndex + 1);
      }, 2000);
    } else {
      clearInterval(interval);
    } // Clear the interval if not playing

    return () => {
      clearInterval(interval); // Clear the interval on component unmount or when isPlaying changes
    };
  });

  return (
    <>
      <div className="carousel">
        <div
          className="inner"
          style={{ transform: `translate(-${activeIndex * 100}%)` }}
        >
          {items.map((item, index) => {
            return <CarouselItem key={index} item={item} />;
          })}
        </div>
        <ContainerInfo
          items={items}
          activeIndex={activeIndex}
          updateIndex={updateIndex}
          setIsPlaying={setIsPlaying}
          isPlaying={isPlaying}
        />
      </div>
    </>
  );
};
