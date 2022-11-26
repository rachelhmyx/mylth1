import React from "react";
import { Col, Row, Image } from "antd";
import img1 from "../images/coffee1.jpg";
import img2 from "../images/coffee2.jpg";
import img3 from "../images/coffee3.jpg";
import img4 from "../images/coffee4.jpg";
import img5 from "../images/coffee5.jpg";
import img6 from "../images/coffee6.jpg";

const imageGrid = [
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

function LightBoxGridGallery() {
  return (
    <div style={{ padding: "50px" }}>
      <Row gutter={[16, 24]}>
        <Image.PreviewGroup>
          {imageGrid.map((item) => {
            return (
              <Col span={8} key= {item.imageNumber}>
                <Image style={{ width: "500px"}} src={item.imageItem} alt=""  />
              </Col>
            );
          })}
        </Image.PreviewGroup>
      </Row>
    </div>
  );
}

export default LightBoxGridGallery;
