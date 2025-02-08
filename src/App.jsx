import React, { useState, useEffect } from "react";
import "./App.css";
import UserList from "./components/UserList";

const App = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value); // Update the search term
  };

  return (
    <div className="container">
      <h1>Dynamic User List</h1>
      <input
        type="text"
        className="search-bar"
        placeholder="Search users by name or email..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <UserList users={users} searchTerm={searchTerm} />
    </div>
  );
};

export default App;
