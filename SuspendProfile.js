import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './SuspendProfile.css';

const UserProfile = ({ match }) => {
  const [userProfile, setUserProfile] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [isSuspended, setIsSuspended] = useState(false);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(`/api/user-profiles/${match.params.id}`);
        setUserProfile(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserProfile();
  }, [match.params.id]);

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const response = await axios.get(`/api/accounts?user_profile_id=${userProfile.id}`);
        setAccounts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    if (userProfile) {
      fetchAccounts();
    }
  }, [userProfile]);

  const handleSuspend = async () => {
    try {
      await axios.put(`/api/user-profiles/${userProfile.id}/suspend`);
      setIsSuspended(true);
    } catch (error) {
      console.error(error);
    }
  };

  if (!userProfile) {
    return <div>Loading...</div>;
  }

  return (
    <div className="user-profile">
      <h1 className="title">{userProfile.name}</h1>
      <p className="role">{userProfile.role}</p>
      <h2 className="accounts-title">Accounts</h2>
      <ul className="accounts-list">
        {accounts.map((account) => (
          <li key={account.id} className="account-item">
            {account.name}
          </li>
        ))}
      </ul>
      <button className="suspend-button" onClick={handleSuspend}>
        Suspend User Profile
      </button>
      {isSuspended && <p className="suspended-message">User Profile Suspended</p>}
    </div>
  );
};

export default UserProfile;