import React from "react";

const highlightText = (text, searchTerm) => {
  if (!searchTerm) return text;

  const regex = new RegExp(`(${searchTerm})`, "gi");
  return text.replace(regex, "<span class='highlight'>$1</span>");
};

const UserCard = ({ name, email, company, searchTerm }) => {
  return (
    <div className="user-card">
      <h3 dangerouslySetInnerHTML={{ __html: highlightText(name, searchTerm) }}></h3>
      <p dangerouslySetInnerHTML={{ __html: highlightText(email, searchTerm) }}></p>
      <p>
        <strong>Company:</strong> {company || "N/A"}
      </p>
    </div>
  );
};

export default UserCard;
