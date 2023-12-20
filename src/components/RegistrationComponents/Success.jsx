import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-3xl mb-4">Registration Successful!</h1>
      <Link
        to="/profile"
        className="text-white bg-purple-700 hover:bg-purple-800
        font-medium rounded-lg text-sm px-5 py-2.5 mt-4 mb-2"
        onClick={() => {
          // Redirect to the profile page or any other action you need
          // You can use React Router for navigation
        }}
      >
        Go to Profile
      </Link>
    </div>
  );
};

export default Success;
