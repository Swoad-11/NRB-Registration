import FormInput from "./FormInput";
import SocialMedia from "../SocialMedia/SocialMedia";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <form action="#" className="sign-in-form">
        <h2 className="text-2xl font-semibold">Log in</h2>
        <FormInput fieldName={"Email Address"} icon={<MdEmail />} />
        <FormInput fieldName={"Password"} icon={<FaLock />} />
        <Link
          to={"/profile"}
          type="button"
          className="text-white bg-purple-700 hover:bg-purple-800
         font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
        >
          Login
        </Link>
        <SocialMedia value={"Login"} />
      </form>
    </div>
  );
};

export default Login;
