import img from "../../assets/form/job.png";
import { FaLinkedin, FaFacebookF } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const CompanyInfo = ({ onNext, onPrev }) => {
  const companySizeOptions = [
    "Self-employed",
    "1-10 employees",
    "11-50 employees",
    "51-200 employees",
    "201-500 employees",
    "501-1000 employees",
    "1001-5000 employees",
  ];

  const industry_and_sector = [
    "Agro based Industry",
    "Archi./Engg./Construction",
    "Automobile/Industrial Machine",
    "Bank/Fin. Institution",
    "Wholesale/ Retail/ Export-Import",
    "Electronics/Consumer Durables",
    "Energy/Power/Fuel",
    "Garments/Textile",
    "Telecommunication",
    "Pharmaceuticals",
    "Information Technology",
    "Logistics/Transportation",
    "Others",
  ];

  return (
    <div className="flex mt-6 items-center max-[800px]:flex-col max-[910px]:px-4 bg-purple-50">
      {/* Image Row */}
      <div className="flex-1">
        <img
          src={img}
          alt="Welcome Image"
          className="max-w-md h-auto mx-auto rounded-md shadow-md max-[480px]:max-w-[380px]
           max-[400px]:max-w-[320px] max-[360px]:max-w-[280px] max-[800px]:max-w-[620px] max-[650px]:max-w-[460px]"
        />
      </div>

      {/* Content Row */}

      <form className="flex-1 mx-2">
        <h2 className="text-2xl font-semibold mb-6">
          Give Informations of your Company
        </h2>

        <div className="w-full mx-auto">
          <div className="flex flex-col mb-1">
            <label className="text-start text-sm font-bold text-gray-600 mb-1">
              Company Name
            </label>
            <input
              type="companyName"
              name="companyName"
              id="companyName"
              autoComplete="companyName"
              placeholder="Enter your Company Name"
              required
              className="border rounded-md bg-white px-3 py-2"
            />
          </div>
          <div className="flex flex-col mb-1">
            <label className="text-start text-sm font-bold text-gray-600 mb-1">
              Position in the Company
            </label>
            <input
              type="position"
              name="position"
              id="position"
              autoComplete="position"
              placeholder="Enter your Position in the Company"
              required
              className="border rounded-md bg-white px-3 py-2"
            />
          </div>
          <div className="grid grid-cols-2 gap-2 mb-1">
            <div>
              <label className="text-start block text-sm font-bold text-gray-600 mb-1">
                Industry and Sector
              </label>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                id="role"
                name="role"
              >
                <option value="" disabled selected>
                  Select your company sector
                </option>
                {industry_and_sector.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-start block text-sm font-bold text-gray-600 mb-1">
                Company Size
              </label>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                id="role"
                name="role"
              >
                <option value="" disabled selected>
                  Select your company size
                </option>
                {companySizeOptions.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex flex-col mb-1"></div>
          <div className="grid grid-cols-2 gap-2 mb-1">
            <div className="flex flex-col mb-1">
              <label className="text-start text-sm font-bold text-gray-600 mb-1">
                Company Contact Number
              </label>
              <input
                type="phoneNumber"
                name="phoneNumber"
                id="phoneNumber"
                autoComplete="phoneNumber"
                placeholder="Enter your Company Contact Number"
                required
                className="border rounded-md bg-white px-3 py-2"
              />
            </div>
            <div className="flex flex-col mb-1">
              <label className="text-start text-sm font-bold text-gray-600 mb-1">
                Company Website URL
              </label>
              <input
                type="Company-Website-URL"
                name="Company-Website-URL"
                id="Company-Website-URL"
                autoComplete="Company-Website-URL"
                placeholder="Enter your Company Website URL"
                required
                className="border rounded-md bg-white px-3 py-2"
              />
            </div>
          </div>
          <div className="flex flex-col mb-1">
            <label className="text-start text-sm font-bold text-gray-600 mb-1">
              Links to Company Social Media Profiles
            </label>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md">
                  <FaLinkedin />
                </span>
                <input
                  type="text"
                  id="website-admin"
                  className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 block flex-1 min-w-0 w-full text-sm p-2.5"
                  placeholder="Linkedin Link"
                />
              </div>
              <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md">
                  <FaFacebookF />
                </span>
                <input
                  type="text"
                  id="website-admin"
                  className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 block flex-1 min-w-0 w-full text-sm p-2.5"
                  placeholder="Facebook Link"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="grid grid-cols-2 gap-32 max-[400px]:gap-16">
          <button
            className="text-white bg-purple-700 hover:bg-purple-800
        font-medium rounded-lg text-sm w-[75px] py-2.5 mt-4 mb-2"
            onClick={onPrev}
          >
            Previous
          </button>
          <button
            className="text-white bg-purple-700 hover:bg-purple-800
        font-medium rounded-lg text-sm w-[75px] py-2.5 mt-4 mb-2"
            onClick={onNext}
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default CompanyInfo;
