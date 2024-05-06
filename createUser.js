import React, { useState } from 'react';
import './App.css'; // Import CSS file

function App() {  
  const [role, setRole] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lakukan logika untuk mengirim data ke server
    // Anda dapat menggunakan axios atau fetch untuk mengirim data ke endpoint CreateAcctController.php
  };

  const goBack = () => {
    window.location.href = "AccountFeatures.php";
  };

  return (
    <div className="container">
      <h2>Create User Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Choose your role:</label>
          <select value={role} onChange={(e) => setRole(e.target.value)} required>
            <option value="">Select Role</option>
            <option value="system_admin">System Admin</option>
            <option value="buyer">Buyer</option>
            <option value="seller">Seller</option>
            <option value="property_agent">Property Agent</option>
          </select>
        </div>
        <div className="form-group">
          <label>Input your username:</label>
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Input your password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className="button-container">
        <button className="createButton" type="submit">Create</button>
        </div>
        
      </form>

      <div className="button-container">
        <form method="post" name="logout">
          <button className="logOutButton" name="logout">Logout</button>
        </form>
        <button className="go-back-button" onClick={goBack}>Back</button>
      </div>
    </div>
  );
}

export default App;