import Link from 'next/link'
import Image from 'next/image'

import styles from './MobileMenu.module.scss'

import logoSvg from '../../public/img/logo.svg'
import closeMobileMenuIcon from '../../public/img/closeMobileMenu.svg'

const MobileMenu = ({activeMenu, setActiveMenu}) =>{
    const menuToggle = () =>(activeMenu ? setActiveMenu(false) : setActiveMenu(true));
    return(
        <div className={activeMenu?`${styles.mobileMenu} ${styles.mobileMenu__menu_active}`:styles.mobileMenu}>
            <div className={`${styles.mobileMenu__container} ${"container"}`}>
                <div className={styles.mobileMenu__inner}>
                    <div className={styles.mobileMenu__header}>
                        <div className={styles.mobileMenu__logo}>
                            <Image src={logoSvg} alt="logo" width={112} height={39} layout='fixed'/>
                        </div>
                        <button className={styles.mobileMenu__mobileMenuButton} onClick={menuToggle}>
                            <Image src={closeMobileMenuIcon} alt="burger close menu" width={24} height={24} layout='fixed'/>
                        </button>
                    </div>
                    <div className={styles.mobileMenu__navigation}>
                        <Link href='#'><a className={`${'menuLink'}`}>Home</a></Link>
                        <Link href='#'><a className={`${'menuLink'}`}>Our mission</a></Link>
                        <Link href='#'><a className={`${'menuLink'}`}>Places</a></Link>
                        <Link href='#'><a className={`${'menuLink'}`}>Team</a></Link>
                    </div>
                    <button className={`${styles.mobileMenu__applyButton} ${'menuApplyBtn'}`}>Apply</button>
                </div>
            </div>
        </div>
    )
}

export default MobileMenu;