import React from "react";
import { Carousel } from "antd";

const logoSlider = [
  {
    logoItem: "fab fa-sass",
    logoNumber: 1,
  },
  {
    logoItem: "fab fa-youtube",
    logoNumber: 2,
  },
  {
    logoItem: "fab fa-studiovinari",
    logoNumber: 3,
  },
  {
    logoItem: "fab fa-meetup",
    logoNumber: 4,
  },
  {
    logoItem: "fas fa-signature",
    logoNumber: 5,
  },
  {
    logoItem: "fab fa-itunes-note",
    logoNumber: 6,
  },
];
function LogoCarousel() {
  return (
    <>
      <Carousel autoplay = {true}>
        {logoSlider.map((item) => {
          return (
            <div
              key={item.logoNumber}
              style={{ width: "100px", height: "200px" }}
            >
              <i className={item.logoItem} style={{ fontSize: "150px" }}></i>
            </div>
          );
        })}
      </Carousel>
    </>
  );
}

export default LogoCarousel;
