const Profile = () => {
  return (
    <div className="mx-auto">
      <h1 className="text-3xl font-bold mb-8">Client Profile</h1>
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
        <p>Full Name: </p>
        <p>Sex: </p>
        <p>Occupation: </p>
        <p>Company Name: </p>
        <p>Designation: </p>
        <p>Contact Email: </p>
        <p>Country: </p>
        <p>Phone Number: </p>
        <p>Address: </p>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Company Information</h2>
        {/* Display company information if available */}
        <p>Company Name: </p>
        <p>Industry and Sector: </p>
        {/* Add more fields as needed */}
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Project and Job Details</h2>
        {/* Display project/job details if available */}
        <p>Project or Job Description:</p>
        <p>Job Title or Project Name: </p>
        {/* Add more fields as needed */}
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">
          Communication Preferences
        </h2>
        {/* Display communication preferences fields */}
        <p>Username and Profile Display Name: </p>
        <p>Profile Photo or Company Logo: </p>
        {/* Add more fields as needed */}
      </div>

      {/* Add sections for Security and Verification, Checkboxes, and other profile information */}
    </div>
  );
};

export default Profile;
