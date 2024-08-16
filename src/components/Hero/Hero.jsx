import React from 'react';
import styles from './Hero.module.css';
import heroImage from "../../assets/hero-image-2x.png";

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.heroText}>
                <h1>Welcome to Little Explorers Creche.</h1>
                <p className={styles.welcome}>
                    Welcome to Little Explorers! 🌟 Safe, secure, and nurturing
                    environment for your child's growth. Experienced staff, early
                    learning, flexible hours. Cozy nap areas, fun play zones,
                    nutritious meals. Enroll now!
                </p>
                <p className={styles.address}>No 2, KG 327, Behind MTN Center, Nyarutarama, Kigali, Rwanda</p>

                <button className="offerBtn" datatype='inverted'>Our Offers</button>
            </div>

            <div className={styles.heroImage}>
                <img src={heroImage} alt="hero-image" />
            </div>
        </section>
    )
}

export default Hero