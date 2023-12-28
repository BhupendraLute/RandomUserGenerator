import React from "react";

function ProfileCard({
  photo,
  nameTitle,
  firstName,
  lastName,
  email,
  gender,
  age,
  state,
  country,
  postcode,
}) {
  return (
    <div className="flex-col flex-center flex-gap-1 profile">
      <div className="flex flex-center photo">
        <img src={photo} alt="user-pohto" />
      </div>
      <div className="info">
        <p className="data-field">
          <strong>Name:</strong> {nameTitle} {firstName} {lastName}
        </p>
        <p className="data-field">
          <strong>Email:</strong> {email}
        </p>
        <p className="data-field">
          <strong>Gender:</strong> {gender}
        </p>
        <p className="data-field">
          <strong>Age:</strong> {age}
        </p>
        <p className="data-field">
          <strong>Address:</strong> {state}, {country}-{postcode}
        </p>
      </div>
    </div>
  );
}

export default ProfileCard;
