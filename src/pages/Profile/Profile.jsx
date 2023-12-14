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
          <p className="mb-4 font-semibold">Full Name: {userData.full_name}</p>
          <p className="mb-4 font-semibold">Sex: {userData.sex}</p>
          <p className="mb-4">Country: {userData.country}</p>
          <p className="mb-4">Address: {userData.address}</p>
          <p className="mb-4">Contact Email: {userData.contact_email}</p>
          <p className="mb-4">Phone Number: {userData.phone_number}</p>
          <p className="mb-4">Company Name: {userData.company_name}</p>
          <p className="mb-4">
            Position in Company: {userData.position_in_company}
          </p>
          <p className="mb-4">
            Industry and Sector: {userData.industry_and_sector}
          </p>
          <p className="mb-4">Company Size: {userData.company_size}</p>
          <p className="mb-4">
            Company Website URL:{" "}
            <a href={userData.company_website_url}>
              {userData.company_website_url}
            </a>
          </p>
          <p className="mb-4">
            Social Media Profiles:{" "}
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
