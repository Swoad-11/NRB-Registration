// Info.jsx
import { useState } from "react";
import FormInput from "./../../components/Form/FormInput";
import img2 from "../../assets/register.svg";

const Info = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    country: "",
    zip: "",
    // Add more fields as needed
  });

  const [isSignUpMode, setSignUpMode] = useState(false);

  const handleSignUpClick = () => {
    setSignUpMode(true);
  };

  const handleSignInClick = () => {
    setSignUpMode(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to submit the personal information data
    console.log("Personal Information Submitted:", formData);
    // You can make an API call to save the data to your server/database
  };

  return (
    <div className={`container ${isSignUpMode ? "sign-up-mode" : ""}`}>
      <div className="forms-container">
        <div className="personal-info-form signin-signup ml-12 mr-6">
          <form onSubmit={handleSubmit}>
            <h2 className="pb-8 text-2xl font-bold">Personal Information</h2>
            <FormInput fieldName="First Name" />
            <FormInput fieldName="LastName" />
            <FormInput fieldName="Email" />
            <FormInput fieldName="Phone" />
            <FormInput fieldName="Address" />
            <FormInput fieldName="Country" />
            <FormInput fieldName="Zip" />
            {/* Add more FormInput components as needed */}
            <button
              type="submit"
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden
             text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600
              to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white"
            >
              <span
                className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white
                rounded-md group-hover:bg-opacity-0"
              >
                Submit
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Info;
