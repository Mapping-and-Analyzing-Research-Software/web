"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Account from "./ui/account";
import Profile from "./ui/profile";
import Addresses from "./ui/addresses";
import Affiliations from "./ui/affiliations";

export default function ViewUser({ myUser }) {
  const settings = ["Account", "Profile", "Addresses", "Affiliations"];

  const [user, setUser] = useState(myUser);

  const [selectedComponent, setSelectedComponent] = useState("Addresses");

  const handleUserInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleAddressChange = (id, address) => {
    const updatedAddresses = user.addresses.map((currAddress) =>
      currAddress.id === id ? address : currAddress,
    );
    setUser({ ...user, addresses: updatedAddresses });
  };

  const handleAddressAdd = (newAddress) => {
    const updatedAddresses = [...user.addresses, newAddress];
    setUser({ ...user, addresses: updatedAddresses });
  };

  const handleAddressRemove = (id) => {
    const updatedAddresses = user.addresses.filter(
      (address) => address.id !== id,
    );
    setUser({ ...user, addresses: updatedAddresses });
  };

  return (
    <div className="flex flex-col pt-8 w-full h-full justify-center items-center">
      <span className="text-5xl text-center font-semibold">Settings</span>
      <div className="flex w-full justify-center items-center mt-12 mb-2">
        {settings.map((head, idx) => (
          <div
            key={idx}
            className={`${selectedComponent === head ? "text-blue-500" : "text-slate-700"} text-xl font-medium sm:mx-16 mx-8`}
            id={head}
            onClick={() => setSelectedComponent(head)}
          >
            {head}
          </div>
        ))}
      </div>
      {selectedComponent === "Account" && (
        <Account user={user} handleInputChange={handleUserInputChange} />
      )}
      {selectedComponent === "Profile" && (
        <Profile user={user} handleInputChange={handleUserInputChange} />
      )}
      {selectedComponent === "Addresses" && (
        <Addresses
          user={user}
          handleAddressChange={handleAddressChange}
          handleAddressAdd={handleAddressAdd}
          handleAddressRemove={handleAddressRemove}
        />
      )}{" "}
      {selectedComponent === "Affiliations" && (
        <Affiliations user={user} setUser={setUser} />
      )}
      <hr className="w-3/4 border-t-2 border-gray-300 mb-8 mt-4 border-black z-0"></hr>
    </div>
  );
}
