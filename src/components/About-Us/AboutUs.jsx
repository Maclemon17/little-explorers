import React from 'react';
import styles from './AboutUs.module.css';
import aboutImage from '../../assets/image.png';

const AboutUs = () => {
    return (
        <section className={styles.aboutUs}>
            <div className={styles.contentBox}>
                <div className={styles.aboutText}>
                    <div className={styles.heading}>
                        <h4>More About Us</h4>
                        <h2>We Accomodate all children between 1 - 3 years</h2>
                    </div>
                    <div className={styles.para}>
                        <p>
                            our classrooms are designed to be vibrant, safe, and stimulating
                            environments where children can explore, learn, and grow. Our
                            comprehensive curriculum is tailored to meet the developmental
                            needs of each age group, incorporating a blend of play-based learning,
                            structured activities, and hands-on experiences. We aim to foster creativity,
                            critical thinking, and social skills, ensuring every child builds a strong
                            foundation for future learning.
                        </p>
                    </div>

                    <button datatype='big' className='offerBtn'>Learn More</button>
                </div>
                <div className={styles.aboutImage}>
                    <img src={aboutImage} alt="about-us" />

                    <div className={styles.enroll}>
                        <h4 className={styles.step}><span>1</span>Make Inquires</h4>
                        <h4 className={styles.step}><span>2</span>Visit For A Tour</h4>
                        <h4 className={styles.step}><span>3</span>Enroll Child</h4>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs