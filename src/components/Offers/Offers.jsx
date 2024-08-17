import React from 'react';
import styles from './Offers.module.css';
import activity from '../../assets/activity.png';
import snack from '../../assets/snack.png';
import regulation from '../../assets/regulation.png';
import tution from '../../assets/tution.png';
import OfferCard from '../Hero/Card/OfferCard';

const Offers = () => {

    const cardData = [
        {
            "title": "Activity Timetable",
            "text": "Flexible, engaging schedule tailored to children’s developmental needs.",
            "link": "View Timetable",
            "image": activity,
        },
        {
            "title": "Snack & Meals",
            "text": "Nutritious, delicious meals fostering healthy eating habits.",
            "link": "View Menu",
            "image": snack,
        },
        {
            "title": "Our Regulations",
            "text": "Safe, secure, and structured environment promoting children's well-being.",
            "link": "View Regulations",
            "image": regulation,
        },
        {
            "title": "Tuition",
            "text": "Affordable, transparent pricing with flexible payment options available.",
            "link": "View Tuition",
            "image": tution,
        },
    ]



    return (
        <section className={styles.offers}>
            <div className={styles.heading}>
                <div className={styles.headingText}>
                    <p>Educational Plan</p>
                    <h2>Learn More About Our Offers</h2>
                </div>
            </div>
            <div className={styles.offersGroup}>
                {
                    cardData.map((data, id) => (
                        <OfferCard key={id} data={data} />
                    ))
                }
            </div>
        </section>
    )
}

export default Offers