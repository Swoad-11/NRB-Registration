import FormInput from "../FormInput/FormInput";
import SocialMedia from "../SocialMedia/SocialMedia";

const Login = () => {
  return (
    <div>
      <form action="#" className="sign-in-form">
        <h2 className="text-2xl font-semibold">Log in</h2>
        <FormInput fieldName={"Email Address"} />
        <FormInput fieldName={"Password"} />
        <button
          type="button"
          className="text-white bg-purple-700 hover:bg-purple-800
         font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
        >
          Login
        </button>
        <SocialMedia />
      </form>
    </div>
  );
};

export default Login;
