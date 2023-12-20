// eslint-disable-next-line react/prop-types
const CompanyInfo = ({ onNext }) => {
  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-3xl mb-4">Company Information</h1>
      {/* Add your company info form fields here */}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={onNext}
      >
        Next
      </button>
    </div>
  );
};

export default CompanyInfo;
