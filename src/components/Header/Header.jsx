import React from 'react'
import logo from '../../assets/logo.svg';
import styles from './Header.module.css'

const Header = () => {
  return (
    <header cladd>
      <div className={styles.logo}>
        <img src={logo} alt="Little Explorer Logo" />
      </div>

      <button className={styles.offerBtn}>Our Offers</button>
    </header>
  )
}

export default Header