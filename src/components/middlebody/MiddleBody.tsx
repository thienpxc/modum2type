import { useEffect, useState } from "react";
import "./middlebody.scss";
import { Carousel } from "antd";

function MiddleBody() {
  const placeholders = [
    "iPhone 15 Pro Max",
    "Samsung Galaxy S24 Ultra",
    "Xiaomi Redmi Note 12 Pro",
    "Oppo Reno 10",
    "Vivo V20 Pro",
  ];
  const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPlaceholderIndex(
        (prevIndex) => (prevIndex + 1) % placeholders.length
      );
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <div className="middle-body-container">
        <h3 className="middle-body-h3">Tìm Kiếm Sản Phẩm</h3>
        <Carousel autoplay>
          <div className="middle-body-img">
            <img
              src="https://cdn.nguyenkimmall.com/images/detailed/820/top-06-dien-thoai-chup-anh-dep-cho-tin-do-me-song-ao-thumbnail.jpg"
              style={{ width: "80%", height: "100%", marginLeft: "10%" }}
              alt=""
            />
          </div>
          <div className="middle-body-img">
            <img
              src="https://image.sggp.org.vn/1200x630/Uploaded/2024/yfsgf/2024_01_21/anh-man-hinh-2024-01-21-luc-103708-2786.png.webp"
              style={{ width: "80%", height: "100%", marginLeft: "10%" }}
              alt=""
            />{" "}
          </div>
          <div className="middle-body-img">
            <img
              src="https://fs.siteor.com/gsmonline/articles/photo1s/167833/large/0_OPPO-Find-N2-_-OPPO-Find-N2-Flip_20221215.jpg?1671088649"
              style={{ width: "80%", height: "100%", marginLeft: "10%" }}
              alt=""
            />{" "}
          </div>
          <div className="middle-body-img">
            <img
              src="https://cdn.tgdd.vn/Files/2023/04/04/1523162/5-040423-223038-800-resize.jpg"
              alt=""
              style={{ width: "80%", height: "100%", marginLeft: "10%" }}
            />{" "}
          </div>
        </Carousel>

        <div className="search-input-container">
          <input
            type="text"
            className="search-input"
            placeholder={placeholders[currentPlaceholderIndex]}
          />
        </div>
      </div>
    </>
  );
}

export default MiddleBody;
