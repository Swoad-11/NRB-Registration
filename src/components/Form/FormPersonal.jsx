// FormPersonal.jsx
import { useState } from "react";
import FormInput from "./FormInput";

const FormPersonal = ({ onNext }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    sex: "",
    occupation: "",
    companyName: "",
    designation: "",
    contactEmail: "",
    country: "",
    phoneNumber: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation logic if needed

    // Call the onNext function with the form data to save and proceed to the next step
    onNext(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="registration-form">
        <h2 className="text-2xl font-semibold">Personal Information</h2>
        <FormInput
          fieldName="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />
        <FormInput
          fieldName="Sex"
          name="sex"
          value={formData.sex}
          onChange={handleChange}
        />
        <FormInput
          fieldName="Occupation"
          name="occupation"
          value={formData.occupation}
          onChange={handleChange}
        />
        <FormInput
          fieldName="Company Name"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
        />
        <FormInput
          fieldName="Designation"
          name="designation"
          value={formData.designation}
          onChange={handleChange}
        />
        <FormInput
          fieldName="Contact Email"
          name="contactEmail"
          value={formData.contactEmail}
          onChange={handleChange}
        />
        <FormInput
          fieldName="Country"
          name="country"
          value={formData.country}
          onChange={handleChange}
        />
        <FormInput
          fieldName="Phone Number"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        <FormInput
          fieldName="Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="text-white bg-purple-700 hover:bg-purple-800
         font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default FormPersonal;
