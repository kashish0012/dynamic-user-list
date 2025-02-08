import React from "react";
import UserCard from "./UserCard";

const UserList = ({ users, searchTerm }) => {
  if (!users || !Array.isArray(users)) {
    return <div className="no-results">Error: Unable to load users.</div>;
  }

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {filteredUsers.length > 0 ? (
        filteredUsers.map((user) => (
          <UserCard
            key={user.id}
            name={user.name}
            email={user.email}
            company={user.company?.name || "N/A"}
            searchTerm={searchTerm}
          />
        ))
      ) : (
        <div className="no-results">No users found.</div>
      )}
    </div>
  );
};

export default UserList;
