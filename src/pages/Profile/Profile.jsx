import { useState, useEffect } from "react";
import img from "../../assets/dummy.jpg";

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          {/* Personal Information Section */}
          <div>
            <div className="mb-4 pb-2 border-b-2 border-gray-300">
              <h2 className="text-xl font-semibold">Personal Information</h2>
            </div>

            <div className="mb-4">
              <span className="font-semibold pr-2">Full Name:</span>
              {userData.full_name}
            </div>
            <div className="mb-4">
              <span className="font-semibold pr-2">Sex:</span>
              {userData.sex}
            </div>
            <div className="mb-4">
              <span className="font-semibold pr-2">Country:</span>
              {userData.country}
            </div>
            <div className="mb-4">
              <span className="font-semibold pr-2">Address:</span>
              {userData.address}
            </div>
            <div className="mb-4">
              <span className="font-semibold pr-2">NID / Passport:</span>
              {userData.nid_passport}
            </div>
            <div className="mb-4">
              <span className="font-semibold pr-2">Contact Email:</span>
              {userData.contact_email}
            </div>
            <div className="mb-4">
              <span className="font-semibold pr-2">Phone Number:</span>
              {userData.phone_personal}
            </div>
          </div>

          {/* Image Upload Section (on the right side) */}
          <div className="flex flex-col items-center justify-center">
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
          <div className="mb-4 pb-2 border-b-2 border-gray-300">
            <h2 className="text-xl font-semibold">Company Information</h2>
          </div>
          <div className="mb-4">
            <span className="font-semibold pr-2">Company Name:</span>
            {userData.company_name}
          </div>
          <div className="mb-4">
            <span className="font-semibold pr-2">Position in Company:</span>
            {userData.position_in_company}
          </div>
          <div className="mb-4">
            <span className="font-semibold pr-2">Industry and Sector:</span>
            {userData.industry_and_sector}
          </div>
          <div className="mb-4">
            <span className="font-semibold pr-2">Company Size:</span>
            {userData.company_size}
          </div>
          <div className="mb-4">
            <span className="font-semibold pr-2">Company Contact Number:</span>
            {userData.phone_company}
          </div>
          <div className="mb-4">
            <span className="font-semibold pr-2">Company Website URL:</span>
            <a href={userData.company_website_url}>
              {userData.company_website_url}
            </a>
          </div>
          <div className="mb-4">
            <span className="font-semibold pr-2">Social Media Profiles:</span>
            <a href={userData.social_media_profiles}>
              {userData.social_media_profiles}
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDataComponent;
