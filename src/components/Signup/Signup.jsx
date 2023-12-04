import SocialMedia from "../SocialMedia/SocialMedia";

const Signup = () => {
  return (
    <form action="#" className="sign-up-form">
      <h2 className="text-2xl font-semibold">Sign up</h2>

      <div className="relative z-0 w-full mb-5 group">
        <input
          type="email"
          name="floating_email"
          id="floating_email"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0
             border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-purple-800 peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="floating_email"
          className="peer-focus:font-medium absolute text-sm text-gray-500 
             duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0
              rtl:peer-focus:translate-x-1/4 peer-focus:text-purple-800
               peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75
                peer-focus:-translate-y-6"
        >
          Username
        </label>
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="email"
          name="floating_email"
          id="floating_email"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0
             border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-purple-800 peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="floating_email"
          className="peer-focus:font-medium absolute text-sm text-gray-500 
             duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0
              rtl:peer-focus:translate-x-1/4 peer-focus:text-purple-800
               peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75
                peer-focus:-translate-y-6"
        >
          Email address
        </label>
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="password"
          name="floating_password"
          id="floating_password"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0
             border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-purple-800 peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="floating_password"
          className="peer-focus:font-medium absolute text-sm text-gray-500 
             duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0
              rtl:peer-focus:translate-x-1/4 peer-focus:text-purple-800
               peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75
                peer-focus:-translate-y-6"
        >
          Password
        </label>
      </div>
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
