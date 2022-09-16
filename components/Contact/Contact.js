import styles from './Contact.module.scss'

import { useState } from 'react'

import pinkLeafSvg from '../../public/img/pinkLeaf.svg'
import violetLeafSvg from '../../public/img/violerLeaf.svg'


const Contact = () =>{
    const [namePlaceholder, emailPlaceholder] = ['Name','Email'];
    
    const [nameFormInput, setNameFormInput] = useState('');
    const [emailFormInput, setEmailFormInput] = useState('');

    const inputHandler = (event) => event.target.placeholder === namePlaceholder ? setNameFormInput(event.target.value) : setEmailFormInput(event.target.value);

    return(
          <section className={styles.contact}>
            <div className="container">
                <div className={styles.contact__inner}>
                    <div className={styles.contact__text}>
                        <h2 className={`${styles.contact__textHeading} ${"headerSectionsTemplate__h2"}`}>Get started today!</h2>
                        <p className={`${styles.contact__textParagraph} ${"headerSectionsTemplate__p"}`}>Learn more about how you can save our planet's nature. From smart consumption to switching to renewable energy, each of us can do our part to save the planet. </p>
                    </div>
                    <div className={styles.contact__formWrapper}>
                        <img className={styles.contact__pinkLeaf} src={pinkLeafSvg.src} />
                        <img className={styles.contact__violetLeaf} src={violetLeafSvg.src} />
                        <h3 className={styles.contact__formHeader}>Log in</h3>
                        <div className={styles.contact__form}>
                            <input className={styles.contact__formInput} type="text" placeholder={namePlaceholder} value={nameFormInput} onChange={inputHandler}/>
                            <input className={styles.contact__formInput} type="email" placeholder={emailPlaceholder} value={emailFormInput} onChange={inputHandler}/>
                            <button className={`${styles.contact__btn} ${"pinkRedButton"}`}>Book a demo</button>
                        </div>
                    </div>
                </div>
            </div>
          </section>
    )
}

export default Contact;