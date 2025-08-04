import React from "react";

function Profile({user}) {
  return (
  <div className="profile-page">
    <img src={user.avatar} alt={`${user.firstname} ${user.lastname} avatar`} /> 
     <h3>First Name: {user.firstname}</h3>
     <h3>Last Name: {user.lastname}</h3>
     <h3>Email: {user.email}</h3>         
  </div>
  )
}

export default Profile;
