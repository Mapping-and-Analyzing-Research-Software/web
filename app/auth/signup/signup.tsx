"use server";
export default async function create_user(user_data) {
  const response = await fetch(`${process.env.BACKEND_URL}/v1/entity/user/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Token": `${process.env.GBE_API_TOKEN}`,
    },
    body: JSON.stringify(user_data),
  });
  if (!response.ok) {
    throw new Error(`Failed to create user: ${await response.text()}`);
  }

  const data = await response.json();
  return data;
}
