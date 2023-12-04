import FormInput from "./FormInput";
import SocialMedia from "../SocialMedia/SocialMedia";
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Signup = () => {
  return (
    <form action="#" className="sign-up-form">
      <h2 className="text-2xl font-semibold">Sign up</h2>

      <FormInput fieldName={"Username"} icon={<FaUser />} />
      <FormInput fieldName={"Email Address"} icon={<MdEmail />} />
      <FormInput fieldName={"Password"} icon={<FaLock />} />
      <button
        type="button"
        className="text-white bg-purple-700 hover:bg-purple-800
         font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
      >
        Sign Up
      </button>
      <SocialMedia value={"Signup"} />
    </form>
  );
};

export default Signup;
