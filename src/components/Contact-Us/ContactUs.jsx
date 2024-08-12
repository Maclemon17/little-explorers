import React from 'react';
import styles from './ContactUs.module.css';
import whatsapp from '../../assets/whatsapp.png';
import messenger from '../../assets/messenger.png';
import email from '../../assets/email.png';
import call from '../../assets/call.png';

const ContactUs = () => {
  return (
    <section className={styles.contactUs}>
        <div>
            <p>No 2, KG 327. Behind MTN Center. Nyarutarama, Kigali, Rwanda</p>
            <h2>Needs Help? Let’s Get in Touch</h2>
        </div>
        <div className={styles.socials}>
            <div className={styles.social}>
                <img src={whatsapp} alt="" />
                <span>Chat Us On WhatsApp</span>
            </div>
            <div className={styles.social}>
                <img src={messenger} alt="" />
                <span>Chat Us On Messenger</span>
            </div>
            <div className={styles.social}>
                <img src={email} alt="" />
                <span>Send An Email</span>
            </div>
            <div className={styles.social}>
                <img src={call} alt="" />
                <span>Call In</span>
            </div>
        </div>
    </section>
  )
}

export default ContactUs