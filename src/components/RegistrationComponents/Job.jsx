import { useState } from "react";
import img from "../../assets/form/job.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// eslint-disable-next-line react/prop-types
const Job = ({ onNext, onPrev }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const jobField = [
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
    <div className="flex mt-6 items-center max-[950px]:flex-col max-[910px]:px-4 bg-purple-50">
      {/* Content Row */}

      <form className="flex-1 mx-2 w-full max-[950px]:mb-4">
        <h2 className="text-2xl font-semibold mb-6">
          Give your Project and Job informations
        </h2>

        <div className="w-full mx-auto">
          <div className="flex flex-col mb-1">
            <label className="text-start text-sm font-bold text-gray-600 mb-1">
              Job/Project Title
            </label>
            <input
              type="projectTitle"
              name="projectTitle"
              id="projectTitle"
              autoComplete="projectTitle"
              placeholder="Enter your Project/Job Title"
              required
              className="border rounded-md bg-white px-3 py-2"
            />
          </div>
          <div className="flex flex-col mb-1">
            <label className="text-start text-sm font-bold text-gray-600 mb-1">
              Job/Project Field
            </label>
            <select
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              id="role"
              name="role"
            >
              <option value="" disabled selected>
                Select your job field
              </option>
              {jobField.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col mb-1">
            <label className="text-start text-sm font-bold text-gray-600 mb-1">
              Job/Project Description (Brief Summary)
            </label>
            <textarea
              type="text"
              id="large-input"
              name="description"
              autoComplete="description"
              placeholder="Job description....."
              required
              className="border rounded-md bg-white px-3 py-2 h-20"
            />
          </div>
          <div className="flex flex-col mb-1">
            <label className="text-start text-sm font-bold text-gray-600 mb-1">
              Required Skills and Expertise
            </label>
            <textarea
              type="text"
              id="large-input"
              name="skills"
              autoComplete="skills"
              placeholder="Skills..."
              required
              className="border rounded-md bg-white px-3 py-2 h-16"
            />
          </div>
          <div className="grid grid-cols-2 gap-2 mb-1">
            <div>
              <label className="text-start block text-sm font-bold text-gray-600 mb-1">
                Job Type
              </label>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                id="role"
                name="role"
              >
                <option value="" disabled selected>
                  Select your job type
                </option>
                <option value="full-time">Full Time</option>
                <option value="part-time">Part Time</option>
                <option value="freelance">Freelance</option>
              </select>
            </div>
            <div>
              <label className="text-start block text-sm font-bold text-gray-600 mb-1">
                Job Location
              </label>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                id="role"
                name="role"
              >
                <option value="" disabled selected>
                  Select your job location
                </option>
                <option value="remote">Remote</option>
                <option value="onsite">Onsite</option>
                <option value="specific_location">Specific Location</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 mb-1">
            <div className="flex flex-col mb-1">
              <label className="text-start text-sm font-bold text-gray-600 mb-1">
                Job/Project Starting Date
              </label>
              <DatePicker
                className="border rounded-md bg-white px-3 py-2 w-full"
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="dd/MM/yyyy"
                placeholderText="Select a date"
              />
            </div>
            <div className="flex flex-col mb-1">
              <label className="text-start text-sm font-bold text-gray-600 mb-1">
                Job/Project Duration
              </label>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                id="role"
                name="role"
              >
                <option value="contractual">Contractual</option>
                <option value="yearly">Yearly</option>
                <option value="permanent">Permanent</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col mb-1">
            <label className="text-start text-sm font-bold text-gray-600 mb-1">
              Budget Range (Approx) in USD
            </label>
            <input
              type="address"
              name="address"
              id="address"
              autoComplete="address"
              placeholder="Example: 500 USD-600 USD"
              required
              className="border rounded-md bg-white px-3 py-2"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="grid grid-cols-2 gap-32 max-[400px]:gap-16">
          <button
            type="button"
            className="text-white bg-purple-700 hover:bg-purple-800
        font-medium rounded-lg text-sm w-[75px] py-2.5 mt-4 mb-2"
            onClick={onPrev}
          >
            Previous
          </button>
          <button
            type="button"
            className="text-white bg-purple-700 hover:bg-purple-800
        font-medium rounded-lg text-sm px-5 py-2.5 mt-4 mb-2"
            onClick={onNext}
          >
            Submit
          </button>
        </div>
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

export default Job;
