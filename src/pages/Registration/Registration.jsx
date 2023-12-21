import { useState } from "react";
import Welcome from "../../components/RegistrationComponents/Welcome";
import PersonalInfo from "../../components/RegistrationComponents/PersonalInfo";
import CompanyInfo from "../../components/RegistrationComponents/CompanyInfo";
import Success from "../../components/RegistrationComponents/Success";
import Job from "../../components/RegistrationComponents/Job";

const Registration = () => {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    //personal info
    fullName: "",
    sex: "",
    country: "",
    phoneNumber: "",
    NIDPassport: "",
    address: "",
    //CompanyInfo components
    companyName: "",
    position: "",
    industryAndSector: "",
    companySize: "",
    cphoneNumber: "",
    websiteURL: "",
    socialMediaLinks: {
      linkedin: "",
      facebook: "",
    },
    // job-related fields
    projectTitle: "",
    jobField: "",
    description: "",
    skills: "",
    jobType: "",
    jobLocation: "",
    startDate: null,
    jobDuration: "",
    budgetRange: "",
  });

  const nextPage = (data) => {
    console.log("Next Page Data:", data);
    setFormData((prevData) => ({ ...prevData, ...data }));
    setStep(step + 1);
  };

  const prevPage = (data) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
    setStep(step - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Welcome onNext={nextPage} />;
      case 2:
        return (
          <PersonalInfo
            onNext={nextPage}
            formData={formData}
            setFormData={setFormData}
            onPrev={prevPage}
          />
        );
      case 3:
        return (
          <CompanyInfo
            onNext={nextPage}
            formData={formData}
            setFormData={setFormData}
            onPrev={prevPage}
          />
        );
      case 4:
        return (
          <Job
            onNext={nextPage}
            formData={formData}
            setFormData={setFormData}
            onPrev={prevPage}
          />
        );
      case 5:
        return <Success />;
      default:
        return null;
    }
  };

  return (
    <div className="mx-auto h-screen text-center bg-purple-50">
      <h1 className="text-4xl py-6 font-bold">connect2bd</h1>
      <div className="bg-purple-200 h-4 w-full rounded-full mb-2">
        <div
          className={`bg-purple-400 text-xs leading-none py-1 text-center text-white w-${
            (step - 1) * 25
          }/4`}
        ></div>
      </div>
      {renderStep()}
    </div>
  );
};

export default Registration;
