import Image from "next/image";
import { CameraIcon } from "@heroicons/react/24/outline";

export default function Profile({ org, handleInputChange }) {
  const photoAdded = org.icon_url !== "";

  console.log(photoAdded);

  const dummy_org = {
    id: 1, // A unique integer ID
    type: "Org", // Polymorphism/class inheritance, e.g., Nonprofit, Business, etc.
    handle: "growguppy", // Unique handle for the organization
    physical_location: "123 Main St, City, Country", // Physical location of the organization (optional)
    name: "Guppy LLC", // Optional organization name
    icon_url: "https://example.com/icon.png", // Optional icon URL for the organization
    bio: "This is a brief description of the organization.", // Optional bio
    create_date: new Date("2024-01-01T00:00:00Z"), // Date when the organization was created
    update_date: new Date("2024-01-01T00:00:00Z"), // Date when the organization was last updated
    transaction_methods: [
      { id: 1, method: "Credit Card" },
      { id: 2, method: "PayPal" },
    ], // List of associated transaction methods
    addresses: [
      {
        id: 1,
        street: "123 Main St",
        city: "City",
        state: "State",
        postal_code: "12345",
        country: "Country",
      },
      {
        id: 2,
        street: "456 Another St",
        city: "Another City",
        state: "Another State",
        postal_code: "67890",
        country: "Another Country",
      },
    ], // List of associated addresses
    legal_name: "Example Legal Name", // Legal name of the organization
    affiliates: new Set([
      { id: 1, name: "Affiliate 1" },
      { id: 2, name: "Affiliate 2" },
    ]), // Set of affiliated entities (represented as objects)
    org_type: "Nonprofit", // Optional organization type
    email: "contact@example.org", // Optional email for the organization
    phone: "+1234567890", // Optional phone number for the organization
    url: "https://example.org", // Optional website URL for the organization
  };

  return (
    <div className="flex m-4 h-full w-full justify-center items-center flex-col">
      <div className="flex flex-col justify-evenly items-center w-3/4">
        <div className="w-full h-full relative flex flex-col items-center justify-center">
          <p className="text-2xl font-semibold ">Change Profile</p>
          {photoAdded ? <AddedPhoto img_path={org.icon_url} /> : <AddPhoto />}

          {/* <div className='bg-slate-100 opacity-50 rounded-full w-full h-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'></div>
                    <p className='text-white font-bold text-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>Add New</p> */}
        </div>
        <div className="flex md:flex-row flex-col justify-center items-center h-full my-4">
          <div className="flex flex-col justify-evenly items-center mx-4">
            <span className="text-2xl font-semibold">First</span>
            <input
              name="legal_first_name"
              value={org.legal_first_name}
              onChange={handleInputChange}
              className="border-2 border-slate-500 px-6 py-3 !m-4 rounded-2xl text-xl text-center"
              placeholder="John"
            />
          </div>
          <div className="flex flex-col justify-evenly items-center mx-4">
            <span className="text-2xl font-semibold">Last</span>
            <input
              name="legal_last_name"
              value={org.legal_last_name}
              onChange={handleInputChange}
              className="border-2 border-slate-500 px-6 py-3 !m-4 rounded-2xl text-xl text-center"
              placeholder="Smith"
            />
          </div>
        </div>
        <div className="flex justify-evenly items-center w-full h-full my-4">
          <div className="flex flex-col justify-evenly items-center">
            <span className="text-2xl font-semibold">Location</span>
            <input
              name="location"
              value={org.location}
              onChange={handleInputChange}
              className="border-2 border-slate-500 px-6 py-3 !m-4 rounded-2xl text-xl text-center"
              placeholder="Eugene, OR"
            />
          </div>
        </div>
        <div className="flex flex-col justify-evenly items-center m-4 w-1/2">
          <span className="text-2xl font-semibold my-4">Bio</span>
          <textarea
            name="bio"
            value={org.bio}
            onChange={handleInputChange}
            className="border-2 border-slate-500 px-6 py-3 rounded-2xl text-xl text-center w-full h-40"
            placeholder="Write something about yourself!"
          />
        </div>
      </div>
      <button
        type="submit"
        onClick={() => console.log(org)}
        className="mt-4 mb-16 py-3 px-6 text-xl text-blue-700 border-2 border-blue-700 rounded-2xl font-semibold hover:bg-blue-700 hover:text-white"
      >
        Save Changes
      </button>
    </div>
  );
}

function AddedPhoto({ img_path }) {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <Image
        src={img_path}
        className="rounded-full w-60 h-60 object-cover mx-4"
        height="100"
        width="100"
        alt="Profile Picture"
      />
      <div className="flex flex-col justify-evenly items-center mx-4">
        <span className="text-xl font-semibold rounded-2xl border-2 border-slate-700 px-4 py-2 text-slate-700 my-2 hover:bg-slate-700 hover:text-white">
          Change
        </span>
        <span className="text-xl font-semibold rounded-2xl border-2 border-slate-700 px-4 py-2 text-slate-700 my-2 hover:bg-slate-700 hover:text-white">
          Remove
        </span>
      </div>
    </div>
  );
}

function AddPhoto() {
  return (
    <div className="bg-slate-200 border-2 border-dashed border-slate-700 rounded-full w-60 h-60 flex flex-col items-center justify-center">
      <div className="bg-white rounded-3xl border-2 border-slate-700 text-lg px-4 py-2 text-slate-700 flex flex-col items-center">
        <CameraIcon className="w-10 h-10 text-slate-700" />
        Add Photo
      </div>
    </div>
  );
}
