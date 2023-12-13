import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import SocialMedia from "./../SocialMedia/SocialMedia";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    is_client: "True",
  });

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const [signing, setSigning] = useState(false); // Loading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setSigning(true);

    const { password, confirmPassword } = formData;
    if (password !== confirmPassword) {
      // Display error message in Snackbar
      setSnackbarMessage("Passwords do not match");
      setSnackbarOpen(true);

      setSigning(false);
      return;
    }

    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const response = await fetch(`${apiUrl}/send_otp/`, {
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
    <div>
      <form onSubmit={handleSignup} className="sign-up-form">
        <h2 className="text-2xl font-semibold mb-6">Sign up</h2>

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

        {/* Password Input */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">
            Confirm Password
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaLock className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              autoComplete="current-password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>

        {/* Reg Type */}
        <div className="form-input">
          <label className="block text-sm font-medium text-gray-700">
            You are:
          </label>
          <select
            className="mb-6"
            id="is_client"
            name="is_client"
            value={formData.is_client}
            onChange={handleChange}
          >
            <option value="True">Client</option>
            <option value="False">Freelancer</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="text-white bg-purple-700 hover:bg-purple-800
        font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
        >
          {signing ? "Signing Up..." : "Sign Up"}
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

export default Signup;
