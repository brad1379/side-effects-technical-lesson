import './App.css'
import React, { useState, useEffect } from "react";


// Replace this with your own API endpoint or leave it as an empty string
const API_URL = "https://jsonplaceholder.typicode.com/users/1";

function App() {
  // State for userName
  const [userName, setUserName] = useState("Guest");

  // State for userData fetched from an API
  const [userData, setUserData] = useState(null);

  // 1. TODO: useEffect to update document title based on userName
  //    - This effect should run whenever 'userName' changes.
  useEffect(() => {
    document.title = `Welcome, ${userName}`;
  }, [userName]);

  // 2. TODO: useEffect to fetch data from API_URL on component mount
  //    - This effect should only run once when the component first renders.
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/2")
    .then(response => response.json())
    .then(data => {
      setUserData(data);
    })
    .catch(error => console.error("Error fetching user:", error));
  }, []);


  // 3. TODO: useEffect to set up a window event listener (e.g., for clicks)
  //    - Return a cleanup function to remove the event listener on unmount.
  return (
  <div>
    <h1>Hello, {userName}!</h1>
    <input 
      type="text"
      value={userName}
      onChange={(e)=>setUserName(e.target.value)}
    />
    {userData && (
      <div>
        <h2>User Info</h2>
        <p>Name: {userData.name}</p>
        <p>Email: {userData.email}</p>
      </div>
    )}
  </div>
  );

}

export default App;
