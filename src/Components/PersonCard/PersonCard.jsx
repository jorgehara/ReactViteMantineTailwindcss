import React from "react";

const PersonCard = (props) => {
  const { id, avatar, name, job, email } = props.person;
  return (
    <div>
      <img src={avatar} alt={`${name}'s avatar`} />
      <h2>{name}</h2>
      <p>{job}</p>
      <p>{email}</p>
    </div>
  );
};

export default PersonCard;
