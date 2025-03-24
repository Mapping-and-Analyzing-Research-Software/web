"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { CameraIcon } from "@heroicons/react/24/outline";

export default function Profile({ user, handleInputChange }) {
  const [sameAsLegalFirstName, setSameAsLegalFirstName] = useState(false);
  const [profilePath, setProfilePath] = useState(user.profile_path || "");
  const [photoAdded, setPhotoAdded] = useState(user.profile_path === "");

  const handleCheckboxChange = (e) => {
    setSameAsLegalFirstName(e.target.checked);
    if (e.target.checked) {
      handleInputChange({
        target: { name: "screen_name", value: user.legal_first_name },
      });
    }
  };

  const handleScreenNameChange = (e) => {
    if (!sameAsLegalFirstName) {
      handleInputChange(e);
    }
  };

  const removePhoto = () => {
    setProfilePath(""); // Clear the profile photo state
    setPhotoAdded(false); // Set photo added state to false
  };

  const addPhoto = (event) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfilePath(imageUrl); // Update the state with the new image URL
      handleInputChange({
        target: { name: "profile_path", value: profilePath },
      });
      setPhotoAdded(true);
      event.target.value = ""; // Clear file input after selection
    }
  };

  const changePhoto = (event) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfilePath(imageUrl); // Update the state with the new image URL
      handleInputChange({
        target: { name: "profile_path", value: profilePath },
      });
      event.target.value = ""; // Clear file input after selection
    }
  };

  return (
    <div className="flex m-4 h-full w-full justify-center items-center flex-col">
      <div className="flex flex-col justify-evenly items-center w-3/4">
        <div className="w-full h-full relative flex flex-col items-center justify-center">
          <p className="text-2xl font-semibold ">Change Profile</p>
          {photoAdded ? (
            <AddedPhoto
              profilePath={profilePath}
              removePhoto={removePhoto}
              changePhoto={changePhoto}
            />
          ) : (
            <AddPhoto addPhoto={addPhoto} />
          )}
        </div>

        {/* Legal First and Last Name */}
        <div className="flex md:flex-row flex-col justify-center items-center h-full my-4">
          <div className="flex flex-col justify-evenly items-center mx-4">
            <span className="text-2xl font-semibold">First</span>
            <input
              name="legal_first_name"
              value={user.legal_first_name}
              onChange={handleInputChange}
              className="border-2 border-slate-500 px-6 py-3 !m-4 rounded-2xl text-xl text-center"
              placeholder="John"
            />
          </div>
          <div className="flex flex-col justify-evenly items-center mx-4">
            <span className="text-2xl font-semibold">Last</span>
            <input
              name="legal_last_name"
              value={user.legal_last_name}
              onChange={handleInputChange}
              className="border-2 border-slate-500 px-6 py-3 !m-4 rounded-2xl text-xl text-center"
              placeholder="Smith"
            />
          </div>
        </div>

        {/* Screen Name with Checkbox */}
        <div className="flex flex-col justify-evenly items-center w-full h-full my-4">
          <span className="text-2xl font-semibold">Screen Name</span>
          <input
            name="name"
            value={sameAsLegalFirstName ? user.legal_first_name : user.name}
            onChange={handleScreenNameChange}
            disabled={sameAsLegalFirstName}
            className="border-2 border-slate-500 px-6 py-3 !m-4 rounded-2xl text-xl text-center"
            placeholder="Screen Name"
          />
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={sameAsLegalFirstName}
              onChange={handleCheckboxChange}
            />
            <span>Same as First Name</span>
          </label>
        </div>

        {/* Location */}
        <div className="flex flex-col justify-evenly items-center w-full h-full my-4">
          <span className="text-2xl font-semibold">Location</span>
          <input
            name="location"
            value={user.location}
            onChange={handleInputChange}
            className="border-2 border-slate-500 px-6 py-3 !m-4 rounded-2xl text-xl text-center"
            placeholder="Eugene, OR"
          />
        </div>

        {/* Bio */}
        <div className="flex flex-col justify-evenly items-center m-4 w-1/2">
          <span className="text-2xl font-semibold my-4">Bio</span>
          <textarea
            name="bio"
            value={user.bio}
            onChange={handleInputChange}
            className="border-2 border-slate-500 px-6 py-3 rounded-2xl text-xl text-center w-full h-40"
            placeholder="Write something about yourself!"
          />
        </div>
      </div>

      <button
        type="submit"
        onClick={() => console.log(user)}
        className="mt-4 mb-16 py-3 px-6 text-xl text-blue-700 border-2 border-blue-700 rounded-2xl font-semibold hover:bg-blue-700 hover:text-white"
      >
        Save Changes
      </button>
    </div>
  );
}

function AddedPhoto({ profilePath, removePhoto, changePhoto }) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  return (
    <div className="flex justify-center items-center h-full w-full">
      <Image
        src={profilePath}
        className="rounded-full mt-10 w-40 h-40  object-cover mx-4"
        height="100"
        width="100"
        alt="Profile Picture"
      />
      <div className="flex flex-col justify-center items-center mx-4 h-full">
        <span
          className="text-xl font-semibold rounded-2xl border-2 border-slate-700 px-4 py-2 text-slate-700 my-2 hover:bg-slate-700 hover:text-white"
          onClick={handleButtonClick}
        >
          Change
        </span>
        <input
          type="file"
          ref={fileInputRef}
          onChange={changePhoto}
          style={{ display: "none" }}
          accept="image/*"
        />
        <span
          className="text-xl font-semibold rounded-2xl border-2 border-slate-700 px-4 py-2 text-slate-700 my-2 hover:bg-slate-700 hover:text-white"
          onClick={removePhoto}
        >
          Remove
        </span>
      </div>
    </div>
  );
}

function AddPhoto({ addPhoto }) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  return (
    <div
      onClick={handleButtonClick}
      className="bg-slate-200 border-2 border-dashed border-slate-700 rounded-full mt-10 w-40 h-40 flex flex-col items-center justify-center"
    >
      <div className="bg-white rounded-3xl border-2 border-slate-700 px-4 py-2 text-slate-700 flex flex-col items-center justify-center">
        <CameraIcon className="w-10 h-10 text-slate-700" />
        <input
          type="file"
          ref={fileInputRef}
          onChange={addPhoto}
          style={{ display: "none" }}
          accept="image/*"
        />
        Add Photo
      </div>
    </div>
  );
}
