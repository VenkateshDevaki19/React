import React, { createContext, useState } from 'react'

const ReviewContext = createContext();

const UserContext = () => {
    const[users, setUsers] = useState([]);
    const[currentUserIndex, setCurrentUserIndex] = useState(0);
  return (
    <div>
      
    </div>
  )
}

export default UserContext
