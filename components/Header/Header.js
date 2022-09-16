import styles from './Header.module.scss'
import Link from 'next/link'

import logoSvg from '../../public/img/logo.svg'
import openMobileMenuIcon from '../../public/img/openMobileMenu.svg'




const Header = ({activeMenu, setActiveMenu}) =>{
    const menuToggle = () =>{
        activeMenu ? setActiveMenu(false) : setActiveMenu(true);
    }
    return(
        <>
            <header className={styles.header}>
                <div className={styles.header__wrapper}>
                    <div className={styles.header__logo}>
                        <img src={logoSvg.src} />
                    </div>
                    <nav className={styles.header__menu}>
                        <Link href='#'><a className={`${styles.header__menuItem} ${'menuLink'}`}>Home</a></Link>
                        <Link href='#'><a className={`${styles.header__menuItem} ${'menuLink'}`}>Our mission</a></Link>
                        <Link href='#'><a className={`${styles.header__menuItem} ${'menuLink'}`}>Places</a></Link>
                        <Link href='#'><a className={`${styles.header__menuItem} ${'menuLink'}`}>Team</a></Link>
                    </nav>
                    <button className={`${styles.header__ApplyBtn} ${'menuApplyBtn'}`}>
                        Apply
                    </button>
                    <button className={styles.header__mobileMenuButton} onClick={menuToggle}>
                        <img src={openMobileMenuIcon.src}/>
                    </button>
                </div>
            </header>
        </>
        
    )
}

export default Header