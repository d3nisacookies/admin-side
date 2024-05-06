import React from 'react';
import './App.css'; // Import CSS file

const Button = (props) => {
  return (
    <button
      className={`button ${props.variant}`} // Menggunakan template literal untuk menggabungkan kelas
      type="submit"
    >
      {props.children}
    </button>
  );
}

function App() {
  return (
    <div className="container">
      <div className="buttons-wrapper">
        <div className="green-buttons">
      
          <div className="foto">
            <img src="Account.jpg"/>
            <Button variant="green">User Account Feature</Button>
          </div>

          <div className="pict">
            <img src="Profile.png"/>
            <Button variant="green">User Profile Feature</Button>
          </div>
        </div>
          <div className="red-button">
            <Button variant="red">Logout</Button>
          </div>
      </div>
    </div>
  );
}

export default App;
