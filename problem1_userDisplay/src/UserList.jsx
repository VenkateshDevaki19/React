import React, { useState } from 'react'
import UserDisplay from './UserDisplay';
import styles from './UserList.module.css';
import users from './users.json'; 


const UserList = () => {

    const [sortedUsers, setSortedUsers] = useState(users);
    const[isAscending, SetIsAscending] = useState(true);

    const sortUsers = () =>{
        const sorted = [...sortedUsers].sort((a,b) =>{
            if(isAscending){
                return a.first_name.localeCompare(b.first_name);
            }else{
                return b.first_name.localeCompare(a.first_name);
            }
        });

        setSortedUsers(sorted);
        SetIsAscending(!isAscending);
    }
  return (
    <div className={styles.userList}>
      <button onClick={sortUsers}>
        Sort by First Name {isAscending ? 'Ascending' : 'Descending'}
      </button>
      {sortedUsers.map(user => (
        <UserDisplay key={user.id} user={user} />
      ))}
    </div>
  )
}

export default UserList
