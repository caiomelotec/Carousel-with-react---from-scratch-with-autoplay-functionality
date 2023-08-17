import React, { useState, useEffect } from "react";
import { CarouselItem } from "./CarouselItem";

export const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const [isPlaying, setIsPlaying] = useState(false);

  const items = [
    {
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, beatae?",
      icon: require("./Media/ex1.svg"),
    },
    {
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, beatae?",
      icon: require("./Media/ex2.svg"),
    },
    {
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, beatae?",
      icon: require("./Media/ex3.svg"),
    },
  ];

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }

    // if the index is two it will set the index to 0 after 2 seconds
    if (newIndex === 2) {
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
    <div className="carousel">
      <div
        className="inner"
        style={{ transform: `translate(-${activeIndex * 100}%)` }}
      >
        {items.map((item, index) => {
          return <CarouselItem key={index} item={item} />;
        })}
      </div>

      <div className="carousel-buttons">
        <button
          className="button-arrow"
          onClick={() => updateIndex(activeIndex - 1)}
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <div className="indicators">
          {items.map((item, index) => {
            return (
              <button
                onClick={() => {
                  updateIndex(index);
                }}
                key={index}
                className="indicator-buttons"
              >
                <span
                  className={`material-symbols-outlined ${
                    index === activeIndex
                      ? "indicator-symbol-active"
                      : "indicator-symbol"
                  }`}
                >
                  radio_button_checked
                </span>
              </button>
            );
          })}
        </div>
        <button
          className="button-arrow"
          onClick={() => updateIndex(activeIndex + 1)}
        >
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? "PAUSE" : "PLAY"}
      </button>
    </div>
  );
};
