import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Modal from "react-modal";

Modal.setAppElement("#root"); // Set the root element for accessibility

const Otp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [otpData, setOtpData] = useState({
    email: location.state.email || "",
    otp: "",
  });
  const [loading, setLoading] = useState(false);
  const [wrongOtpModalIsOpen, setWrongOtpModalIsOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOtpData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const openWrongOtpModal = () => {
    setWrongOtpModalIsOpen(true);
  };

  const closeWrongOtpModal = () => {
    setWrongOtpModalIsOpen(false);
  };

  const handleOtpVerification = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/user/user_account/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: otpData.email,
            otp: otpData.otp,
          }),
        }
      );

      if (response.ok) {
        console.log("OTP verification successful");
        navigate("/");
      } else {
        console.error("Error verifying OTP:", response.statusText);
        console.log(await response.json());
        openWrongOtpModal();
      }
    } catch (error) {
      console.error("Error verifying OTP:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-20">
      <form
        onSubmit={handleOtpVerification}
        className="max-w-md mx-auto bg-white mr-20 mt-10 p-2 rounded shadow-md"
      >
        <h2 className="text-2xl font-semibold mb-6">OTP Verification</h2>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-600"
          >
            Email Address
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={otpData.email}
            onChange={handleChange}
            readOnly
            className="mt-1 p-2 w-full border rounded-md text-gray-600"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="otp"
            className="block text-sm font-medium text-gray-600"
          >
            OTP
          </label>
          <input
            type="text"
            id="otp"
            name="otp"
            value={otpData.otp}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-purple-700 hover:bg-purple-800 text-white font-medium rounded-lg text-sm py-2"
          disabled={loading} // Disable the button when loading
        >
          {loading ? "Verifying..." : "Verify OTP"}
        </button>
      </form>

      {/* Wrong OTP Modal */}
      <Modal
        isOpen={wrongOtpModalIsOpen}
        onRequestClose={closeWrongOtpModal}
        className="modal"
        overlayClassName="overlay"
      >
        <h2>Wrong OTP</h2>
        <p>Please enter the correct OTP and try again.</p>
        <button onClick={closeWrongOtpModal}>Close</button>
      </Modal>
    </div>
  );
};

export default Otp;
