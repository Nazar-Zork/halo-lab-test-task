import Link from 'next/link'
import Image from 'next/image'

import styles from './Header.module.scss'

import logoSvg from '../../public/img/logo.svg'
import openMobileMenuIcon from '../../public/img/openMobileMenu.svg'

const Header = ({activeMenu, setActiveMenu}) =>{
    const menuToggle = () =>(activeMenu ? setActiveMenu(false) : setActiveMenu(true));
    return(
            <header className={styles.header}>
                <div className={styles.header__wrapper}>
                    <div className={styles.header__logo}>
                        <Image src={logoSvg} alt="logo" width={112} height={39} layout="fixed"/>
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
                        <Image priority={true} src={openMobileMenuIcon} alt="burger menu" width={22} height={17} layout="fixed"/>
                    </button>
                </div>
            </header>
    )
}

export default Header