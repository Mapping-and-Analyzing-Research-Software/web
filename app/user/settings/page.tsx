import ViewUser from "./viewUser/viewUser";
import ViewOrg from "./viewOrg/viewOrg";
export default function Page({ params }: { params: { handle: string } }) {
  const user = {
    id: 1234,
    type: "User",
    name: "Ethan",
    legal_first_name: "Ethan",
    legal_last_name: "Reinhart",
    location: "Eugene, OR",
    bio: "I am a student at the University of Oregon. I am a computer science major and I am interested in web development.",
    profile_path: "/img/leanfish.png",
    email: "ereinha3@uoregon.edu",
    phone: "310-803-6441",
    username: "ereinha3",
    creation_date: "2023-04-01",
    update_date: "2024-09-23",
    // followers: 100,
    // following: 200,
    addresses: [
      {
        id: 1,
        line1: "945 Patterson St",
        line2: "Unit 8",
        city: "Eugene",
        state: "OR",
        zip: 97401,
        notes: "Leave at door.",
      },
      {
        id: 2,
        line1: "1364 Patterson St",
        line2: "Unit 2",
        city: "Eugene",
        state: "OR",
        zip: 97401,
        notes: "",
      },
    ],
    affiliations: [
      {
        name: "ATO",
        role: "Admin",
        user_id: 123,
        org_id: 111,
      },
      {
        name: "OSC",
        role: "Member",
        user_id: 123,
        org_id: 112,
      },
    ],
    // stats: {}
    // achievements: {}
  };

  const org = {
    id: 1, // A unique integer ID
    type: "Org", // Polymorphism/class inheritance, e.g., Nonprofit, Business, etc.
    handle: "organization_handle", // Unique handle for the organization
    physical_location: "123 Main St, City, Country", // Physical location of the organization (optional)
    name: "Example Organization", // Optional organization name
    icon_url: "/img/leanfish.png", // Optional icon URL for the organization
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

  const isOrg = false;

  return <>{isOrg ? <ViewOrg myOrg={org} /> : <ViewUser myUser={user} />}</>;
}
