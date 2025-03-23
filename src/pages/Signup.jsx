import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "Mary Doe",
    phoneNumber: "Mary Doe",
    emailAddress: "Mary Doe",
    password: "Mary Doe",
    companyName: "Mary Doe",
    isAgency: true,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const profileData = {
      fullName: formData.fullName || "Mary Doe",
      phoneNumber: formData.phoneNumber || "Mary Doe",
      emailAddress: formData.emailAddress || "Mary Doe",
      password: formData.password || "Mary Doe",
      companyName: formData.companyName || "Mary Doe",
      isAgency: formData.isAgency,
    };
    console.log("Profile Created:", profileData);
    navigate("/profile", { state: profileData });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white p-4">
      {/* "Create your PopX" heading at the top */}
      <h1 className="text-3xl font-bold text-gray-800 mt-8 mb-6 text-left">
        Create your <br/>PopX account
      </h1>

      {/* Form in the middle */}
      <form onSubmit={handleSubmit} className="flex-1">
        {/* Input Fields */}
        {[
          { label: "Full Name", name: "fullName", required: true },
          { label: "Phone Number", name: "phoneNumber", required: true },
          { label: "Email Address", name: "emailAddress", required: true },
          { label: "Password", name: "password", required: true },
          { label: "Company Name", name: "companyName", required: false },
        ].map((field) => (
          <div key={field.name} className="mb-4 relative">
            <label
              className={`absolute -top-2 left-3 px-1 bg-white text-sm 
                ${field.required ? "text-purple-600" : "text-purple-600"} font-normal`} // Same color for all labels
            >
              {field.label}
              {field.required && <span className="text-red-500">*</span>}
            </label>
            <input
              type={field.name === "password" ? "password" : "text"}
              className="w-full p-2 text-sm border-2 border-gray-300 rounded-md focus:outline-purple-500"
              value={formData[field.name]}
              onChange={(e) =>
                setFormData({ ...formData, [field.name]: e.target.value })
              }
            />
          </div>
        ))}

        {/* Agency Radio Buttons */}
        <div className="mb-2 mt-4"> {/* Reduced gap here */}
          <label className="block text-sm text-purple-600 font-medium mb-2">
            Are you an Agency?<span className="text-red-500">*</span>
          </label>
          <div className="flex gap-4">
            {[true, false].map((option) => (
              <div
                key={option.toString()}
                className="flex items-center cursor-pointer"
                onClick={() => setFormData({ ...formData, isAgency: option })}
              >
                <div className="relative w-5 h-5 mr-2">
                  <div
                    className={`w-full h-full rounded-full border-2 
                      ${formData.isAgency === option ? "border-purple-500" : "border-gray-400"}`}
                  >
                    {formData.isAgency === option && (
                      <div className="absolute inset-1 bg-purple-500 rounded-full"></div>
                    )}
                  </div>
                </div>
                <span className="text-base text-gray-700"> {/* Increased font size */}
                  {option ? "Yes" : "No"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </form>

      {/* "Create Account" button slightly above the bottom */}
      <button
        type="submit"
        onClick={handleSubmit}
        className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 rounded-md text-sm font-medium transition-colors mt-4 mb-6" // Adjusted margin
      >
        Create Account
      </button>
    </div>
  );
}

export default Signup;