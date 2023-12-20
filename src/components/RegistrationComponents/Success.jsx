const Success = () => {
  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-3xl mb-4">Registration Successful!</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          // Redirect to the profile page or any other action you need
          // You can use React Router for navigation
        }}
      >
        Go to Profile
      </button>
    </div>
  );
};

export default Success;
