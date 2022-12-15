import React, { useState } from 'react';
import styles from './Pricing.module.css';

const Pricing = () => {
    const [select, setSelect] = useState('Name');

    const changeHandler = ({target: {value}}) => {
        setSelect(value)
    }

    return (
            <div className={styles.container}>
                <p className={styles['text-pricing']}>Pricing for</p>
                <div className={styles['select-wrapper']}>{select}
                    <div className={styles['select-arrow']}><i className='fas fa-chevron-down'></i></div>
                        <select onChange={changeHandler} value={select} className={styles['select-menu']}>
                            <option value='Name'>Name</option>
                            <option value='Logo'>Logo</option>
                            <option value='TagLine'>Tagline</option>
                            <option value='Name and Logo'>Name and Logo</option>
                            <option value='Name and Tagline'>Name and Tagline</option>
                        </select>
                </div>
                <img src='./staticImages/Logo.jpg' className={styles.img}/>
            </div>
    );
}

export default Pricing;
