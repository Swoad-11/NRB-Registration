import { Form } from "@quillforms/renderer-core";
import "@quillforms/renderer-core/build-style/style.css";
import { registerCoreBlocks } from "@quillforms/react-renderer-utils";
import { company, ipsita_logo, job, personal } from "../../assets";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

registerCoreBlocks();

const Info = () => {
  const formObj = {
    blocks: [
      {
        name: "welcome-screen",
        id: "welcome",
        attributes: {
          label: "Welcome!",
          description: "Please fill in the following details...",
        },
      },

      {
        name: "group",
        id: "personal-info",
        attributes: {
          label: "Personal Information",
          attachment: {
            type: "image",
            url: personal,
          },
          layout: "float-left",
        },

        innerBlocks: [
          {
            name: "short-text",
            id: "full_name",
            attributes: {
              required: true,
              label: "Full Name",
            },
          },

          {
            name: "dropdown",
            id: "sex",
            attributes: {
              required: true,
              label: "Sex",
              choices: [
                { label: "Male", value: "male" },
                { label: "Female", value: "female" },
                { label: "Other", value: "other" },
              ],
            },
          },

          {
            name: "dropdown",
            id: "country",
            attributes: {
              required: true,
              label: "Country",
              choices: [
                { label: "Bangladesh", value: "bd" },
                { label: "UK", value: "uk" },
                { label: "US", value: "us" },
              ],
            },
          },

          {
            name: "short-text",
            id: "phone_personal",
            attributes: {
              required: true,
              label: "Phone Number",
            },
          },

          {
            name: "short-text",
            id: "address",
            attributes: {
              required: true,
              label: "Address",
            },
          },

          {
            name: "short-text",
            id: "nid-passport",
            attributes: {
              required: true,
              label: "NID / Passport",
            },
          },

          {
            name: "email",
            id: "contact_email",
            attributes: {
              required: true,
              label: "Contact Email",
            },
          },
        ],
      },

      {
        name: "group",
        id: "company-info",
        attributes: {
          label: "Company Information",
          attachment: {
            type: "image",
            url: company,
          },
          layout: "float-right",
        },

        innerBlocks: [
          {
            name: "short-text",
            id: "company_name",
            attributes: {
              required: true,
              label: "Company Name",
            },
          },

          {
            name: "short-text",
            id: "position_in_company",
            attributes: {
              required: true,
              label: "Position in the Company",
            },
          },

          {
            name: "dropdown",
            id: "industry_and_sector",
            attributes: {
              required: true,
              label: "Industry and Sector",
              choices: [
                { label: "Agro based Industry", value: "agro" },
                { label: "Archi./Engg./Construction", value: "engg" },
                { label: "Automobile/Industrial Machine", value: "automob" },
                { label: "Bank/Fin. Institution", value: "fin" },
                { label: "Wholesale/ Retail/ Export-Import", value: "c&a" },
                { label: "Electronics/Consumer Durables", value: "electro" },
                { label: "Energy/Power/Fuel", value: "energy" },
                { label: "Garments/Textile", value: "tex" },
                { label: "Telecommunication", value: "tel" },
                { label: "Pharmaceuticals", value: "phm" },
                { label: "Information Technology", value: "it" },
                { label: "Logistics/Transportation", value: "log" },
                { label: "Others", value: "other" },
              ],
            },
          },

          {
            name: "dropdown",
            id: "company_size",
            attributes: {
              required: true,
              label: "Company Size",
              choices: [
                { label: "Less than 10", value: "10" },
                { label: "Less than equal 50", value: "50" },
                { label: "Greater than 100", value: "100" },
              ],
            },
          },

          {
            name: "short-text",
            id: "phone_company",
            attributes: {
              required: true,
              label: "Company Contact Number",
            },
          },

          {
            name: "website",
            id: "company_website_url",
            attributes: {
              required: true,
              label: "Company Website URL",
            },
          },

          {
            name: "website",
            id: "social_media_profiles",
            attributes: {
              required: true,
              label: "Links to Company Social Media Profiles",
            },
          },
        ],
      },

      {
        name: "group",
        id: "job-info",
        attributes: {
          label: "Project and Job Details",
          attachment: {
            type: "image",
            url: job,
          },
          layout: "float-left",
        },

        innerBlocks: [
          {
            name: "short-text",
            id: "job_title",
            attributes: {
              required: false,
              label: "Job / Project Title",
            },
          },

          {
            name: "dropdown",
            id: "job_field",
            attributes: {
              required: false,
              label: "Job Field",
              choices: [
                { label: "Agro based Industry", value: "agro" },
                { label: "Archi./Engg./Construction", value: "engg" },
                { label: "Automobile/Industrial Machine", value: "automob" },
                { label: "Bank/Fin. Institution", value: "fin" },
                { label: "Wholesale/ Retail/ Export-Import", value: "c&a" },
                { label: "Electronics/Consumer Durables", value: "electro" },
                { label: "Energy/Power/Fuel", value: "energy" },
                { label: "Garments/Textile", value: "tex" },
                { label: "Telecommunication", value: "tel" },
                { label: "Pharmaceuticals", value: "phm" },
                { label: "Information Technology", value: "it" },
                { label: "Logistics/Transportation", value: "log" },
              ],
            },
            defaultValue: null,
          },

          {
            name: "long-text",
            id: "job_description",
            attributes: {
              required: false,
              label: "Job / Project Description (Brief Summary)",
            },
            defaultValue: null,
          },

          {
            name: "long-text",
            id: "required_skills_expertise",
            attributes: {
              required: false,
              label: "Required Skills and Expertise",
            },
            defaultValue: null,
          },

          {
            name: "dropdown",
            id: "job_type",
            attributes: {
              required: false,
              label: "Job Type",
              choices: [
                { label: "Full-Time", value: "full_time" },
                { label: "Part-Time", value: "part_time" },
                { label: "Freelance", value: "freelance" },
              ],
              defaultValue: null,
            },
          },

          {
            name: "dropdown",
            id: "job_location",
            attributes: {
              required: false,
              label: "Job Location",
              choices: [
                { label: "Remote", value: "remote" },
                { label: "On-Site", value: "on_site" },
                {
                  label: "Specific Location",
                  value: "specific_location",
                },
              ],
              defaultValue: null,
            },
          },

          {
            name: "date",
            id: "job_start_date",
            attributes: {
              required: false,
              format: "YYYYMMDD",
              separator: "-",
              label: "Job / Project Start Date",
            },
            defaultValue: null,
          },

          {
            name: "dropdown",
            id: "job_duration",
            attributes: {
              required: false,
              label: "Job / Project Duration",
              choices: [
                { label: "Contractual", value: "contractual" },
                { label: "Yearly", value: "yearly" },
                { label: "Permanent", value: "permanent" },
              ],
              defaultValue: null,
            },
          },

          {
            name: "short-text",
            id: "budge_range",
            attributes: {
              required: false,
              label: "Budget Range (Approx.) in USD",
              placeholder: "eg. 500 - 600",
            },
            defaultValue: null,
          },
        ],
      },
    ],
    theme: {
      font: "", // Specify your font
      backgroundColor: "#ffffff", // Set your desired background color
      backgroundImage: company, // Set the path to your background image
      logo: {
        type: "image",
        src: ipsita_logo, // Set the path to your logo
      },
    },
    messages: {
      "block.defaultThankYouScreen.label":
        "Thank you for filling out! \n\n You may go to your profile!",
    },
    settings: {
      // ... (your existing settings)
    },
  };
  const handleSubmit = (data, { completeForm, setIsSubmitting }) => {
    // Extract only key-value pairs from the form data
    const postData = {};
    Object.keys(data).forEach((blockId) => {
      const block = data[blockId];
      Object.keys(block).forEach((fieldId) => {
        postData[fieldId] = block[fieldId].value;
      });
    });

    // Handle form submission logic here
    const token = localStorage.getItem("token"); // Replace with your actual bearer token
    const apiUrl = "https://tanvir14ahmed.space/nrb/api/user/registration_job/"; // Replace with your actual API endpoint

    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(postData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((responseData) => {
        console.log("Submission successful:", responseData);
        setIsSubmitting(false);
        completeForm();
      })
      .catch((error) => {
        console.error("Error during submission:", error);
        setIsSubmitting(false);
      });
    console.log(postData);
  };

  return (
    <div className="mt-2" style={{ width: "100%", height: "100vh" }}>
      <Link to="/profile" className="flex items-center z-99">
        <FaHome />
        <span className="ml-2">Profile</span>
      </Link>
      <Form
        formId="registration-form"
        formObj={formObj}
        onSubmit={handleSubmit}
      />

      {/* <Form
        formId="registration-form"
        formObj={formObj}
        onSubmit={(data, { completeForm, setIsSubmitting }) => {
          // Log only the values submitted
          console.log("Submitted values:", data);

          // Mock submission logic (remove this in production)
          setTimeout(() => {
            setIsSubmitting(false);
            completeForm();
          }, 500);
        }}
      /> */}
    </div>
  );
};

export default Info;
