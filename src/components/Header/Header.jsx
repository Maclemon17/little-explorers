import React from 'react'
import logo from '../../assets/logo.svg';
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <img src={logo} alt="Little Explorer Logo" />
        </div>

        <button className="offerBtn">Our Offers</button>
      </nav>
    </header>
  )
}

export default Header