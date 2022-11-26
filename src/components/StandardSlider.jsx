import React from "react";
import { Button, Carousel } from "antd";
import { RightOutlined, LeftOutlined, RedoOutlined } from "@ant-design/icons";
import img1 from "../images/nature1.jpg";
import img2 from "../images/nature2.jpg";
import img3 from "../images/nature3.jpg";
import img4 from "../images/nature4.jpg";
import img5 from "../images/nature5.jpg";
import img6 from "../images/nature6.jpg";

const imageSlider = [
  {
    imageItem: img1,
    imageNumber: 1,
  },
  {
    imageItem: img2,
    imageNumber: 2,
  },
  {
    imageItem: img3,
    imageNumber: 3,
  },
  {
    imageItem: img4,
    imageNumber: 4,
  },
  {
    imageItem: img5,
    imageNumber: 5,
  },
  {
    imageItem: img6,
    imageNumber: 6,
  },
];

function StandardSlider() {
  const carouselRef = React.useRef();

  return (
    <>
      <Carousel effect="fade" ref={carouselRef} infinite={false}>
        {imageSlider.map((item) => {
          return (
            <img
              src={item.imageItem}
              alt=""
              key={item.imageNumber}
              style={{ maxWidth: "50" }}
            />
          );
        })}
      </Carousel>

      <div style={{ textAlign: "center" }}>
        <Button
          onClick={() => {
            carouselRef.current.prev();
          }}
          icon={<LeftOutlined />}
        ></Button>

        {/* Reset Button */}
        <Button
          icon={<RedoOutlined />}
          onClick={() => {
            carouselRef.current.goTo(0);
          }}
        ></Button>
        {/* End of Reset Button */}
        <Button
          onClick={() => {
            carouselRef.current.next();
          }}
          icon={<RightOutlined />}
        ></Button>
      </div>
    </>
  );
}

export default StandardSlider;
