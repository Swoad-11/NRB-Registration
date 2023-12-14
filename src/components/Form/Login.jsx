import { useState } from "react";
import SocialMedia from "../SocialMedia/SocialMedia";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginApiUrl = "http://127.0.0.1:8000/api/user/get_auth_token/";
    const registrationApiUrl = "http://127.0.0.1:8000/api/user/registration/";

    const loginData = { email, password };

    try {
      // Attempt to log in
      const loginResponse = await fetch(loginApiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      if (!loginResponse.ok) {
        throw new Error("Invalid credentials");
      }

      // Save token to local storage
      const loginDataJson = await loginResponse.json();
      const token = loginDataJson.token;
      localStorage.setItem("token", token);

      // Log the token to the console
      console.log("Token:", token);

      // Check if registration is completed
      const registrationResponse = await fetch(registrationApiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!registrationResponse.ok) {
        throw new Error("Failed to check registration status");
      }

      const registrationData = await registrationResponse.json();

      if (registrationData.exists) {
        // If registration is complete, navigate to the profile page
        navigate("/profile");
      } else {
        // If registration is not complete, navigate to the info page
        navigate("/info");
      }
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="sign-in-form">
        <h2 className="text-2xl font-semibold">Log in</h2>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MdEmail className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>

        {/* Password Input */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaLock className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="text-white bg-purple-700 hover:bg-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
        >
          Login
        </button>

        {/* Social Media Links */}
        <SocialMedia value={"Login"} />
      </form>
    </div>
  );
};

export default Login;
