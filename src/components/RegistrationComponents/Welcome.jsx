// eslint-disable-next-line react/prop-types
const Welcome = ({ onNext }) => {
  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-3xl mb-4">Welcome to Registration</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={onNext}
      >
        Next
      </button>
    </div>
  );
};

export default Welcome;
