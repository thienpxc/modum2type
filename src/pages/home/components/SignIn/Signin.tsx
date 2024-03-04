import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./signin.scss";
import { Link } from "react-router-dom";
import * as jose from "jose";
import axios from "axios";

interface UserType {
  id: number;
  email: string;
  phoneNumber: string;
  password: string;
}
interface UserStore {
  data: UserType[]; // Replace UserType with the actual type of your user data
  // other properties...
}

interface RootState {
  userStore: UserStore;
  // other state slices...
}
const Signin = () => {
 
  const [emailOrPhoneNumber, setEmailOrPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [isEmail, setIsEmail] = useState(false);

  async function generateToken(data: any) {
    const jwt = await new jose.SignJWT(data)
      .setProtectedHeader({ alg: "HS256" })
      .sign(new TextEncoder().encode("lvthien"));
    return jwt;
  }
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Fetch user data from the server
      const res = await axios.get("http://localhost:3000/user");

      // Define function to check if user is found
      const foundUser = (user: UserType) =>
        user.email === emailOrPhoneNumber ||
        user.phoneNumber === emailOrPhoneNumber;

      // Find the user in the response data
      const userFound = res.data.find(foundUser);

      if (userFound) {
        if (userFound.password === password) {
          // Login successful
          // Save token to localStorage
          localStorage.setItem("token", await generateToken(userFound));
          window.location.href = "/";
        } else {
          setError(true); // Incorrect password
        }
      } else {
        setIsEmail(true); // User not found
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      // Handle error
    }
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <h3>Đăng nhập</h3>
          <input
            type="text"
            required
            placeholder="Email hoặc số điện thoại"
            value={emailOrPhoneNumber}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setEmailOrPhoneNumber(e.target.value);
              setIsEmail(false);
            }}
          />
          {isEmail && <p>Email hoặc số điện thoại không tồn tại</p>}
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setPassword(e.target.value);
              setError(false);
            }}
          />
          {error && <p>Mật Khẩu không chính xác</p>}
          Bạn chưa có tài khoản? <Link to="/signup">Click</Link>
          <button type="submit">Đăng nhập</button>
        </form>
      </div>
    </>
  );
};

export default Signin;
