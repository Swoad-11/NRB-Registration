import { useState, useEffect } from "react";

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
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <p className="mb-4">
            <span className="font-semibold pr-2">Full Name:</span>
            {userData.full_name}
          </p>
          <p className="mb-4">
            <span className="font-semibold pr-2">Sex:</span>
            {userData.sex}
          </p>
          <p className="mb-4">
            <span className="font-semibold pr-2">Country:</span>
            {userData.country}
          </p>
          <p className="mb-4">
            <span className="font-semibold pr-2">Address:</span>
            {userData.address}
          </p>
          <p className="mb-4">
            <span className="font-semibold pr-2">Contact Email:</span>
            {userData.contact_email}
          </p>
          <p className="mb-4">
            <span className="font-semibold pr-2">Phone Number:</span>
            {userData.phone_number}
          </p>
          <p className="mb-4">
            <span className="font-semibold pr-2">Company Name:</span>
            {userData.company_name}
          </p>
          <p className="mb-4">
            <span className="font-semibold pr-2">Position in Company:</span>
            {userData.position_in_company}
          </p>
          <p className="mb-4">
            <span className="font-semibold pr-2">Industry and Sector:</span>
            {userData.industry_and_sector}
          </p>
          <p className="mb-4">
            <span className="font-semibold pr-2">Company Size:</span>
            {userData.company_size}
          </p>
          <p className="mb-4">
            <span className="font-semibold pr-2">Company Website URL:</span>
            <a href={userData.company_website_url}>
              {userData.company_website_url}
            </a>
          </p>
          <p className="mb-4">
            <span className="font-semibold pr-2">Social Media Profiles:</span>
            <a href={userData.social_media_profiles}>
              {userData.social_media_profiles}
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default UserDataComponent;
