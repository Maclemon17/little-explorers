import React from 'react';
import styles from './ContactUs.module.css';
import whatsapp from '../../assets/whatsapp.png';
import messenger from '../../assets/messenger.png';
import email from '../../assets/email.png';
import call from '../../assets/call.png';

const ContactUs = () => {
  return (
    <section className={styles.contactUs}>
        <div className={`${styles.curvedOverlay} ${styles.top}`}></div>

        <div className={styles.heading}>
            <p>No 2, KG 327. Behind MTN Center. Nyarutarama, Kigali, Rwanda</p>
            <h2>Needs Help? Let’s Get in Touch</h2>
        </div>
        <div className={styles.socials}>
            <div className={styles.social}>
                <img src={whatsapp} alt="whatsapp" />
                <p>Chat Us On WhatsApp</p>
            </div>
            <div className={styles.social}>
                <img src={messenger} alt="messenger" />
                <p>Chat Us On Messenger</p>
            </div>
            <div className={styles.social}>
                <img src={email} alt="email" />
                <p>Send An Email</p>
            </div>
            <div className={styles.social}>
                <img src={call} alt="call" />
                <p>Call In</p>
            </div>
        </div>

        <div className={`${styles.curvedOverlay} ${styles.bottom}`}></div>
    </section>
  )
}

export default ContactUs