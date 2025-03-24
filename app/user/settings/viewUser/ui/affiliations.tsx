// components/AffiliationList.tsx

import { User } from "@/app/types"; // Import User interface
import { useState } from "react";

interface AffiliationListProps {
  user: User; // User object passed as a prop
  setUser: (user: User) => void;
}

export default function AffiliationList({
  user,
  setUser,
}: AffiliationListProps) {
  const [affiliations, setAffiliations] = useState(user.affiliations);

  // Function to handle removing an affiliation
  const handleRemoveAffiliation = (idx: number) => {
    const confirmRemove = window.confirm(
      "Are you sure you want to remove this affiliation?",
    );
    if (confirmRemove) {
      const updatedAffiliations = affiliations.filter(
        (_, index) => index !== idx,
      );
      setAffiliations(updatedAffiliations);

      // Update the user object and pass it back
      setUser({ ...user, affiliations: updatedAffiliations });
    }
  };

  return (
    <div className="flex flex-col pt-8 w-full h-full justify-center items-center">
      <h1 className="text-3xl font-semibold text-center mb-8">Affiliations</h1>

      {affiliations.length > 0 ? (
        <ul className="w-full max-w-4xl mx-auto mb-8">
          {affiliations.map((affiliation, idx) => (
            <li
              key={idx}
              className="border-2 border-slate-700 p-4 rounded-lg shadow-lg items-center justify-center my-3"
            >
              <div className="text-2xl font-medium text-slate-900">
                {affiliation.name}
              </div>
              <div className="text-xl text-slate-700">
                Role: {affiliation.role}
              </div>
              <div className="text-md text-slate-600">
                Organization ID: {affiliation.org_id}
              </div>
              {affiliation.role.toLowerCase() === "admin" ? (
                <button
                  className="hover:bg-blue-700 bg-none hover:text-white text-blue-700 border-2 font-medium border-blue-700 px-4 py-2 rounded-lg hover:bg-b-600 mt-4"
                  onClick={() => handleRemoveAffiliation(idx)}
                >
                  Manage
                </button>
              ) : (
                <></>
              )}
              <button
                className="mx-2 hover:bg-red-700 bg-none hover:text-white text-red-700 border-2 font-medium border-red-700 px-4 py-2 rounded-lg hover:bg-red-600 mt-4"
                onClick={() => handleRemoveAffiliation(idx)}
              >
                Leave
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-xl text-gray-600 mb-8">No affiliations found.</p>
      )}

      <button
        className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
        onClick={() => (window.location.href = "/create-organization")}
      >
        Create Organization
      </button>
    </div>
  );
}
