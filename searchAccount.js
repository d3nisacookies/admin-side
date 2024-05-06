import React, { useState } from 'react';
import './App.css'; // Import CSS file

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [employeeName, setEmployeeName] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`API_ENDPOINT_HERE?name=${employeeName}`);
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const goBack = () => {
    window.location.href = "../UserAccount/AccountFeatures.php";
  };

  return (
    <div>
      <h2>Search Users</h2>
      <div className="searchForm">
        <form onSubmit={handleSubmit}>
          <label htmlFor="E_Name">Account Name:</label>
          <input
            type="text"
            id="E_Name"
            name="E_Name"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
            required
          />
          <button type="submit" name="search">Search</button>
        </form>
      </div>

      <div className="displayResult">
        {searchResults.length > 0 ? (
          <div className="searchResults">
            <table>
              <thead>
                <tr>
                  <th>User ID</th>
                  <th>Name</th>
                  <th>Role</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {searchResults.map(user => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.role}</td>
                    <td>{user.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div>No results found.</div>
        )}
      </div>

      <div className="buttons-container">
        <form method="post" name="logout">
          <button className="logOutButton" name="logout">Logout</button>
        </form>
        <button className="go-back-button" onClick={goBack}>Back</button>
      </div>
    </div>
  );
}

export default App;
