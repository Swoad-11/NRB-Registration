import img from "../../assets/form/personal.jpg";

// eslint-disable-next-line react/prop-types
const Welcome = ({ onNext }) => {
  return (
    <div className="flex mt-2 items-center">
      {/* Left Column (Image) */}
      <div className="w-1/2 pr-4 py-2">
        <img
          src={img}
          alt="Welcome Image"
          className="max-w-md h-auto mx-auto rounded-md shadow-md"
        />
      </div>

      {/* Right Column (Content) */}
      <div className="w-1/2 flex flex-col items-center">
        <h1 className="font-semibold text-3xl mb-2">Welcome</h1>
        <p className="mb-4 font-base">
          Please fill in the following information...
        </p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={onNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Welcome;
