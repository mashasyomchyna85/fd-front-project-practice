import React from 'react';
import styles from './FindThePerfectBrand.module.css';


const FindThePerfectBrand = () => {
    return (
        <section className={styles['why-block']}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <div className={styles['left-content']}>
                        <h3 className={styles.textH3}>Find The Perfect Brand Name Today!</h3>
                        <div className={styles.control}>
                            <a href='#' className={styles.button}><span className={styles.textIcon}>Explore names for Sale  </span> 
                            <i class="fas fa-thin fa-arrow-right" ></i></a>
                            <span className={styles.text}>or</span>
                            <a href='#' className={styles.button}>I want a Custom Name</a>
                        </div>

                    </div>
                </div>
                <div className={styles.right}>
                    <h3 className={styles.textH3Right}>Why Squadhelp?</h3>
                    <div className={styles.item}>
                        <h4 className={styles.textH4}>Disrupting The Traditional Agency Model</h4>
                        <p className={styles.pText}>Squadhelp is reimagining how naming is done, providing fast, affordable, high-quality, soup-to-nuts solutions unlike anyone else.</p>
                    </div>
                    <div className={styles.item}>
                        <h4 className={styles.textH4}>Satisfaction Guarantee</h4>
                        <p className={styles.pText}>We have policies in place to ensure that you are satisfied with your experience.</p>
                    </div>
                    <div className={styles['list-tags']}>
                        <a href='#' className={styles.abtn}>Contest Policies</a>
                        <a href='#' className={styles.abtn}>Marketplace Policies</a>
                    </div>
                </div>
            </div>
            
        </section>
    );
}

export default FindThePerfectBrand;
