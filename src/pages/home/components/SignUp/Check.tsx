import React, { useState } from "react";
import axios from "axios";

interface UserCheck {
  id: number;
  email: string;
  phoneNumber: string;
}

function RegistrationForm() {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const checkUser: UserCheck = {
      id: Math.random() * Date.now(),
      email,
      phoneNumber,
    };

    try {
      const response = await axios.get(
        `http://localhost:3000/user?email=${email}`
      );
      const data = response.data;

      // Kiểm tra xem data có tồn tại và có phải là mảng không
      if (Array.isArray(data) && data.length > 0) {
        const emailFromResponse = data[0].email;
        console.log("Email:", emailFromResponse);
      } else {
        console.log("Dữ liệu phản hồi không phải là mảng hoặc mảng rỗng");
      }
    } catch (error) {
      console.error("Lỗi:", error);
    }
  };

  return (
    <div>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </div>
  );
}

export default RegistrationForm;
