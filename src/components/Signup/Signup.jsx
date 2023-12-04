import FormInput from "../FormInput/FormInput";
import SocialMedia from "../SocialMedia/SocialMedia";

const Signup = () => {
  return (
    <form action="#" className="sign-up-form">
      <h2 className="text-2xl font-semibold">Sign up</h2>

      <FormInput fieldName={"Username"} />
      <FormInput fieldName={"Email Address"} />
      <FormInput fieldName={"Password"} />
      <button
        type="button"
        className="text-white bg-purple-700 hover:bg-purple-800
         font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
      >
        Sign Up
      </button>
      <SocialMedia />
    </form>
  );
};

export default Signup;
