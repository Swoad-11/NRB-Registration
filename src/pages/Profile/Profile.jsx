import { useState, useEffect } from "react";
// import img from "../../assets/dummy.jpg";

const UserDataComponent = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const apiUrl = import.meta.env.VITE_API_URL;
        const response = await fetch(`${apiUrl}/registration/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setUserData(data.response);

        // Log the response data
        console.log("Response Data:", data.response);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures the effect runs only once after the initial render

  return (
    <div className="mx-auto p-4">
      {userData && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 shadow-md rounded px-8 pt-6 pb-8 mb-4 bg-purple-50">
          {/* Personal Information Section */}
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8">
            <div className="mb-4 pb-2 text-center">
              <h2 className="text-xl font-semibold">Personal Information</h2>
            </div>

            <div className="mb-4 border-b">
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Full name
              </label>
              <span className="text-gray-700">{userData.full_name}</span>
            </div>
            <div className="grid gap-6 mb-4 md:grid-cols-2">
              <div className="border-b">
                <div>
                  <span className="mb-2 text-sm font-medium text-gray-900 pr-2">
                    Sex:
                  </span>
                  <span className="text-gray-700">{userData.sex}</span>
                </div>
              </div>

              <div className="border-b">
                <div>
                  <span className="mb-2 text-sm font-medium text-gray-900 pr-2">
                    Country:
                  </span>
                  <span className="text-gray-700">{userData.country}</span>
                </div>
              </div>
            </div>
            <div className="mb-4 border-b">
              <label
                htmlFor="first_name"
                className="block text-sm font-medium text-gray-900"
              >
                Address
              </label>
              <span className="text-gray-700">{userData.address}</span>
            </div>
            <div className="mb-4">
              <span className="font-semibold pr-2">Contact Email:</span>
              {userData.contact_email}
            </div>
            <div className="mb-4">
              <span className="font-semibold pr-2">Phone Number:</span>
              {userData.phone_number}
            </div>
          </div>

          {/* Image Upload Section (on the right side) */}
          <div
            className="flex flex-col items-center justify-center bg-white
          shadow-md rounded"
          >
            {/* Dummy Profile Image (replace with actual image upload) */}
            <img
              src={userData.profile_pic}
              alt="Profile"
              className="w-40 h-40 rounded object-cover mb-4"
            />

            {/* Add your image upload component here */}
            <input type="file" className="border border-gray-300 p-2" />
            {/* Add styling for image upload here */}
          </div>
        </div>
      )}

      {/* Company Information Section */}
      {userData && (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4 pb-2 text-center">
            <h2 className="text-xl font-semibold">Company Information</h2>
          </div>
          <div className="mb-4 border-b">
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Company
            </label>
            <span className="text-gray-700">{userData.company_name}</span>
          </div>
          <div className="mb-4 border-b">
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Position in company
            </label>
            <span className="text-gray-700">
              {userData.position_in_company}
            </span>
          </div>
          <div className="grid gap-6 mb-4 md:grid-cols-2">
            <div className="border-b">
              <div>
                <span className="mb-2 text-sm font-medium text-gray-900 pr-2">
                  Industry and Sector:
                </span>
                <span className="text-gray-700">
                  {userData.industry_and_sector}
                </span>
              </div>
            </div>

            <div className="border-b">
              <div>
                <span className="mb-2 text-sm font-medium text-gray-900 pr-2">
                  Company Size:
                </span>
                <span className="text-gray-700">{userData.company_size}</span>
              </div>
            </div>
          </div>

          <div className="mb-4 border-b">
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Company Website URL
            </label>
            <span className="text-gray-700">
            <a href={userData.company_website_url}>
              {userData.company_website_url}
            </a>
            </span>
          </div>
          <div className="mb-4 border-b">
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Social Media Profiles
            </label>
            <span className="text-gray-700">
              <a href={userData.social_media_profiles}>
                {userData.social_media_profiles}
              </a>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDataComponent;
