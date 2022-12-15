import React from 'react';
import styles from './PricingForMain.module.css';



const CheckedItem = (props) => {
    return (
        <div className={styles.check}>
            <i className='fas fa-check'></i>
            <span className={styles.checkedText}> {props.children} </span>
        </div>
    )
}

const Column = (props) => {
    const {title, text, price, save, color} = props;
    return (
        <>
        <div className={styles['top-box']} style={{border: `10px solid ${color}`}}>
            <div className={styles['text-container']}>
                <h3 className={styles.title} style={{color: `${color}`}}>{title}</h3>
                <p className={styles.text}>{text}</p>
                <p className={styles.price} style={{color: `${color}`}}> {price}</p>
                <div className={styles.save} style={{color: `${color}`}}>{save}</div>
            </div>        
        </div>
        <ul>
            {props.children}
        </ul>
        <a href='#' className={styles.startBtn} style={{backgroundColor: `${color}`}}>
            <i className='fas fa-check'></i> Start
        </a>
        </>
    )
}

const PricingForMain = () => {
    return (
    <>
    <section className={styles['pricing-for-main']}>
        <div className={styles.container}>
            <div className={styles.column}>
                <Column title='Bronze' 
                        text = 'Branding on a budget'
                        price = '299' save= 'Save $50' color='#e0b48d'>
                    <ul>
                        <li >Includes 2 Contests (Name, Logo) </li>
                        <li className={styles['grey-line']}></li>
                        <li >Prize to Winner - $270 ($135 for Name, $135 for Logo) (Included)  </li>
                        <li className={styles['grey-line']}></li>
                        <li>Validation Services & Upgrades ($39 value)  
                            <CheckedItem> Matching .com URL </CheckedItem>
                        </li>
                        <li className={styles['grey-line']}></li>
                        <li>Expected Entries , 300+ Name, 30+ Logo</li>
                        <li className={styles['grey-line']}></li>
                        <li>By bundling your name and Logo project you save $50 off the standard price of $598.</li>
                    </ul>
                    
                </Column>        
            </div>
            <div className={styles.column}>
                <Column title='Gold' 
                        text='More privacy and Trademark support' 
                        price='449' save='Save $100' color='#e8b954'>
                    <ul>
                        <li> Includes 2 Contests (Name, Logo) </li>
                        <li className={styles['grey-line']}></li>
                        <li> Prize to Winner - $425 ($200 for Name, $225 for Logo) (Included)    </li>
                        <li className={styles['grey-line']}></li>
                        <li> Validation Services & Upgrades ($572 value)  
                            <CheckedItem> Matching .com URL </CheckedItem>
                            <CheckedItem> Instant Trademark Check (One Database) </CheckedItem>
                            <CheckedItem> NDA and More Privacy </CheckedItem>
                            <CheckedItem> Project Promotion (Basic) </CheckedItem>
                            <CheckedItem> Comprehensive Trademark Research (1 Name) </CheckedItem>
                        </li>
                        <li className={styles['grey-line']}></li>
                        <li>Expected Entries , 600+ Name, 50+ Logo </li>
                        <li className={styles['grey-line']}></li>
                        <li>Partial Refund Option </li>
                        <li className={styles['grey-line']}></li>
                        <li>By bundling your name and Logo project you save $100 off the standard price of $898.  </li>
                    </ul>
                </Column>    
            </div>
            <div className={styles.column}>
                <Column title='Platinum' 
                        text='Work with top-level creatives, plus agency-style brand validation' 
                        price='749' save='Save $200' color='#555'>
                    <ul>
                        <li> Includes 2 Contests (Name, Logo) </li>
                        <li className={styles['grey-line']}></li>
                        <li> Prize to Winner - $600 ($300 for Name, $300 for Logo) (Included)    </li>
                        <li className={styles['grey-line']}></li>
                        <li> Validation Services & Upgrades ($1623 value)   
                            <CheckedItem>  Audience Testing View Sample Report </CheckedItem>
                            <CheckedItem> Comprehensive Trademark Research (3 Names)  </CheckedItem>
                            <CheckedItem> Linguistics Analysis (3 Names)  </CheckedItem>
                            <CheckedItem> Tier A Creatives  </CheckedItem>
                            <CheckedItem> Matching .com URL </CheckedItem>
                            <CheckedItem> Instant Trademark Check (4 Databases)  </CheckedItem>
                            <CheckedItem> NDA and More Privacy  </CheckedItem>
                            <CheckedItem> Enhanced Project Promotion   </CheckedItem>
                            <CheckedItem> Team Collaboration Tools   </CheckedItem>
                        </li>
                        <li className={styles['grey-line']}></li>
                        <li>Expected Entries , 1000+ Name, 60+ Logo </li>
                        <li className={styles['grey-line']}></li>
                        <li>Partial Refund Option</li>
                        <li className={styles['grey-line']}></li>
                        <li> By bundling your name and Logo project you save $200 off the standard price of $1,498.  </li>
                    </ul>
                </Column>
            </div>
            <div className={styles.column}>
                <Column title='Managed' 
                        text='A full agency experience without the agency price tag' 
                        price='999' save='Save $250' color='#28d2d0'>
                    <ul>
                        <li> Receive optimum results from your Platinum Contest by launching a Managed Contest 
                            Package and working one-on-one with an experienced Squadhelp Branding Consultant. </li>
                        <br/>
                        <li> With significantly more validation services, professional brief creation, and daily management 
                            of your contest by your Branding Expert, you'll receive an enhanced branding experience to closeout 
                            your branding project. </li>
                        <br/>
                        <li> Learn More about Managed Contest Service </li>
                    </ul>
                </Column>
            </div>
        </div>
    </section>
    <section className={styles['get-started-wrapper']}>
        <div className={styles['start-container']}>
            <p>All packages include the award amount
                for the winning creative and all fees and commissions. 
            </p>
            
        </div>
        <a href='#' className={styles.getStartedBtn} > Get started now </a>
        <div className={styles['grey-line']}></div>
    </section>
    
    </>

    );
}

export default PricingForMain;
