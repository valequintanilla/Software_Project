import React from 'react';
import { Link } from 'react-router-dom';

const AdminHomepage = () => {
  return (
    <div
      style={{
        backgroundColor: 'black',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1>Admin Homepage</h1>
      <Link
        to="/current-status"
        style={{
          backgroundColor: 'darkorange',
          color: 'black',
          padding: '10px',
          marginBottom: '20px',
          textDecoration: 'none',
        }}
      >
        Current Status
      </Link>
      <Link
        to="/manage-show"
        style={{
          backgroundColor: 'darkorange',
          color: 'black',
          padding: '10px',
          textDecoration: 'none',
        }}
      >
        Manage Show
      </Link>
    </div>
  );
};

export default AdminHomepage;
