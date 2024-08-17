import React from 'react'
import styles from './OfferCard.module.css';
import arrowRight from '../../../assets/arrow-right.svg';

const OfferCard = ({data}) => {

    return (
        <div className={styles.offerCard}>
            <div className={styles.cardImage}>
                <img src={data.image} alt={data.title} />
            </div>
            <div className={styles.cardText}>
                <h4>{data.title}</h4>
                <p>{data.text}</p>

                <div className={styles.link}>
                    <a href="#">{data.link}</a>
                    <img src={arrowRight} alt="arrow" />
                </div>
            </div>
        </div>
    )
}

export default OfferCard