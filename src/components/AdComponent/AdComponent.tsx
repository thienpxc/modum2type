import "./AdComponent.scss"
import "./AdComponent.scss";
import { useNavigate } from "react-router-dom";

function AdComponent({ onClose }) {
  const navigate = useNavigate();

  return (
    <div className="ad-container">
      <div className="ad-content">
        <video
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "15px",
            cursor: "pointer",
          }}
          autoPlay
          loop
          muted
          onClick={() => navigate("/about")}
        >
          <source
            src="/src/assets/video/iPhone 15 _ Now In Purple.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div>
        <button className="close-btn" onClick={() => navigate("/about")}>
          XEM THÊM
        </button>
        <button className="close-btn" onClick={onClose}>
          ĐÓNG
        </button>
      </div>
    </div>
  );
}

export default AdComponent;
