import React, { useState } from "react";
import "./UserName.scss";
import { Outlet } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "../../../stores/slices/user.slice";

const UserName: React.FC = () => {
  const dispatch = useDispatch();
  const accounts = useSelector((store: RootState) => store.userStore.data);
  console.log(accounts);
  const [userName, setUserName] = useState("");
  const categoryStore = useSelector(
    (stores: RootState) => stores.categoryStore
  );
  console.log(categoryStore);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newUserName = userName;
    console.log(newUserName); // Hiển thị giá trị mới của userName
    accounts.userName = newUserName;
    console.log(newUserName); // Hiển thị giá trị mới của userName (sau khi thay đổi)
    const payload = {}; // Define the 'payload' variable
    await axios
      .put("http://localhost:3000/user", { userName: newUserName })
      .then((res) => {
        console.log(res);
        dispatch(userAction.setData(payload as User));
      });
  };

  return (
    <>
      <div className="profile-editname">
        <form onSubmit={handleSubmit}>
          <div className="profile-editname-name">
            Nhập tên mới cần chỉnh sửa: <br />
          </div>
          <input
            type="text"
            value={userName}
            onChange={handleChange}
            placeholder="           nhập tên mới"
            className="profile-name"
          />

          <br />
          <button type="submit">Lưu</button>
        </form>
      </div>
      <Outlet></Outlet>
    </>
  );
};

export default UserName;
