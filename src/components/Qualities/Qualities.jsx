import React from 'react';
import styles from './Qualities.module.css';
import slider from '../../assets/slider.png';
import palm from '../../assets/palm.png';
import music from '../../assets/music.png';
import teacher from '../../assets/teacher.png';
import Card from './Card/Card';

const Qualities = () => {

    const qualitiesCard = [
        {
            "title": "Outdoor Play",
            "image": slider,
            "text": "Essential for their physical, cognitive, and social-emotional development"
        },
        {
            "title": "Fine Motor Skills",
            "image": palm,
            "text": "Helps develop the small muscles in a child's hands and fingers, which are essential"
        },
        {
            "title": "Music & Movement",
            "image": music,
            "text": "Helps to stimulate their senses, improve coordination, and foster creativity"
        },
        {
            "title": "Best Teachers",
            "image": teacher,
            "text": "Our team of highly qualified and passionate teachers is dedicated to nurturing and educating your child in a supportive environment"
        },
    ];

    return (
        <section className={styles.qualities}>
            <div className={styles.heading}>
                <h2>Providing Good Qualities For Your Loving Kids</h2>
            </div>

            <div className={styles.cardGroup}>
                {
                    qualitiesCard.map((cardData, id) => (
                        <Card key={id} data={cardData} />
                    ))
                }
            </div>
        </section>
    )
}

export default Qualities