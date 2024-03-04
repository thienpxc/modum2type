import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./account.scss";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { EditOutlined } from "@ant-design/icons";
import { Link, Outlet, useNavigate } from "react-router-dom";
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
 

  const accounts = useSelector((store: RootState) => store.userStore.data);
  console.log(accounts);
 

  return (
    <>
      <Header />
      <div className="account-body">
        <div className="home-account">
          <img src={accounts.avatar} className="avatar-account" alt="" />
          <div className="name-account">
            xin chào {accounts.userName} !
            <div>
              <EditOutlined /> sửa hồ sơ
            </div>
          </div>
        </div>
        <div className="account-profiles">
          <h4>Tài khoản của tôi</h4>
          <Link to={"profile"} className="profile-link">
            Hồ Sơ
          </Link>
          <div>Địa chỉ</div>
        </div>
        <div className="account-footer">
          <Footer />
        </div>
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default EditProfile;
