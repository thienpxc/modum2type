import React, { useState } from "react";
import { Carousel } from "antd";
import "./carousels.scss";
import {
  LeftOutlined,
  RightOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const App: React.FC = () => {
  const [startSlide, setStartSlide] = useState(0);
  const totalSlides = 10;
  const slidesToShow = 4;

  const increaseStartSlide = () => {
    if (startSlide + 1 <= totalSlides - slidesToShow) {
      setStartSlide((prev) => prev + 1);
    }
  };
  const decreaseStartSlide = () => {
    if (startSlide - 1 >= 0) {
      setStartSlide((prev) => prev - 1);
    }
  };
  return (
    <div className="carousel-container">
      <button className="control-button" onClick={decreaseStartSlide}>
        <LeftOutlined />
      </button>
      <button className="controls-button" onClick={increaseStartSlide}>
        <RightOutlined />
      </button>
      <div className="carousel">
        <h4 className="sale-title">
          <p className="ThunderboltOutlined">F</p>
          <ThunderboltOutlined />
          <span>ASH SALE</span>
        </h4>
        <Carousel slidesToShow={slidesToShow}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            .slice(startSlide, startSlide + slidesToShow)
            .map((num) => (
              <div key={num}>
                <h3 style={contentStyle}>{num}</h3>
              </div>
            ))}
        </Carousel>
      </div>
    </div>
  );
};

export default App;
