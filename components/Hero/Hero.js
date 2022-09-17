import { useState } from 'react'
import Image from 'next/image'

import Header from '../Header/Header'

import styles from './Hero.module.scss'

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
                        <Image className={styles.hero__natureImg} src={headlineSvg} alt="nature needs you"/>
                        <p className={styles.hero__text}>
                            The scale of the challenges facing our planet can seem daunting, but we can all do something.
                        </p>
                        <div className={styles.hero__searchInputWrapper}>
                            <div className={styles.hero__searchImgWrapper}>
                                <Image className={styles.hero__searchImg} src={markerSvg} alt="marker" width={14} height={20} layout="fixed"/>
                            </div>
                            <input className={styles.hero__searchInput} type="text" placeholder='Find the place to help' value={searchInputText} onChange={searchInputHandler}/>
                            <button className={`${styles.hero__searchBtn} ${'pinkRedButton'}`}>
                                Search
                            </button>
                        </div>
                    </div>
                    <div className={styles.hero__pictureWrapper}>
                        <div className={styles.hero__parrotImgWrapper}>
                            <Image className={styles.hero__parrotImg} src={parrotSvg} alt="parrot" width={458} height={565} layout="fixed" priority={true}/>
                        </div>
                        <div className={styles.hero__card}>
                            <div className={styles.hero__cardImgWrapper}>
                                <Image className={styles.hero__cardImg} src={cardSvg} alt="members card"/>
                            </div>
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