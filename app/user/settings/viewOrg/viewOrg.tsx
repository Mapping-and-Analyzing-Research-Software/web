"use client";
import { useState } from "react";
import Profile from "./ui/profile";

export default function ViewOrg({ myOrg }) {
  const settings = ["Account", "Profile", "Shipping", "Billing"];

  const [org, setUser] = useState(myOrg);

  const [selectedComponent, setSelectedComponent] = useState("Profile");

  const handleUserInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...org, [name]: value });
  };

  return (
    <div className="flex flex-col pt-8 w-full h-full justify-center items-center">
      <span className="text-5xl text-center font-semibold">Settings</span>
      <div className="flex w-full justify-center items-center mt-12 mb-2">
        {settings.map((head, idx) => (
          <div
            key={idx}
            className={`${selectedComponent === head ? "text-blue-500" : "text-slate-700"} text-xl font-medium mx-16`}
            id={head}
            onClick={() => setSelectedComponent(head)}
          >
            {head}
          </div>
        ))}
      </div>
      {selectedComponent === "Profile" && (
        <Profile org={org} handleInputChange={handleUserInputChange} />
      )}
      <hr className="w-3/4 border-t-2 border-gray-300 mb-8 mt-4 border-black"></hr>
    </div>
  );
}
