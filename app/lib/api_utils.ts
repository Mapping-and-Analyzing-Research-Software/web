"use server";


export async function getEntity(handle) {
  const response = await fetch(
    `${process.env.BACKEND_URL}/v1/entity/${handle}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-token": `${process.env.GBE_API_TOKEN}`,
      },
    },
  );
  if (response.ok) {
    const data = await response.json();
    return data;
  } else if (response.status == 404) {
    return false;
  } else {
    throw new Error("Failed to complete call.");
  }
}

export async function credentialsAuth(email_or_handle, password){
      const response = await fetch(`${process.env.BACKEND_URL}/v1/auth/`, {
        method: "POST",
        body: JSON.stringify({
          "email_or_handle": email_or_handle,
          "password": password,
        }),
        headers: {
          "Content-Type": "application/json",
          "x-token": `${process.env.GBE_API_TOKEN}`,
        },
      });
      if (response.ok) {
        const result = await response.json()
        return result
      } else if (response.status == 401) {
        return null;
      } else if (response.status == 404) {
        return null;
      } else {
        throw new Error("Failed to complete call.");
      }
}








