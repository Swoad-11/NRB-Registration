// Info.jsx
import React, { useState } from "react";
import FormPersonal from "./../../components/Form/FormPersonal";
import FormCompany from "./../../components/Form/FormCompany";

const Info = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [personalFormData, setPersonalFormData] = useState(null);
  const [companyFormData, setCompanyFormData] = useState(null);

  const handleNextPersonal = (data) => {
    setPersonalFormData(data);
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handleNextCompany = (data) => {
    setCompanyFormData(data);
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-4">Registration Page</h1>
      <div>
        {currentStep === 1 && <FormPersonal onNext={handleNextPersonal} />}
        {currentStep === 2 && (
          <FormCompany
            onPrevious={handlePrevious}
            onNext={handleNextCompany}
            prevFormData={personalFormData}
          />
        )}
      </div>
    </div>
  );
};

export default Info;
