import { useState } from "react";
import img from "../../assets/form/company.png";
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
const PersonalInfo = ({ onNext, formData, setFormData }) => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCountryCode, setSelectedCountryCode] = useState("");
  const [data, setData] = useState({ country_name: [], name_code: {} });

  const handleNext = () => {
    const fullName = document.getElementById("fullName").value;
    const sex = document.getElementById("role").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const NIDPassport = document.getElementById("NIDPassport").value;
    const address = document.getElementById("address").value;

    const personalInfoData = {
      fullName,
      sex,
      country: selectedCountry,
      phoneNumber,
      NIDPassport,
      address,
    };

    // Merge the new data with the existing formData
    const newFormData = { ...formData, ...personalInfoData };
    console.log(newFormData);

    // Update the state with the new formData
    setFormData(newFormData);

    // Call onNext with the updated formData
    onNext(personalInfoData);
  };

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://tanvir14ahmed.space/nrb/api/user/country_code/"
        );
        const apiData = await response.json();

        // Check if data has the 'country_name' and 'name_code' properties
        if (apiData.country_name && apiData.name_code) {
          setCountries(apiData.country_name);
          setData(apiData); // Set data as a state variable
        } else {
          console.error("Invalid data format:", apiData);
        }
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    };

    // Call the fetch data function
    fetchData();
  }, []);

  const handleCountryChange = (e) => {
    const selectedCountryValue = e.target.value;
    setSelectedCountry(selectedCountryValue);

    // Set the corresponding country code
    const countryCode = data.name_code[selectedCountryValue];
    setSelectedCountryCode(countryCode);
  };

  return (
    <div className="flex mt-6 items-center max-[950px]:flex-col max-[910px]:px-4 bg-purple-50">
      {/* Content Row */}

      <form className="flex-1 mx-2 w-full max-[950px]:mb-4">
        <h2 className="text-2xl font-semibold mb-6">
          Give your personal informations
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
                <option value="" disabled selected>
                  Select your sex
                </option>
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
                value={selectedCountry}
                onChange={handleCountryChange}
              >
                <option value="" disabled>
                  Select a country
                </option>
                {countries.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 mb-1">
            <div className="flex flex-col mb-1">
              <label className="text-start text-sm font-bold text-gray-600 mb-1">
                Phone Number
              </label>
              <div className="flex">
                <div className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-md px-3 py-2">
                  {selectedCountryCode}
                </div>
                <input
                  type="text"
                  name="phoneNumber"
                  id="phoneNumber"
                  autoComplete="phoneNumber"
                  placeholder="Enter your Phone Number"
                  required
                  className="border rounded-r-md bg-white block w-full p-2.5"
                />
              </div>
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
                className="border rounded-md bg-white block w-full p-2.5"
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
          type="button"
          className="text-white bg-purple-700 hover:bg-purple-800
        font-medium rounded-lg text-sm px-5 py-2.5 mt-4 mb-2"
          onClick={handleNext}
        >
          Next
        </button>
      </form>

      {/* Image Row */}
      <div className="flex-1 max-[950px]:mb-4">
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
