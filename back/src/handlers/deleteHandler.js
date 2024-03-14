const { cloudinary } = require("../utils/cloudinary");
const { Data } = require("../db");

const deleteHandler = async (req, res) =>
{
  const { dataId } = req.params; // Assuming you have a parameter for identifying the Data entry
  // console.log(req.params)
  try
  {
    // Fetch the Data entry from the database
    const dataEntry = await Data.findByPk(dataId);

    // Check if the Data entry exists
    console.log(dataId);
    if (!dataEntry)
    {
      return res.status(404).json({ error: "Data not found" });
    }

    // Delete the image from Cloudinary
    await cloudinary.uploader.destroy(dataEntry.cloudinary.public_id);

    // Delete the Data entry from the database
    await dataEntry.destroy();

    // Send success response
    res.status(200).json({ message: "Data deleted successfully" });
  } catch (error)
  {
    console.error("Error deleting data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = deleteHandler;
