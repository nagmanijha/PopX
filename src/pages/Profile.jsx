import React, { useState } from "react";
import sampleImage from "/sample.png";
function AccountSettings() {
  const [profileImage, setProfileImage] = useState(
    sampleImage);

  const user = {
    name: "Marry Doe",
    email: "Marry@Gmail.Com",
    bio: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam"
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4 ">Account Settings</h2>
      
      <div className="flex items-center space-x-4 bg-gray">
        {/* Profile Image */}
        <div className="relative w-16 h-16">
          <img
            src={profileImage}
            alt="Profile"
            className="w-full h-full rounded-full object-cover border-2 border-gray-300"
          />
          <label
            htmlFor="file-upload"
            className="absolute bottom-0 right-0 bg-purple-600 text-white text-sm w-5 h-5 flex items-center justify-center rounded-full cursor-pointer"
          >
            📷
            <input
              type="file"
              id="file-upload"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
          </label>
        </div>

        {/* Profile Info */}
        <div>
          <h3 className="text-lg font-bold">{user.name}</h3>
          <p className="text-gray-500 text-sm">{user.email}</p>
        </div>
      </div>

      {/* Bio */}
      <p className="text-gray-600 text-sm mt-4 border-t border-dashed pt-3">
        {user.bio}
      </p>
    </div>
  );
}

export default AccountSettings;
