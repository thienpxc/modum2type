import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./profile.scss";
import { Link, Outlet } from "react-router-dom";

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

const EditProfile: React.FC = () => {
  const [avatar, setAvatar] = useState<File | null>(null);
  const accounts = useSelector((store: RootState) => store.userStore.data);
  console.log(accounts);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Gửi dữ liệu đến máy chủ hoặc API backend để cập nhật thông tin người dùng
    // Có thể sử dụng fetch hoặc axios để gửi yêu cầu HTTP
  };

  return (
    <>
      {accounts && (
        <div className="account-profile">
          <form onSubmit={handleSubmit}>
            <div className="account-home">
              <h4>Hồ Sơ Của Tôi</h4>
              <p>Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
            </div>
            <label className="account-label-email">
              Tên đăng nhập : {accounts.email}
            </label>
            <div className="account-body-name">
              <div className="element-gap">
                <label>Tên:</label> {accounts.userName}{" "}
                <Link to="/accounts/name">Thay đổi</Link>
              </div>
              <div className="element-gap">
                <label>Email:</label> {accounts.email}{" "}
                <Link to="/accounts/email">Thay đổi</Link>
              </div>
              <div className="element-gap">
                <label>Số điện thoại:</label> {accounts.phoneNumber}{" "}
                <Link to="/accounts/number">Thay đổi</Link>
              </div>
              <div className="element-gap">
                <label>Mật khẩu: ***</label>
                <Link to="/accounts/password">Thay đổi</Link>
              </div>
              <button type="submit">Cập nhật</button>
            </div>
            <div className="accounts-file-avatar">
              <img src={accounts.avatar} className="avatar-account" alt="" />
              <label htmlFor="avatar-upload" className="custom-file-upload">
                <span>Chọn ảnh</span>
              </label>
              <input
                id="avatar-upload"
                type="file"
                accept="image/*"
                onChange={(e) =>
                  setAvatar(e.target.files ? e.target.files[0] : null)
                }
                style={{ display: "none" }}
              />
              <div></div>
            </div>
          </form>
          <Outlet></Outlet>
        </div>
      )}
    </>
  );
};

export default EditProfile;
