import React from 'react';
import styles from "../../CSS/Landing_page_css/FourthDiv.module.css";

const FourthDiv = () => {
    return (
        <div className={styles.mainCard}>
            <div className={styles.card} >
                <img width="100%" src="https://rukminim1.flixcart.com/flap/436/234/image/1ce0c4c1fb501b45.jpg?q=50" alt="pic" />
            </div>
            <div className={styles.card}>
                <img src="https://rukminim1.flixcart.com/flap/436/234/image/2f30db9425df5cec.jpg?q=50" alt="pic"/>
            </div>
            <div className={styles.card}>
                <img src="https://rukminim1.flixcart.com/flap/436/234/image/084789479074d2b2.jpg?q=50" alt="pic"/>
            </div>
        </div>
    );
};

export default FourthDiv;