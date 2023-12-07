import { Form } from "@quillforms/renderer-core";
import "@quillforms/renderer-core/build-style/style.css";
import { registerCoreBlocks } from "@quillforms/react-renderer-utils";
import { company, ipsita_logo, job, personal } from "../../assets";

registerCoreBlocks();

const Info = () => {
  return (
    <div
      className="ml-6 md:pr-16 sm:pr-4"
      style={{ width: "100%", height: "100vh" }}
    >
      <Form
        formId="registration-form"
        formObj={{
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
                  id: "name",
                  attributes: {
                    required: true,
                    label: "Full Name",
                  },
                },

                {
                  name: "multiple-choice",
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
                  name: "short-text",
                  id: "country",
                  attributes: {
                    required: true,
                    label: "Country",
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
                  name: "email",
                  id: "email",
                  attributes: {
                    required: true,
                    label: "Contact Email",
                  },
                },

                {
                  name: "number",
                  id: "phone",
                  attributes: {
                    required: true,
                    label: "Phone Number",
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
                    required: false,
                    label: "Company Name",
                  },
                },

                {
                  name: "short-text",
                  id: "position",
                  attributes: {
                    required: false,
                    label: "Position in the Company",
                  },
                },

                {
                  name: "short-text",
                  id: "industry",
                  attributes: {
                    required: false,
                    label: "Industry and Sector",
                  },
                },

                {
                  name: "dropdown",
                  id: "company_size",
                  attributes: {
                    required: false,
                    label: "Company Size",
                    choices: [
                      { label: "Small", value: "small" },
                      { label: "Medium", value: "medium" },
                      { label: "Large", value: "large" },
                    ],
                  },
                },

                {
                  name: "website",
                  id: "company_website",
                  attributes: {
                    required: false,
                    label: "Company Website URL",
                  },
                },

                {
                  name: "website",
                  id: "company_socials",
                  attributes: {
                    required: false,
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
                    required: true,
                    label: "Job / Project Title",
                  },
                },

                {
                  name: "long-text",
                  id: "job_description",
                  attributes: {
                    required: true,
                    label: "Job / Project Description (Brief Summary)",
                  },
                },

                {
                  name: "long-text",
                  id: "required_skills",
                  attributes: {
                    required: true,
                    label: "Required Skills and Expertise",
                  },
                },

                {
                  name: "dropdown",
                  id: "job_type",
                  attributes: {
                    required: true,
                    label: "Job Type",
                    choices: [
                      { label: "Full-Time", value: "full_time" },
                      { label: "Part-Time", value: "part_time" },
                      { label: "Freelance", value: "freelance" },
                    ],
                  },
                },

                {
                  name: "dropdown",
                  id: "job_location",
                  attributes: {
                    required: true,
                    label: "Job Location",
                    choices: [
                      { label: "Remote", value: "remote" },
                      { label: "On-Site", value: "on_site" },
                      {
                        label: "Specific Location",
                        value: "specific_location",
                      },
                    ],
                  },
                },

                {
                  name: "date",
                  id: "start_date",
                  attributes: {
                    required: true,
                    format: "DDMMYYYY",
                    separator: "/",
                    label: "Job / Project Start Date",
                  },
                },

                {
                  name: "dropdown",
                  id: "duration",
                  attributes: {
                    required: true,
                    label: "Job / Project Duration",
                    choices: [
                      { label: "Contractual", value: "contractual" },
                      { label: "Yearly", value: "yearly" },
                      { label: "Permanent", value: "permanent" },
                    ],
                  },
                },

                {
                  name: "number",
                  id: "budget",
                  attributes: {
                    required: true,
                    label: "Budget Range (Monthly) in USD",
                  },
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
            questionsColor: "#333333", // Set your desired color for questions
            answersColor: "#666666", // Set your desired color for answers
            buttonsFontColor: "#ffffff", // Set your desired font color for buttons
            buttonsBgColor: "#007bff", // Set your desired background color for buttons
            buttonsBorderRadius: 5, // Set the border radius for buttons
            errorsFontColor: "#ff0000", // Set your desired font color for errors
            errorsBgColor: "#ffe0e0", // Set your desired background color for errors
            progressBarFillColor: "#007bff", // Set your desired color for the progress bar fill
            progressBarBgColor: "#e0e0e0", // Set your desired background color for the progress bar
          },
        }}
        onSubmit={(data, { completeForm, setIsSubmitting }) => {
          // Handle form submission logic here
          setTimeout(() => {
            setIsSubmitting(false);
            completeForm();
          }, 500);
          console.log(data);
        }}
      />
    </div>
  );
};

export default Info;
