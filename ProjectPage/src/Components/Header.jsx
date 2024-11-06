import React from "react";
import styles from "./Header.module.css";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <>
      <div className={styles.Header}>
        <div className={styles.logo}>
          <img
            src="https://s3-alpha-sig.figma.com/img/4517/5a94/d5389cc06b9d40c646878c60ac4bf7ed?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NxpXNCnISBLzC-yU9Ezsl1DHtwahh0M78H7Mgem-K3QzmKiNSpBT88pehBHwVvQwEpqt7VPEJnYXcH9MDiT37nPUrO~Jxa5e2J5LhsHQhUQiyueEQEeRKLuwsn56Qu8NuwKdpfdnS6LHCPXXZQ6m0TkJA1BWonN6pYj8iDUHHgkLq4bV~MBMyljAuEBUiI0iBDRL7CsHLcOU6CeqMhHfPIYT~eeHc~P~x0OLacitr2vIIhtMHmEUri6sIuS80SU9hYjof9i7G6Ek1sWub0BfVzzDKnxnxXGNKLrp4DmblueY2JflBePDLiNMTwIV3lAsVHrBhAWzK9ph8tUmNCmlOw__"
            alt=""
          />
        </div>
         
        <NavBar />

        <button className={styles.loginButton}>Login</button>
      </div>
    </>
  );
};

export default Header;
