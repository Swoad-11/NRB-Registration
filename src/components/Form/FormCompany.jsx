// FormCompany.jsx
import React, { useState, useEffect } from "react";
import FormInput from "./FormInput";

const FormCompany = ({ onPrevious, onNext, prevFormData }) => {
  const [formData, setFormData] = useState({
    companyName: "",
    companyLogo: null,
    industry: "",
    companySize: "",
    position: "",
    companyWebsite: "",
    linkedIn: "",
    twitter: "",
    ...prevFormData, // Initialize with the previous form data
  });

  useEffect(() => {
    // Update the form data whenever prevFormData changes
    setFormData((prevData) => ({ ...prevData, ...prevFormData }));
  }, [prevFormData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      companyLogo: file,
    }));
  };

  const handlePrevious = () => {
    // Call onPrevious to go back to the previous step
    onPrevious();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation logic if needed

    // Call onNext with the form data to save and proceed to the next step
    onNext(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="registration-form">
        <h2 className="text-2xl font-semibold">Company Information</h2>
        <FormInput
          fieldName="Company Name"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
        />
        <div>
          <label htmlFor="companyLogo">Company Logo:</label>
          <input
            type="file"
            id="companyLogo"
            name="companyLogo"
            onChange={handleFileChange}
          />
        </div>
        <FormInput
          fieldName="Industry"
          name="industry"
          value={formData.industry}
          onChange={handleChange}
        />
        <FormInput
          fieldName="Company Size"
          name="companySize"
          value={formData.companySize}
          onChange={handleChange}
        />
        <FormInput
          fieldName="Position in the Company"
          name="position"
          value={formData.position}
          onChange={handleChange}
        />
        <FormInput
          fieldName="Company Website"
          name="companyWebsite"
          value={formData.companyWebsite}
          onChange={handleChange}
        />
        <FormInput
          fieldName="LinkedIn"
          name="linkedIn"
          value={formData.linkedIn}
          onChange={handleChange}
        />
        <FormInput
          fieldName="Twitter"
          name="twitter"
          value={formData.twitter}
          onChange={handleChange}
        />
        {/* Add more social media fields as needed */}
        <div className="flex justify-between">
          <button
            type="button" // Change the type to "button"
            className="text-white bg-purple-700 hover:bg-purple-800
           font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
            onClick={handlePrevious}
          >
            Previous
          </button>
          <button
            type="submit"
            className="text-white bg-purple-700 hover:bg-purple-800
           font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormCompany;
