// app/api/upload-image/route.js (API route for image upload and conversion)

import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

// Create an API handler to process the image file
export async function POST(req) {
    console.log("uploadImageCalled")
  try {
    // Parse the multipart form data
    const formData = await req.formData();  // `formData` method to parse the form data

    const handle = formData.get('handle');
    const type = formData.get('type');
    const file = formData.get('image'); // Assuming the form field is named "image"

    // Create a path where the image will be saved (e.g., 'uploads/img')
    let savePath = path.join(process.cwd(), 'uploads', 'img', type,`${handle}-${Date.now()}.jpg`);
    
    // Special public paths for banner and profile pics
    if (type == "banner" || type == "icon"){
        savePath = path.join(process.cwd(), 'public', 'img', type,`${handle}.jpg`);
    }

    // Ensure the file exists
    if (!file) {
      return new Response('No image file provided', { status: 400 });
    }

    // Get the file buffer
    const buffer = await file.arrayBuffer(); // Get the file as a buffer

    // Convert the buffer to a sharp image object and convert to JPEG
    const jpegBuffer = await sharp(Buffer.from(buffer))
      .jpeg({ quality: 90 }) // Convert to JPEG with a quality of 90 (you can adjust as needed)
      .toBuffer(); // Get the output as a buffer

    // Ensure the directory exists
    const dir = path.dirname(savePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Save the image to disk
    fs.writeFileSync(savePath, jpegBuffer);

    // Respond with the URL to the saved image
    return new Response(JSON.stringify({ message: 'Image uploaded and converted successfully', imageUrl: `/uploads/${path.basename(savePath)}` }), { status: 200 });
  } catch (error) {
    console.error('Error processing image:', error);
    return new Response('Error processing the image', { status: 500 });
  }
}
