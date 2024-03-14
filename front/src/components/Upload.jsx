import { useState } from "react";

const Upload = () =>
{
  const [fileInput, setFileInput] = useState("");
  const [previewSource, setPreviewSource] = useState();
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e) =>
  {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileInputChange = (e) =>
  {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () =>
    {
      setPreviewSource(reader.result)
    }

  }

  const handleSubmit = (e) =>
  {
    e.preventDefault();
    if (!previewSource) return;
    uploadData(previewSource)
  };

  const uploadData = async (base64EncodedImage) =>
  {
    try
    {
      await fetch("http://localhost:3001/upload", {
        method: "POST",
        body: JSON.stringify({ encodedImage: base64EncodedImage, ...formData }),
        headers: { "Content-type": "application/json" }
      })
    } catch (error)
    {
      console.error(error)
    }
  }

  return (
    <div>
      <h2>Upload</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        {/* i need to improve the third input rendering */}
        <input
          type="file"
          name="fileInput"
          value={fileInput}
          onChange={handleFileInputChange}
        />
        {/* <label>
          Choose File
          <input
            type="file"
            name="fileInput"
            onChange={handleFileInputChange}
            style={{ display: "none" }}
          />
        </label>
        {previewSource && <div>{fileInput.name}</div>} */}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Upload;
