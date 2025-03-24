import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

export default function Account({ user, handleInputChange }) {
  const [showNewPassword, setShowNewPassword] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const [isExpanded, setIsExpanded] = useState(false);

  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="flex m-4 h-full w-full justify-center items-center flex-col">
      <div className="flex flex-col justify-evenly items-center w-3/4">
        <div className="flex flex-col justify-evenly items-center m-4">
          <span className="text-2xl font-semibold">Username</span>
          <input
            name="username"
            value={user.username}
            onChange={handleInputChange}
            className="border-2 border-slate-500 px-6 py-3 !m-4 rounded-2xl text-xl text-center"
          />
        </div>
        <div className="flex md:flex-row flex-col items-center justify-center">
          <div className="flex flex-col justify-evenly items-center m-4">
            <span className="text-2xl font-semibold">Email</span>
            <input
              name="email"
              value={user.email}
              onChange={handleInputChange}
              className="border-2 border-slate-500 px-6 py-3 !m-4 rounded-2xl text-xl text-center"
            />
          </div>
          <div className="flex flex-col justify-evenly items-center m-4">
            <span className="text-2xl font-semibold">Phone</span>
            <input
              name="phone"
              value={user.phone}
              onChange={handleInputChange}
              className="border-2 border-slate-500 px-6 py-3 !m-4 rounded-2xl text-xl text-center"
            />
          </div>
        </div>
        <div className="flex flex-col justify-evenly items-center mx-4">
          <button
            className="my-4 py-2 px-6 text-xl text-blue-700 border-2 border-blue-700 rounded-2xl hover:bg-blue-700 hover:text-white"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            Change Password
          </button>
          {isExpanded && (
            <div className="flex md:flex-row flex-col items-center justify-evenly">
              <div className="flex flex-col justify-evenly items-center m-4">
                <span className="text-2xl font-semibold">
                  Enter New Password
                </span>
                <div className="relative w-full my-4">
                  <input
                    type={showNewPassword ? "text" : "password"}
                    className="border-2 border-slate-500 px-6 py-3 pr-12 rounded-2xl text-xl w-full"
                  />

                  {/* Eye Icon inside the input field */}
                  <button
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    className="absolute inset-y-0 right-4 flex items-center"
                  >
                    {showNewPassword ? (
                      <EyeIcon className="w-8 h-8 text-gray-600" />
                    ) : (
                      <EyeSlashIcon className="w-8 h-8 text-gray-600" />
                    )}
                  </button>
                </div>
              </div>
              <div className="flex flex-col justify-evenly items-center m-4">
                <span className="text-2xl font-semibold">
                  Re-Enter New Password
                </span>
                <div className="relative w-full my-4">
                  <input
                    type={showNewPassword ? "text" : "password"}
                    className="border-2 border-slate-500 px-6 py-3 pr-12 rounded-2xl text-xl w-full"
                  />

                  {/* Eye Icon inside the input field */}
                  <button
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    className="absolute inset-y-0 right-4 flex items-center"
                  >
                    {showNewPassword ? (
                      <EyeIcon className="w-8 h-8 text-gray-600" />
                    ) : (
                      <EyeSlashIcon className="w-8 h-8 text-gray-600" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="flex justify-evenly items-center w-full h-full my-4">
          <div className="flex flex-col justify-evenly items-center">
            <span className="text-2xl font-semibold">Notifications</span>
            <div className="flex items-center my-4">
              <input
                type="checkbox"
                id="toggleSwitch"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
                className="toggle-checkbox hidden"
              />
              <label
                htmlFor="toggleSwitch"
                className="toggle-label flex items-center cursor-pointer relative"
              >
                {/* Toggle background */}
                <span
                  className={`toggle-inner block w-16 h-8 rounded-full transition-colors duration-300 ${
                    isChecked ? "bg-blue-500" : "bg-gray-300"
                  }`}
                />
                {/* Toggle knob */}
                <span
                  className={`toggle-dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform duration-300 ${
                    isChecked ? "transform translate-x-8" : ""
                  }`}
                />
              </label>
              <label htmlFor="toggleSwitch" className="ml-4 text-xl">
                Allow Guppy to send push notifications.
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-evenly items-center m-4">
        <span className="text-2xl font-semibold">Current Password</span>
        <div className="relative w-full my-4">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value=""
            onChange={handleInputChange}
            className="border-2 border-slate-500 px-6 py-3 pr-12 rounded-2xl text-xl w-full"
          />

          {/* Eye Icon inside the input field */}
          <button
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-4 flex items-center"
          >
            {showPassword ? (
              <EyeIcon className="w-8 h-8 text-gray-600" />
            ) : (
              <EyeSlashIcon className="w-8 h-8 text-gray-600" />
            )}
          </button>
        </div>
      </div>

      <button
        type="submit"
        onClick={() => console.log(user)}
        className="mt-4 mb-16 py-3 px-6 text-xl text-blue-700 border-2 border-blue-700 rounded-2xl hover:bg-blue-700 hover:text-white"
      >
        Save Changes
      </button>
    </div>
  );
}
