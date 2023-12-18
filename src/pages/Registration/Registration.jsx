import { Controller, useForm } from "react-hook-form";
import DatePicker from "react-datepicker";

export default function App() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Full Name"
        {...register("Full Name", { required: true })}
      />
      <select {...register("Sex", { required: true })}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <textarea {...register} />
      <select {...register("Country")}>
        <option value="BD">BD</option>
        <option value="US">US</option>
        <option value="UK">UK</option>
        <option value="UAE">UAE</option>
        <option value="EU">EU</option>
      </select>
      <input
        type="tel"
        placeholder="Phone Number"
        {...register("Phone Number", { required: true })}
      />
      <input
        type="text"
        placeholder="Contact Email"
        {...register("Contact Email", { required: true })}
      />
      <input
        type="text"
        placeholder="Company Name"
        {...register("Company Name", { required: true })}
      />
      <input
        type="text"
        placeholder="Company Logo"
        {...register("Company Logo", { required: true })}
      />
      <input
        type="text"
        placeholder="Position in the company"
        {...register("Position in the company", { required: true })}
      />
      <select {...register("Industry and sector", { required: true })}>
        <option value="IT">IT</option>
        <option value="Civil">Civil</option>
        <option value="Business">Business</option>
        <option value="C&A">C&A</option>
      </select>
      <select {...register("Company size", { required: true })}>
        <option value="Small">Small</option>
        <option value="Startup">Startup</option>
        <option value="Enterprise">Enterprise</option>
      </select>
      <input
        type="url"
        placeholder="Company website URL"
        {...register("Company website URL", { required: true })}
      />
      <input
        type="url"
        placeholder="Company social media profiles"
        {...register("Company social media profiles", { required: true })}
      />
      <input
        type="text"
        placeholder="Job title or project name"
        {...register("Job title or project name", {})}
      />
      <select {...register("Job sector")}>
        <option value="IT">I.T</option>
        <option value="Civil">Civil</option>
        <option value="Business">Business</option>
        <option value="C&A">C&A</option>
      </select>
      <textarea {...register} />
      <textarea {...register("Required skills and expertise", {})} />
      <select {...register("Job type")}>
        <option value="Full-time">Full-time</option>
        <option value="Part-time">Part-time</option>
        <option value="Freelance">Freelance</option>
      </select>
      <select {...register("Job location")}>
        <option value="Remote">Remote</option>
        <option value="On-site">On-site</option>
        <option value="Specific location">Specific location</option>
      </select>
      <Controller
        control={control}
        name="date-input"
        render={({ field }) => (
          <DatePicker
            placeholderText="Select date"
            onChange={(date) => field.onChange(date)}
            selected={field.value}
          />
        )}
      />
      <input
        type="number"
        placeholder="Project duration (Months)"
        {...register("Project duration (Months)", {})}
      />
      <input
        type="number"
        placeholder="Budget range (Approx.)"
        {...register("Budget range (Approx.)", {})}
      />
      <input type="text" placeholder="Username" {...register("Username", {})} />
      <input
        type="text"
        placeholder="Display name"
        {...register("Display name", {})}
      />
      <textarea {...register("Bio or company profile summary", {})} />
      <input
        type="checkbox"
        placeholder="Acceptance of terms of service and privacy policy"
        {...register}
      />
      <input
        type="checkbox"
        placeholder="Subscription preferences for newsletters and platform updates"
        {...register(
          "Subscription preferences for newsletters and platform updates",
          {}
        )}
      />
      <input
        type="checkbox"
        placeholder="Email and notification settings"
        {...register("Email and notification settings", {})}
      />

      <input type="submit" />
    </form>
  );
}
