import React from 'react';
import DragDrop from './components/DragDrop'; // Import the DragDrop component

function App() {
  return (
    <div
      style={{
        textAlign: 'center',
        marginTop: '50px',
        backgroundColor: '#f7f7f7', // A light background color for the app
        minHeight: '100vh', // Ensure the page covers the full height
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h1
        style={{
          fontSize: '2rem',
          color: '#333', // Darker text for readability
          marginBottom: '20px', // Add space below the header
        }}
      >
        Drag and Drop Image Upload
      </h1>
      <DragDrop /> {/* The DragDrop component */}
    </div>
  );
}

export default App;
