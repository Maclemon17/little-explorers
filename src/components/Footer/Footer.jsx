import React from 'react';
import styles from './Footer.module.css';
import logo from '../../assets/footer-logo.svg';
import twitter from '../../assets/twitter.svg';
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import linkedin from '../../assets/linkedin.svg';

const Footer = () => {
    return (
        <footer>
            <div className={styles.footerLogo}>
                <img src={logo} alt="logo" />
            </div>
            <div className={styles.footerContent}>
                <div className={styles.footerText}>
                    <h3>Little Explorers</h3>
                    <p>Welcome to Little Explorers! 🌟 Safe, secure, nurturing environment for growth. Experienced staff, early learning, flexible hours, cozy naps, fun play, nutritious meals. Enroll now!</p>

                    <div className={styles.socialIcons}>
                        <div>
                            <img src={twitter} alt="twitter" />
                        </div>
                        <div>
                            <img src={facebook} alt="facebook" />
                        </div>
                        <div>
                            <img src={instagram} alt="instagram" />
                        </div>
                        <div>
                            <img src={linkedin} alt="linkedin" />
                        </div>
                    </div>
                </div>

                <div className={styles.footerLinks}>
                    <h3>Useful Links</h3>
                    <div className={styles.links}>
                        <a href="#">About Us</a>
                        <a href="#">Contact Us</a>
                        <a href="#">Terms of service</a>
                    </div>
                </div>
            </div>

        
            <p className={styles.copy}>
                @copyright 2024 all right reserved by titan construction
            </p>
        </footer>
    )
}

export default Footer