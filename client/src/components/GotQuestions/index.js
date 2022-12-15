import React from 'react';
import styles from './GotQuestions.module.css';

const GotQuestions = () => {
    return (
        <div className={styles.wrapper}> 
            <div className={styles.leftPart}>
                <h3 className={styles.textH3}>Got Questions?</h3>
                <p className={styles.text}>Speak with a Squadhelp platform expert to learn more and get your questions answered.</p>
                <button className={styles.btn}>Schedule Consultation</button>
            </div>
            <div className={styles.rightPart}>
                <ul>
                    <li className={styles.btnIcon}>
                        <a href='#' className={styles.href}>
                        <i class="fas fa-phone"></i>
                        <span className={styles.textIcon}> (877) 355-3585 </span>     
                        </a>
                    </li>
                    <li className={styles.btnIcon}>
                        <a href='#' className={styles.href}>
                        <i class="fas fa-comment-dots"></i>
                        <span className={styles.textIcon}>  Live Chat </span>     
                        </a>
                    </li>
                    <li className={styles.btnIcon}>
                        <a href='#' className={styles.href}>
                        <i class="fas fa-envelope"></i>
                        <span className={styles.textIcon}>  Contact Us </span>         
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default GotQuestions;
