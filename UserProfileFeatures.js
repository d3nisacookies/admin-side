import React from 'react';
import './App.css'; // Import CSS file

function App() {  
// Function to handle going back
  const goBack = () => {
    window.location.href = "landingPage.js";
  };

  return (
    <div>
      <div className="UserAcctFeat">
        <div className="AcctFeat">
          <a href="CreateUserProfile.js">
            <img src="CreateUser.png"/>
          </a>
          <p>Create User</p>
        </div>

        <div className="AcctFeat">
          <a href="ViewProfile.js">
            <img src="ViewUser.jpg"/>
          </a>
          <p>View User</p>
        </div>

        <div className="AcctFeat">
          <a href="SearchProfile.js">
            <img src="SearchUser.png"/>
          </a>
          <p>Search User</p>
        </div>

        <div className="AcctFeat">
          <a href="SuspendProfile.js">
            <img src="suspendUser.jpeg" />
          </a>
          <p>Suspend User</p>
        </div>

        <div className="AcctFeat">
          <a href="UpdateProfile.js">
            <img src="UpdateUser.png"/>
          </a>
          <p>Update User</p>
        </div>
      </div>

      <div className="buttons-container">
        <button className="logOutController" name="logout">Logout</button>
        <button className="go-back-button" onClick={goBack}>Back</button>
      </div>
    </div>
  );
}

export default App;
