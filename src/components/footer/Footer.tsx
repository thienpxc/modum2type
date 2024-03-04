import "./footer.scss"
import { Link } from "react-router-dom";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Thông tin liên hệ</h3>
          <p>Địa chỉ: Số 123, Đường ABC, Thành phố XYZ</p>
          <p>Email: contact@example.com</p>
          <p>Điện thoại: 0123 456 789</p>
        </div>
        <div className="footer-column">
          <h3>Chính sách</h3>
          <ul>
            <li>
              <Link to="/terms">Điều khoản và điều kiện</Link>
            </li>
            <li>
              <Link to="/privacy">Chính sách bảo mật</Link>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Theo dõi chúng tôi</h3>
          <div className="social-icons">
            <Link to="/facebook">
              <FacebookOutlined />
            </Link>
            <Link to="/twitter">
              <TwitterOutlined />
            </Link>
            <Link to="/instagram">
              <InstagramOutlined />
            </Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Trang web bán điện thoại. Tất cả quyền được bảo lưu.</p>
      </div>
    </footer>
  );
};

export default Footer;
