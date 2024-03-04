import { useSelector } from "react-redux";
import "./header.scss";
import { Dropdown, Menu } from "antd";
import { useNavigate } from "react-router-dom";

interface UserType {
  id: number;
  email: string;
  phoneNumber: string;
  password: string;
  userName: string;

  // other user properties...
}
interface UserStore {
  data: UserType[];
}
interface RootState {
  userStore: UserStore;
}

const Header = () => {
  const navigate = useNavigate();
  const accounts = useSelector((store: RootState) => store.userStore.data);
console.log(accounts);
  const onClick = ({ key }: { key: string }) => {
    switch (key) {
      case "accounts":
        navigate("/accounts/profile");
        break;
      case "email":
        navigate("/email");
        break;
      case "token":
        localStorage.removeItem("token");
        navigate("/");
        window.location.reload();
        break;
      case "signup":
        navigate("/signup");
        break;
      case "signin":
        navigate("/signin");
        break;
      default:
        console.log("object");
        break;
    }
  };

  const menu = (
    <Menu onClick={onClick}>
      {accounts && <Menu.Item key="accounts">Tài khoản của tôi</Menu.Item>}
      {accounts && <Menu.Item key="email">Đơn mua</Menu.Item>}
      {accounts && <Menu.Item key="token">Đăng xuất</Menu.Item>}
      {!accounts && <Menu.Item key="signup">Đăng ký</Menu.Item>}
      {!accounts && <Menu.Item key="signin">Đăng nhập</Menu.Item>}
    </Menu>
  );
  return (
    <header>
      <div>
        {accounts ? (
          <Dropdown
            overlay={<Menu onClick={onClick}>{menu}</Menu>}
            placement="bottom"
            className="btn-account"
          >
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              Xin chào: {accounts.userName}
            </a>
          </Dropdown>
        ) : (
          <Dropdown
            overlay={<Menu onClick={onClick}>{menu}</Menu>}
            placement="bottom"
            className="btn-account"
          >
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              Tài khoản
            </a>
          </Dropdown>
        )}
        
      </div>
    </header>
  );
};

export default Header;
