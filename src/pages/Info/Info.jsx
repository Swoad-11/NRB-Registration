import { Form } from "@quillforms/renderer-core";
import "@quillforms/renderer-core/build-style/style.css";
import { registerCoreBlocks } from "@quillforms/react-renderer-utils";

registerCoreBlocks();

const Info = () => {
  return (
    <div className="mt-2" style={{ width: "100%", height: "100vh" }}>
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
                  url: "./src/assets/register.svg",
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
                  url: "./src/assets/log.svg",
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
                  url: "./src/assets/register.svg",
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
                      { label: "Short", value: "short" },
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
