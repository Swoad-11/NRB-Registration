import { useState } from "react";
import SocialMedia from "../SocialMedia/SocialMedia";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const [loging, setLoging] = useState(false); // Loading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoging(true);

    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const response = await fetch(`${apiUrl}/get_auth_token/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      if (!response.ok) {
        throw new Error("Invalid credentials");
      }

      const data = await response.json();
      const token = data.token;

      // Save token to local storage
      localStorage.setItem("token", token);

      // Log the token to the console
      console.log("Token:", token);

      // Redirect to the profile page after successful login
      navigate("/profile");
    } catch (error) {
      console.error("Login failed:", error.message);

      // Display error message in Snackbar
      setSnackbarMessage("Login failed: Invalid credentials");
      setSnackbarOpen(true);
    } finally {
      setLoging(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin} className="sign-in-form">
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
              value={formData.email}
              onChange={handleChange}
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
              value={formData.password}
              onChange={handleChange}
              required
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="text-white bg-purple-700 hover:bg-purple-800
        font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
        >
          {loging ? "Loging in..." : "Login"}
        </button>

        {/* Social Media Links */}
        <SocialMedia value={"Login"} />
      </form>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        className="top-0 right-0"
      >
        <MuiAlert
          elevation={7}
          variant="filled"
          onClose={handleSnackbarClose}
          severity="error"
        >
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default Login;
