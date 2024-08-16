import React from 'react';
import styles from './Card.module.css';

const Card = ({ data }) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardHeader}>
                <img src={data.image} alt="card image" />
                <h3 className={styles.cardTitle}>{data.title}</h3>
            </div>
            <div className={styles.cardBody}>
                <p>{data.text}</p>
            </div>
        </div>
    )
}

export default Card