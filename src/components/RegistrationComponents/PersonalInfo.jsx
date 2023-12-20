import img from "../../assets/form/company.png";

// eslint-disable-next-line react/prop-types
const PersonalInfo = ({ onNext }) => {
  return (
    <div className="flex mt-6 items-center max-[800px]:flex-col max-[910px]:px-4 bg-purple-50">
      {/* Content Row */}

      <form className="flex-1 mx-2">
        <h2 className="text-2xl font-semibold mb-6">
          Give your personal information
        </h2>

        <div className="w-full mx-auto">
          <div className="flex flex-col mb-1">
            <label className="text-start text-sm font-bold text-gray-600 mb-1">
              Full Name
            </label>
            <input
              type="fullName"
              name="fullName"
              id="fullName"
              autoComplete="fullName"
              placeholder="Enter your Full Name"
              required
              className="border rounded-md bg-white px-3 py-2"
            />
          </div>
          <div className="grid grid-cols-2 gap-2 mb-1">
            <div>
              <label className="text-start block text-sm font-bold text-gray-600 mb-1">
                Sex
              </label>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                id="role"
                name="role"
              >
                <option value="client">Male</option>
                <option value="freelancer">Female</option>
              </select>
            </div>
            <div>
              <label className="text-start block text-sm font-bold text-gray-600 mb-1">
                Country
              </label>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                id="role"
                name="role"
              >
                <option value="client">UAE</option>
                <option value="freelancer">Bangladesh</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col mb-1"></div>
          <div className="grid grid-cols-2 gap-2 mb-1">
            <div className="flex flex-col mb-1">
              <label className="text-start text-sm font-bold text-gray-600 mb-1">
                Phone Number
              </label>
              <input
                type="phoneNumber"
                name="phoneNumber"
                id="phoneNumber"
                autoComplete="phoneNumber"
                placeholder="Enter your Phone Number"
                required
                className="border rounded-md bg-white px-3 py-2"
              />
            </div>
            <div className="flex flex-col mb-1">
              <label className="text-start text-sm font-bold text-gray-600 mb-1">
                NID/Passport
              </label>
              <input
                type="NIDPassport"
                name="NIDPassport"
                id="NIDPassport"
                autoComplete="NIDPassport"
                placeholder="Enter your NID/Passport"
                required
                className="border rounded-md bg-white px-3 py-2"
              />
            </div>
          </div>
          <div className="flex flex-col mb-1">
            <label className="text-start text-sm font-bold text-gray-600 mb-1">
              Address
            </label>
            <input
              type="address"
              name="address"
              id="address"
              autoComplete="address"
              placeholder="Enter your Address"
              required
              className="border rounded-md bg-white px-3 py-2"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          className="text-white bg-purple-700 hover:bg-purple-800
        font-medium rounded-lg text-sm px-5 py-2.5 mt-4 mb-2"
          onClick={onNext}
        >
          Next
        </button>
      </form>

      {/* Image Row */}
      <div className="flex-1">
        <img
          src={img}
          alt="Welcome Image"
          className="max-w-md h-auto mx-auto rounded-md shadow-md max-[480px]:max-w-[380px]
           max-[400px]:max-w-[320px] max-[360px]:max-w-[280px] max-[800px]:max-w-[620px] max-[650px]:max-w-[460px]"
        />
      </div>
    </div>
  );
};

export default PersonalInfo;
