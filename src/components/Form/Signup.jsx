import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
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

  const [signing, setSigning] = useState(false); // Loading state

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const openModal = (message) => {
    setErrorMessage(message);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setErrorMessage("");
  };

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
      openModal("Passwords do not match");
      setSigning(false);
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
    <div>
      <form
        onSubmit={handleSignup}
        className="sign-up-form max-w-md mx-auto bg-white mr-20 mt-10 p-2 rounded shadow-md"
      >
        <h2 className="text-2xl font-semibold mb-6">Sign up</h2>

        <div className="form-input">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-600"
          >
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
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-600"
          >
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
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-600"
          >
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
          <label
            htmlFor="is_client"
            className="block text-sm font-medium text-gray-600 mt-4"
          >
            <span>Is Client</span>
          </label>
          <select
            className="mb-6"
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
          {signing ? "Signing Up..." : "Sign Up"}
        </button>
        <SocialMedia value={"Signup"} />
      </form>

      <div>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Error Modal"
          className="z-99 justify-center"
        >
          <div>
            <p>{errorMessage}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Signup;
