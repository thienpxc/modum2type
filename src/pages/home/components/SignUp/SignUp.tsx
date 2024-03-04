import axios from "axios";
import { useFormik } from "formik";
import { validationSchema } from "./yup";
import "./signup.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
// import { useState } from "react";

interface FormData {
  userName: string;
  phoneNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
}
const SignUp = () => {
  const [email, setEmail] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(false);
  const navigate = useNavigate();
  const formik = useFormik<FormData>({
    initialValues: {
      userName: "",
      phoneNumber: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const dataToSend = {
          ...values,
          phoneNumber: values.phoneNumber.toString(),
          confirmPassword: values.confirmPassword,
          avatar: "/src/image/avatar.jpg",
        };
        const emailResponse = axios.get(
          `http://localhost:3000/user?email=${values.email}`
        );
        const phoneResponse = axios.get(
          `http://localhost:3000/user?phoneNumber=${values.phoneNumber}`
        );

        const [emailData, phoneData] = await Promise.all([
          emailResponse,
          phoneResponse,
        ]);
        if (emailData.data.length > 0) {
          setEmail(true);
          console.log("Email đã tồn tại trong hệ thống");
          // Thực hiện xử lý khác nếu cần
          return;
        }
        if (phoneData.data.length > 0) {
          setPhoneNumber(true);
          console.log("Số điện thoại đã tồn tại trong hệ thống");
          // Thực hiện xử lý khác nếu cần
          return;
        }
        // Nếu cả email và số điện thoại đều không tồn tại, tiến hành đăng ký
        const res = await axios.post("http://localhost:3000/user", dataToSend, {
          headers: { "Content-Type": "application/json" },
        });
        console.log("Đăng ký thành công:", res);
        navigate("/signin");
        // Thực hiện các hành động tiếp theo nếu đăng ký thành công
      } catch (error) {
        console.error("Lỗi:", error);
      }
    },
  });
  return (
    <div className="form-container">
      <h3>Đăng ký</h3>
      <form onSubmit={formik.handleSubmit}>
        <div className="input-container">
          <input
            type="text"
            placeholder="Enter name"
            name="userName"
            value={formik.values.userName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.userName && formik.errors.userName && (
            <div className="error-message">{formik.errors.userName}</div>
          )}
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Enter phone"
            name="phoneNumber"
            value={formik.values.phoneNumber}
            onChange={(e) => {
              formik.handleChange(e);
              setPhoneNumber(false);
            }}
            onBlur={formik.handleBlur}
          />
          {phoneNumber && (
            <p className="error-message">Số điện thoại đã được đăng ký</p>
          )}
          {formik.touched.phoneNumber && formik.errors.phoneNumber && (
            <div className="error-message">{formik.errors.phoneNumber}</div>
          )}
        </div>
        <div className="input-container">
          <input
            type="email"
            placeholder="Enter email"
            name="email"
            value={formik.values.email}
            onChange={(e) => {
              formik.handleChange(e);
              setEmail(false);
            }}
            onBlur={formik.handleBlur}
          />
          {email && <p className="error-message">Email đã được đăng ký</p>}
          {formik.touched.email && formik.errors.email && (
            <div className="error-message">{formik.errors.email}</div>
          )}
        </div>
        <div className="input-container">
          <input
            type="password"
            placeholder="Enter password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password && (
            <div className="error-message">{formik.errors.password}</div>
          )}
        </div>
        <div className="input-container">
          <input
            type="password"
            placeholder="Enter the password"
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <div className="error-message">{formik.errors.confirmPassword}</div>
          )}
        </div>
        <div className="button-container">
                    Bạn đã có tài khoản?  <Link to="/signin">Click</Link><br />
                    <button type="submit">Đăng Ký</button>
                  </div>
                </form>
              </div>
            );
          };

export default SignUp;
