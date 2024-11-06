import React from 'react'
import styles from './Header.module.css'

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <h3 className='h3_menu'>Menu</h3>
      <h3 className='h3_Location'>Location</h3>
      <h3 className='h3_About'>About</h3>
      <h3 className='h3_Contact'>Contact</h3>
    </div>
  )
}

export default NavBar
