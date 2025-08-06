import React from "react";
import { Link } from "react-router-dom";
import Client from "../services/api";


const Profile =({ user, setUser })=> {
  
  const handleClick = () => {
    Client.delete(`/auth/user/${user.id}`)
    setUser(null)
  }

  if (!user) {
    return <p>Loading profile ...</p>
  }

  return (
  <div className="profile-container">
    <div className="profile-page">
      <div className="profile-details">
        <img src={`image.png`} alt={`${user.firstName} ${user.lastName} avatar`} />
        <h3>First Name: {user.firstName}</h3>
        <h3>Last Name: {user.lastName}</h3>
        <h3>Email: {user.email}</h3>
        <Link to="/">
        <button onClick={handleClick}>Delete Account</button>         
        </Link>
      </div>
    </div>
  </div>
  )
}

export default Profile;
