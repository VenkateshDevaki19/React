import React from 'react'
import { useContext } from 'react'
import AuthContext from '../AuthProvider'

const Profile = () => {
    const {user, logout} = useContext(AuthContext);
  return (
    <div>
      <h1>User Profile</h1>
      <p>Username: {user?.username}</p>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Profile
