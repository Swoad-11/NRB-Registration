import { useState } from "react";
import Login from "../../components/Login/Login";
import Signup from "../../components/Signup/Signup";
import img1 from "../../assets/log.svg";
import img2 from "../../assets/register.svg";

const LandingPage = () => {
  const [isSignUpMode, setSignUpMode] = useState(false);

  const handleSignUpClick = () => {
    setSignUpMode(true);
  };

  const handleSignInClick = () => {
    setSignUpMode(false);
  };

  return (
    <div className={`container ${isSignUpMode ? "sign-up-mode" : ""}`}>
      <div className="forms-container">
        <div className="signin-signup">
          {isSignUpMode ? <Signup /> : <Login />}
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden
             text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600
              to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white"
              onClick={handleSignUpClick}
            >
              <span
                className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white
                rounded-md group-hover:bg-opacity-0"
              >
                Sign Up
              </span>
            </button>
          </div>
          <img src={img1} className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden
             text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600
              to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white"
              onClick={handleSignInClick}
            >
              <span
                className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white
                rounded-md group-hover:bg-opacity-0"
              >
                Login
              </span>
            </button>
          </div>
          <img src={img2} className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
