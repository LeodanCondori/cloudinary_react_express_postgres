const { cloudinary } = require("../utils/cloudinary");
const { Data } = require("../db");

const uploadHandler = async (req, res) =>
{
  const { name, email, encodedImage } = req.body;

  try
  {
    // Upload image to Cloudinary
    const uploadResponse = await cloudinary.uploader.upload(encodedImage);

    // Create a new entry in the Data model
    const newData = await Data.create({
      name,
      email,
      cloudinary: uploadResponse, // Store the Cloudinary upload response
    });

    console.log(uploadResponse)
    // console.log("Data created:", newData);

    // Send response if needed
    res.status(201).json({ message: "Data created successfully", data: newData });
  } catch (error)
  {
    console.error("Error creating data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = uploadHandler;
