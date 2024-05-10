
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './SearchProfile.css';

const UserProfileList = () => {
  const [userProfiles, setUserProfiles] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchUserProfiles = async () => {
      try {
        const response = await axios.get('/api/user-profiles');
        setUserProfiles(response.data);
      } catch (error) {
        console.error("error fetching data");
      }
    };

    fetchUserProfiles();
  }, []);

  const filteredUserProfiles = userProfiles.filter((profile) =>
    profile.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='user-profile-list'>
      <h1 className='title'>User Profiles</h1>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search by name..."
      />
      <ul className='profile-list'>
        {filteredUserProfiles.map((profile) => (
          <li key={profile.id} className='profile-item'>
            {profile.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserProfileList;