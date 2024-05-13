import React, { useEffect, useState } from 'react';
import axios from 'axios';
import userProfiles from './data';
import './UpdateUserProfile.css';
const UpdateUserProfile = ({ match }) => {
  const [userProfile, setUserProfile] = useState(null);
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        // const response = await axios.get(`/api/user-profiles/${match.params.id}`);
        const userProfile = userProfiles.find((profile) => profile.id === parseInt(match.params.id, 10));        setUserProfile(response.data);
        setName(response.data.name);
        setRole(response.data.role);
        setEmail(response.data.email);
        setAccounts(response.data.accounts);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserProfile();
  }, [match.params.id]);

//   const handleDeleteAccount = async (accountId) => {
//     try {
//       const updatedAccounts = accounts.filter((account) => account.id!== accountId);
//       setAccounts(updatedAccounts);

//       const updatedUserProfile = {...userProfile, accounts: updatedAccounts };

//       axios.put(`/api/user-profiles/${userProfile.id}`, updatedUserProfile)
//       .then((response) => {
//           console.log('Account Deleted Successfully');
//         })
//       .catch((error) => {
//           console.error(error);
//         });
//     } catch (error) {
//       console.error(error);
//     }
// This is for when you want to call api
//   };

const handleUpdateUserProfile = () => {
    const updatedUserProfile = {...userProfile, name, role, email, password, accounts };

    // Update the user profile in the mock data array
    const updatedUserProfiles = userProfiles.map((profile) => {
      if (profile.id === updatedUserProfile.id) {
        return updatedUserProfile;
      }
      return profile;
    });

    // Update the mock data array in the component state
    setUserProfiles(updatedUserProfiles);
  };
  //comment this pare out if using the real api calls.

  return (
    <div className='update-user-profile'>
      <h1 className='title'>{name}</h1>
      <p className='role'>{role}</p>
      <h2 className='accounts-title'>Accounts</h2>
      <ul className='accounts-list'>
        {accounts.map((account) => (
          <li key={account.id}>
            {account.name} - {account.email}
            <button className='delete-button' onClick={() => handleDeleteAccount(account.id)}>Delete</button>
          </li>
        ))}
      </ul>// dont need to use the upper codes, use this instead
      <button className='update-button' onClick={handleUpdateUserProfile}>Update User Profile</button>
    </div>
  );
};

export default UpdateUserProfile;