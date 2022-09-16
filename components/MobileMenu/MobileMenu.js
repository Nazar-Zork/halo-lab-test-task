import styles from './MobileMenu.module.scss'
import Link from 'next/link'

import logoSvg from '../../public/img/logo.svg'
import closeMobileMenuIcon from '../../public/img/closeMobileMenu.svg'

const MobileMenu = ({activeMenu, setActiveMenu}) =>{

    const menuToggle = () =>{
        activeMenu ? setActiveMenu(false) : setActiveMenu(true);
    }

    return(
        <div className={activeMenu?`${styles.mobileMenu} ${styles.mobileMenu__menu_active}`:styles.mobileMenu}>
            <div className={`${styles.mobileMenu__container} ${"container"}`}>
                <div className={styles.mobileMenu__inner}>
                    <div className={styles.mobileMenu__header}>
                        <div className={styles.mobileMenu__logo}>
                            <img src={logoSvg.src} />
                        </div>
                        <button className={styles.mobileMenu__mobileMenuButton} onClick={menuToggle}>
                            <img src={closeMobileMenuIcon.src}/>
                        </button>
                    </div>
                    <div className={styles.mobileMenu__navigation}>
                        <Link href='#'><a className={`${styles.mobileMenu__menuItem} ${'menuLink'}`}>Home</a></Link>
                        <Link href='#'><a className={`${styles.mobileMenu__menuItem} ${'menuLink'}`}>Our mission</a></Link>
                        <Link href='#'><a className={`${styles.mobileMenu__menuItem} ${'menuLink'}`}>Places</a></Link>
                        <Link href='#'><a className={`${styles.mobileMenu__menuItem} ${'menuLink'}`}>Team</a></Link>
                    </div>
                    <button className={`${styles.mobileMenu__applyButton} ${'menuApplyBtn'}`}>Apply</button>
                </div>
            </div>
        </div>
    )
}

export default MobileMenu;