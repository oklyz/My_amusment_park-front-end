import React from "react";

const Profile =({ user })=> {
  
  if (!user) {
    return <p>Loading profile ...</p>
  }

  return (
  <div className="profile-page">
    <img src={`image.png`} alt={`${user.firstName} ${user.lastName} avatar`} /> 
    <h3>First Name: {user.firstName}</h3>
    <h3>Last Name: {user.lastName}</h3>
    <h3>Email: {user.email}</h3>         
  </div>
  )
}

export default Profile;
