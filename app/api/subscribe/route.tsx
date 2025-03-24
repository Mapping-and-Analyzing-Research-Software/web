import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request) {
  const { fname, email } = await request.json();

  // Simple validation
  if (!email || !email.includes("@")) {
    return NextResponse.json(
      { message: "Invalid email address" },
      { status: 400 },
    );
  }

  // Here you could save the email to a database or perform other actions.

  // Define the file path
  const filePath = path.join(process.cwd(), "emails.txt");
  // Append data to the file
  fs.appendFile(
    filePath,
    `\n${JSON.stringify({ name: fname, email: email })}`,
    (err) => {
      if (err) {
        console.error(err);
        return NextResponse.json({ message: "Error saving email" });
      }
    },
  );
  return NextResponse.json({
    message: "Thanks for signing up for updates and early access! We'll be in touch.",
  });
}
