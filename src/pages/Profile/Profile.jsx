import { useState, useEffect } from "react";

const UserDataComponent = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const apiUrl = import.meta.env.VITE_API_URL;
        const response = await fetch(`${apiUrl}/registration`, {
          method: "GET",
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
    <div>
      {userData && (
        <div>
          <p>Full Name: {userData.full_name}</p>
          <p>Sex: {userData.sex}</p>
          <p>Country: {userData.country}</p>
          <p>Address: {userData.address}</p>
          <p>Contact Email: {userData.contact_email}</p>
          <p>Phone Number: {userData.phone_number}</p>
          <p>Company Name: {userData.company_name}</p>
          <p>Position in Company: {userData.position_in_company}</p>
          <p>Industry and Sector: {userData.industry_and_sector}</p>
          <p>Company Size: {userData.company_size}</p>
          <p>
            Company Website URL:{" "}
            <a href={userData.company_website_url}>
              {userData.company_website_url}
            </a>
          </p>
          <p>
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
