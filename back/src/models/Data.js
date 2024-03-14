const { DataTypes } = require('sequelize');

module.exports = (sequelize) =>
{
  sequelize.define('Data', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cloudinary: {
      type: DataTypes.JSON, // Assuming you want to store JSON data from Cloudinary
      allowNull: true, // Depending on your requirements
    }
  }, { timestamps: false });
};
