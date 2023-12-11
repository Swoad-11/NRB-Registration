import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import SocialMedia from "./../SocialMedia/SocialMedia";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    is_client: "True",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    const { password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      console.error("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:8000/api/user/send_otp/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          is_client: formData.is_client === "True",
        }),
      });

      if (response.ok) {
        // Pass the email as a parameter when navigating to the OTP verification page
        navigate("/otp", { state: { email: formData.email } });
      } else {
        console.error("Error sending OTP:", response.statusText);
        // Log the response for further inspection
        console.log(await response.json());
      }
    } catch (error) {
      console.error("Error sending OTP:", error.message);
    }
  };

  return (
    <form onSubmit={handleSignup} className="sign-up-form">
      <h2 className="text-2xl font-semibold">Sign up</h2>

      <div className="form-input">
        <label htmlFor="email">
          <span>Email Address</span>
          <MdEmail />
        </label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className="form-input">
        <label htmlFor="password">
          <span>Password</span>
          <FaLock />
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>

      <div className="form-input">
        <label htmlFor="confirmPassword">
          <span>Confirm Password</span>
          <FaLock />
        </label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
      </div>

      <div className="form-input">
        <label htmlFor="is_client">
          <span>Is Client</span>
        </label>
        <select
          id="is_client"
          name="is_client"
          value={formData.is_client}
          onChange={handleChange}
        >
          <option value="True">True</option>
          <option value="False">False</option>
        </select>
      </div>

      <button
        type="submit"
        className="text-white bg-purple-700 hover:bg-purple-800
        font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
      >
        Sign Up
      </button>
      <SocialMedia value={"Signup"} />
    </form>
  );
};

export default Signup;
