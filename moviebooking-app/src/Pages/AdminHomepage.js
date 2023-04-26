import React from 'react';
import { useHistory } from 'react-router-dom';

const AdminHomepage = () => {
  const history = useHistory();

  const handleCurrentStatus = () => {
    history.push('/current-status');
  };

  const handleManageShow = () => {
    history.push('/manage-show');
  };

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
        onClick={handleCurrentStatus}
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
        onClick={handleManageShow}
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
