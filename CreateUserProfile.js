// AddNewUserProfile.js
import React, { useState } from 'eact';
import axios from 'axios';
import './CreateUserProfile.css'

const AddNewUserProfile = ()=> {
  const [profile, setProfile] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!profile) {
        setErrorMessage('Please fill in all required fields.');
      return;
    }

    // Call API to create the new user profile
    const userProfileData = { profile};
    axios.post('/api/user-profiles', userProfileData)
      .then((response) => {
        const { data } = response;
        console.log("Profile Created Successfully")
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className='user-profile-form'>

{errorMessage && <div className="error-message">{errorMessage}</div>}

      <label>Enter new user profile here!:</label>
      <input type="text" value={profile} onChange={(e) => setProfile(e.target.value)} />

      <button type="submit">Create User Profile</button>
    </form>
  );
};

export default AddNewUserProfile;