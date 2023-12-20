// eslint-disable-next-line react/prop-types
const CompanyInfo = ({ onNext }) => {
  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-3xl mb-4">Company Information</h1>
      {/* Add your company info form fields here */}
      <button
        className="text-white bg-purple-700 hover:bg-purple-800
        font-medium rounded-lg text-sm px-5 py-2.5 mt-4 mb-2"
        onClick={onNext}
      >
        Next
      </button>
    </div>
  );
};

export default CompanyInfo;
