import { useState } from "react";
import Welcome from "../../components/RegistrationComponents/Welcome";
import PersonalInfo from "../../components/RegistrationComponents/PersonalInfo";
import CompanyInfo from "../../components/RegistrationComponents/CompanyInfo";
import Success from "../../components/RegistrationComponents/Success";

const Registration = () => {
  const [step, setStep] = useState(1);

  const nextPage = () => {
    setStep(step + 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Welcome onNext={nextPage} />;
      case 2:
        return <PersonalInfo onNext={nextPage} />;
      case 3:
        return <CompanyInfo onNext={nextPage} />;
      case 4:
        return <Success />;
      default:
        return null;
    }
  };

  return (
    <div className="mx-auto mt-10 text-center">
      <h1 className="text-4xl mb-8">Registration Form</h1>
      <div className="bg-gray-300 h-4 w-full rounded-full mb-8">
        <div
          className={`bg-blue-500 text-xs leading-none py-1 text-center text-white w-${
            (step - 1) * 25
          }/4`}
        ></div>
      </div>
      {renderStep()}
    </div>
  );
};

export default Registration;
