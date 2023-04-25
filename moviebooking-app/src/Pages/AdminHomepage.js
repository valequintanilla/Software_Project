import React from 'react';

const AdminHomepage = () => {
  return (
    <div
      style={{
        backgroundColor: 'red',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1>Admin Homepage</h1>
      <button
        style={{
          backgroundColor: 'white',
          color: 'black',
          padding: '10px',
          marginBottom: '20px',
        }}
      >
        Current Status
      </button>
      <button
        style={{
          backgroundColor: 'white',
          color: 'black',
          padding: '10px',
        }}
      >
        Manage Show
      </button>
    </div>
  );
};

export default AdminHomepage;
