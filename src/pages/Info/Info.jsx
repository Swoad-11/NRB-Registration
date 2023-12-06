import React from "react";
import { Form } from "@quillforms/renderer-core";
import "@quillforms/renderer-core/build-style/style.css";
import { registerCoreBlocks } from "@quillforms/react-renderer-utils";

registerCoreBlocks();

const Info = () => {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
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
              label: "Personal Information",
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
                  id: "company_name",
                  attributes: {
                    required: false,
                    label: "Company Name",
                  },
                },
                {
                  name: "short-text",
                  id: "designation",
                  attributes: {
                    required: false,
                    label: "Designation",
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
                  name: "short-text",
                  id: "contact_mail",
                  attributes: {
                    required: true,
                    label: "Contact Email",
                  },
                },

                {
                  name: "short-text",
                  id: "phone_number",
                  attributes: {
                    required: true,
                    label: "Phone Number",
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
