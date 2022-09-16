import styles from './Hero.module.scss'

import { useState } from 'react'

import Header from '../Header/Header'

import headlineSvg from '../../public/img/headline.svg'
import parrotSvg from '../../public/img/parrot.svg'
import cardSvg from '../../public/img/card.svg'
import markerSvg from '../../public/img/marker.svg'

const Hero = ({activeMenu, setActiveMenu}) =>{

    const [searchInputText, setSearchInputText] = useState('');

    const searchInputHandler = (event) => setSearchInputText(event.target.value);
    return(
        <section className={styles.hero}>
            <Header activeMenu = {activeMenu} setActiveMenu = {setActiveMenu}/>
            <div className='container'>
                <div className={styles.hero__inner}>
                    <div className={styles.hero__textWrapper}>
                        <img className={styles.hero__natureImg} src={headlineSvg.src} />
                        <p className={styles.hero__text}>
                            The scale of the challenges facing our planet can seem daunting, but we can all do something.
                        </p>
                        <div className={styles.hero__searchInputWrapper}>
                            <img className={styles.hero__searchImg} src={markerSvg.src} />
                            <input className={styles.hero__searchInput} type="text" placeholder='Find the place to help' value={searchInputText} onChange={searchInputHandler}/>
                            <button className={`${styles.hero__searchBtn} ${'pinkRedButton'}`}>
                                Search
                            </button>
                        </div>
                    </div>
                    <div className={styles.hero__pictureWrapper}>
                        <img className={styles.hero__parrotImg} src={parrotSvg.src}/>
                        <div className={styles.hero__card}>
                            <img className={styles.hero__cardImg} src={cardSvg.src} />
                            <div className={styles.hero__cardText}>
                                <h4 className={styles.hero__cardHeading}>Members</h4>
                                <span className={styles.hero__cardQuontity}>29 128</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;