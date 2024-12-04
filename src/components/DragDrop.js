import React, { useState } from 'react';

const DragDrop = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setSelectedFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleReset = () => {
    setSelectedFile(null);
    setPreview(null);
  };

  const handleSubmit = () => {
    if (selectedFile) {
      console.log("File ready for submission:", selectedFile.name);
      // You can simulate the upload here or implement real file submission
    } else {
      alert("No file selected!");
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <div
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        style={{
          border: '2px dashed #ccc',
          borderRadius: '10px',
          width: '300px',
          height: '200px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 'auto',
          marginBottom: '20px', // Space below the drop zone
        }}
      >
        {preview ? (
          <img src={preview} alt="Preview" style={{ maxWidth: '100%', maxHeight: '100%' }} />
        ) : (
          <p>Drag & Drop an image here</p>
        )}
      </div>

      <div>
        <button
          onClick={handleSubmit}
          style={{
            padding: '10px 20px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            margin: '10px',
            fontSize: '16px',
          }}
        >
          Submit
        </button>
        <button
          onClick={handleReset}
          style={{
            padding: '10px 20px',
            backgroundColor: '#f44336',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            margin: '10px',
            fontSize: '16px',
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default DragDrop;
