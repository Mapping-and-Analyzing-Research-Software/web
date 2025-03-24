import { useState } from "react";

interface Entity {}

// Define an interface for Address
interface Address {
  id: number;
  line1: string;
  line2?: string; // Optional
  city: string;
  state: string;
  zip: string;
  notes?: string; // Optional
  entity: Entity;
}

interface AddressesProps {
  user: {
    addresses: Address[];
  };
  handleAddressChange: (id: number, updatedAddress: Address) => void;
  handleAddressAdd: (updatedAddress: Address) => void;
  handleAddressRemove: (id: number) => void;
}

export default function Addresses({
  user,
  handleAddressChange,
  handleAddressRemove,
  handleAddressAdd,
}: AddressesProps) {
  const [editId, setEditId] = useState<number | null>(null); // Track which address is being edited
  const [creatingAddress, setCreatingAddress] = useState<boolean>(false);
  const [newErrorMessage, setNewErrorMessage] = useState<string>("");
  const [changeErrorMessage, setChangeErrorMessage] = useState<string>("");
  const [formData, setFormData] = useState<Address | null>(null); // Form data for editing
  const [newAddress, setNewAddress] = useState<Address>({
    id: Date.now(), // Temporary ID generator
    line1: "",
    line2: "",
    city: "",
    state: "",
    zip: "",
    notes: "",
    entity: {} as Entity, // Provide an empty entity for new addresses
  }); // State for new address

  // Handle edit button click
  const handleEditClick = (address: Address) => {
    // If already editing the same address, do nothing
    if (editId === address.id) return;

    setEditId(address.id);
    setFormData({ ...address }); // Load current address data into form
  };

  // Handle submit changes
  const handleChangeSubmit = (address: Address) => {
    if (!address.line1 || !address.city || !address.state || !address.zip) {
      setChangeErrorMessage(
        "Please fill in all required fields (Address Line 1, City, State, and ZIP Code).",
      );
      return;
    }
    if (editId && formData) {
      handleAddressChange(editId, formData); // Trigger the address change in the parent component
      setEditId(null); // Exit edit mode
      setFormData(null); // Reset form data
    }
    setChangeErrorMessage("");
  };

  // Handle cancel edit
  const handleChangeCancel = () => {
    setEditId(null);
    setFormData(null); // Reset form data
    setChangeErrorMessage("");
  };

  const handleNewSubmit = () => {
    if (
      !newAddress.line1 ||
      !newAddress.city ||
      !newAddress.state ||
      !newAddress.zip
    ) {
      setNewErrorMessage(
        "Please fill in all required fields (Address Line 1, City, State, and ZIP Code).",
      );
      return;
    }
    setCreatingAddress(false);
    handleAddressAdd(newAddress);
    setNewAddress({
      id: Date.now(), // Generate new ID for next addition
      line1: "",
      line2: "",
      city: "",
      state: "",
      zip: "",
      notes: "",
      entity: {} as Entity, // Reset the form
    });
    setNewErrorMessage("");
  };

  const handleNewCancel = () => {
    setCreatingAddress(false);
    setNewAddress({
      id: Date.now(), // Generate new ID for next addition
      line1: "",
      line2: "",
      city: "",
      state: "",
      zip: "",
      notes: "",
      entity: {} as Entity, // Reset the form
    });
    setNewErrorMessage("");
  };

  const handleRemoveAddress = (id: number) => {
    const confirmRemove = window.confirm(
      "Are you sure you want to remove this address?",
    );
    if (confirmRemove) {
      handleAddressRemove(id); // Trigger the address removal in parent component
    }
  };

  const statesAndTerritories = [
    { name: "Alabama", code: "AL" },
    { name: "Alaska", code: "AK" },
    { name: "American Samoa", code: "AS" },
    { name: "Arizona", code: "AZ" },
    { name: "Arkansas", code: "AR" },
    { name: "California", code: "CA" },
    { name: "Colorado", code: "CO" },
    { name: "Connecticut", code: "CT" },
    { name: "Delaware", code: "DE" },
    { name: "District of Columbia", code: "DC" },
    { name: "Florida", code: "FL" },
    { name: "Georgia", code: "GA" },
    { name: "Guam", code: "GU" },
    { name: "Hawaii", code: "HI" },
    { name: "Idaho", code: "ID" },
    { name: "Illinois", code: "IL" },
    { name: "Indiana", code: "IN" },
    { name: "Iowa", code: "IA" },
    { name: "Kansas", code: "KS" },
    { name: "Kentucky", code: "KY" },
    { name: "Louisiana", code: "LA" },
    { name: "Maine", code: "ME" },
    { name: "Maryland", code: "MD" },
    { name: "Massachusetts", code: "MA" },
    { name: "Michigan", code: "MI" },
    { name: "Minnesota", code: "MN" },
    { name: "Mississippi", code: "MS" },
    { name: "Missouri", code: "MO" },
    { name: "Montana", code: "MT" },
    { name: "Nebraska", code: "NE" },
    { name: "Nevada", code: "NV" },
    { name: "New Hampshire", code: "NH" },
    { name: "New Jersey", code: "NJ" },
    { name: "New Mexico", code: "NM" },
    { name: "New York", code: "NY" },
    { name: "North Carolina", code: "NC" },
    { name: "North Dakota", code: "ND" },
    { name: "Northern Mariana Islands", code: "MP" },
    { name: "Ohio", code: "OH" },
    { name: "Oklahoma", code: "OK" },
    { name: "Oregon", code: "OR" },
    { name: "Pennsylvania", code: "PA" },
    { name: "Puerto Rico", code: "PR" },
    { name: "Rhode Island", code: "RI" },
    { name: "South Carolina", code: "SC" },
    { name: "South Dakota", code: "SD" },
    { name: "Tennessee", code: "TN" },
    { name: "Texas", code: "TX" },
    { name: "Utah", code: "UT" },
    { name: "Vermont", code: "VT" },
    { name: "Virgin Islands", code: "VI" },
    { name: "Virginia", code: "VA" },
    { name: "Washington", code: "WA" },
    { name: "West Virginia", code: "WV" },
    { name: "Wisconsin", code: "WI" },
    { name: "Wyoming", code: "WY" },
  ];

  return (
    <div className="container mx-auto p-4 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-semibold mb-4 text-center">Addresses</h1>
      <div className="space-y-4 max-w-4xl">
        {user.addresses.map((address) => (
          <div
            key={address.id}
            className="border-2 border-slate-500 p-4 rounded-lg shadow-lg items-center justify-center"
          >
            {editId === address.id && formData ? (
              <div>
                <h2 className="text-xl font-semibold mb-4 text-center">
                  Edit Address
                </h2>
                <div className="flex flex-col items-center justify-center space-y-4 mb-4">
                  <div className="flex justify-evenly items-center md:flex-row flex-col md:space-x-4 space-x-0 space-y-4 md:space-y-0 w-full">
                    <input
                      className="max-w-lg border-2 border-slate-500 focus:border-black focus:!ring-0 focus:!outline-none px-4 py-3 rounded-2xl text-xl text-center w-full"
                      type="text"
                      name="line1"
                      value={formData.line1}
                      onChange={(e) =>
                        setFormData({ ...formData, line1: e.target.value })
                      }
                      placeholder="Address Line 1"
                    />
                    <input
                      className="max-w-lg border-2 border-slate-500 focus:border-black focus:!ring-0 focus:!outline-none px-4 py-3 rounded-2xl text-xl text-center w-full"
                      type="text"
                      name="line2"
                      value={formData.line2 || ""}
                      onChange={(e) =>
                        setFormData({ ...formData, line2: e.target.value })
                      }
                      placeholder="Address Line 2"
                    />
                  </div>
                  <div className="flex justify-evenly items-center md:flex-row flex-col md:space-x-4 space-x-0 space-y-4 md:space-y-0 w-full">
                    <input
                      className="max-w-lg border-2 border-slate-500 focus:border-black focus:!ring-0 focus:!outline-none px-4 py-3 rounded-2xl text-xl text-center w-full"
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={(e) =>
                        setFormData({ ...formData, city: e.target.value })
                      }
                      placeholder="City"
                    />
                    <select
                      className="max-w-lg border-2 border-slate-500 focus:border-black focus:!ring-0 focus:!outline-none px-4 py-3 rounded-2xl text-xl text-center w-full"
                      name="state"
                      value={formData.state}
                      onChange={(e) =>
                        setFormData({ ...formData, state: e.target.value })
                      }
                    >
                      <option value="" disabled>
                        Select State
                      </option>
                      {statesAndTerritories.map((state) => (
                        <option key={state.code} value={state.code}>
                          {state.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <input
                    className="max-w-sm border-2 border-slate-500 focus:border-black focus:!ring-0 focus:!outline-none px-4 py-3 rounded-2xl text-xl text-center w-full"
                    type="text"
                    name="zip"
                    value={formData.zip}
                    onChange={(e) =>
                      setFormData({ ...formData, zip: e.target.value })
                    }
                    placeholder="ZIP Code"
                  />
                  <input
                    className="max-w-5xl border-2 border-slate-500 focus:border-black focus:!ring-0 focus:!outline-none px-4 py-3 rounded-2xl text-xl text-center w-full"
                    type="text"
                    name="notes"
                    value={formData.notes || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, notes: e.target.value })
                    }
                    placeholder="Notes (optional)"
                  />
                  <div className="text-red-500">{changeErrorMessage}</div>
                </div>
                <div className="flex space-x-4 mt-4">
                  <button
                    onClick={() => handleChangeSubmit(address)}
                    className="mt-2 bg-none hover:!bg-blue-700 border-2 border-blue-700 text-blue-700 hover:text-white font-semibold text-lg px-4 py-1 rounded-lg hover:bg-green-600"
                  >
                    Submit
                  </button>
                  <button
                    onClick={handleChangeCancel}
                    className="mt-2 bg-none hover:!bg-gray-700 border-2 border-gray-700 text-gray-700 hover:text-white font-semibold text-lg px-4 py-1 rounded-lg hover:bg-green-600"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <h2 className="text-xl font-semibold">
                  {address.line1}, {address.line2 && `${address.line2},`}{" "}
                  {address.city}, {address.state}, {address.zip}
                </h2>
                <p className="text-gray-600">
                  {address.notes ? `Notes: ${address.notes}` : ""}
                </p>
                <button
                  onClick={() => handleEditClick(address)}
                  className="mr-2 mt-2 bg-none hover:!bg-blue-700 border-2 border-blue-700 text-blue-700 hover:text-white font-semibold text-lg px-4 py-1 rounded-lg hover:bg-green-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleRemoveAddress(address.id)}
                  className="mx-2 mt-2 bg-none hover:!bg-red-700 border-2 border-red-700 text-red-700 hover:text-white font-semibold text-lg px-4 py-1 rounded-lg hover:bg-green-600"
                >
                  Remove
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="space-y-4 max-w-4xl mt-4">
        {creatingAddress ? (
          <div className="border-2 border-slate-500 p-4 rounded-lg shadow-lg items-center justify-center">
            <h2 className="text-xl font-semibold mb-4 text-center">
              Add Address
            </h2>
            <div className="flex flex-col items-center justify-center space-y-4 mb-4">
              <div className="flex justify-evenly items-center md:flex-row flex-col md:space-x-4 space-x-0 space-y-4 md:space-y-0 w-full">
                <input
                  className="max-w-lg border-2 border-slate-500 focus:border-black focus:!ring-0 focus:!outline-none px-4 py-3 rounded-2xl text-xl text-center w-full"
                  type="text"
                  name="line1"
                  value={newAddress.line1}
                  onChange={(e) =>
                    setNewAddress({ ...newAddress, line1: e.target.value })
                  }
                  placeholder="Address Line 1"
                />
                <input
                  className="max-w-lg border-2 border-slate-500 focus:border-black focus:!ring-0 focus:!outline-none px-4 py-3 rounded-2xl text-xl text-center w-full"
                  type="text"
                  name="line2"
                  value={newAddress.line2 || ""}
                  onChange={(e) =>
                    setNewAddress({ ...newAddress, line2: e.target.value })
                  }
                  placeholder="Address Line 2"
                />
              </div>
              <div className="flex justify-evenly items-center md:flex-row flex-col md:space-x-4 space-x-0 space-y-4 md:space-y-0 w-full">
                <input
                  className="max-w-lg border-2 border-slate-500 focus:border-black focus:!ring-0 focus:!outline-none px-4 py-3 rounded-2xl text-xl text-center w-full"
                  type="text"
                  name="city"
                  value={newAddress.city}
                  onChange={(e) =>
                    setNewAddress({ ...newAddress, city: e.target.value })
                  }
                  placeholder="City"
                />
                <select
                  className="max-w-lg border-2 border-slate-500 focus:border-black focus:!ring-0 focus:!outline-none px-4 py-3 rounded-2xl text-xl text-center w-full"
                  name="state"
                  value={newAddress.state}
                  onChange={(e) =>
                    setNewAddress({ ...newAddress, state: e.target.value })
                  }
                >
                  <option value="" disabled>
                    Select State
                  </option>
                  {statesAndTerritories.map((state) => (
                    <option key={state.code} value={state.code}>
                      {state.name}
                    </option>
                  ))}
                </select>
              </div>

              <input
                className="max-w-sm border-2 border-slate-500 focus:border-black focus:!ring-0 focus:!outline-none px-4 py-3 rounded-2xl text-xl text-center w-full"
                type="text"
                name="zip"
                value={newAddress.zip}
                onChange={(e) =>
                  setNewAddress({ ...newAddress, zip: e.target.value })
                }
                placeholder="ZIP Code"
              />
              <input
                className="max-w-5xl border-2 border-slate-500 focus:border-black focus:!ring-0 focus:!outline-none px-4 py-3 rounded-2xl text-xl text-center w-full"
                type="text"
                name="notes"
                value={newAddress.notes || ""}
                onChange={(e) =>
                  setNewAddress({ ...newAddress, notes: e.target.value })
                }
                placeholder="Notes (optional)"
              />
              <div className="text-red-500">{newErrorMessage}</div>
            </div>
            <div className="flex space-x-4 mt-4">
              <button
                onClick={handleNewSubmit}
                className="mt-2 bg-none hover:!bg-blue-700 border-2 border-blue-700 text-blue-700 hover:text-white font-semibold text-lg px-4 py-1 rounded-lg"
              >
                Submit
              </button>
              <button
                onClick={handleNewCancel}
                className="mt-2 bg-none hover:!bg-gray-700 border-2 border-gray-700 text-gray-700 hover:text-white font-semibold text-lg px-4 py-1 rounded-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setCreatingAddress(true)}
            className="mt-4 bg-none hover:!bg-blue-700 border-2 border-blue-700 text-blue-700 hover:text-white font-semibold text-xl px-6 py-2 rounded-lg"
          >
            Add Address
          </button>
        )}
      </div>
    </div>
  );
}
