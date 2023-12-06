import { FaFacebookF, FaGoogle } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

// ############## test routes ##############
import { FaWpforms, FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const SocialMedia = ({ value }) => {
  return (
    <>
      <p className="font-base mb-2 mt-4">Or {value} with social platforms</p>
      <div className="flex justify-center gap-1">
        <button
          type="button"
          className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 font-medium rounded-lg text-sm 
          px-5 py-2.5 text-center inline-flex items-center me-2 mb-2"
        >
          <FaFacebookF />
          <span className="ml-2">Facebook</span>
        </button>
        <button
          type="button"
          className="text-white bg-[#24292F] hover:bg-[#24292F]/90 font-medium rounded-lg text-sm
           px-5 py-2.5 text-center inline-flex items-center me-2 mb-2"
        >
          <FaGithub />
          <span className="ml-2">Github</span>
        </button>
        <button
          type="button"
          className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 font-medium rounded-lg text-sm
           px-5 py-2.5 text-center inline-flex items-center me-2 mb-2"
        >
          <FaGoogle />
          <span className="ml-2">Google</span>
        </button>
        {/* ###################### info form ###################### */}
        <button
          type="button"
          className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2"
        >
          <Link to="/info" className="flex items-center">
            <FaWpforms />
            <span className="ml-2">Form</span>
          </Link>
        </button>
        {/* ###################### Profile ###################### */}
        <button
          type="button"
          className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2"
        >
          <Link to="/profile" className="flex items-center">
            <FaRegUser />
            <span className="ml-2">Profile</span>
          </Link>
        </button>
      </div>
    </>
  );
};

export default SocialMedia;
