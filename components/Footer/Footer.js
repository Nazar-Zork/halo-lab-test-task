import styles from './Footer.module.scss'
import Link from 'next/link'
import facebookSvg from '../../public/img/Facebook.svg'
import twitterSvg from '../../public/img/Twitter.svg'
import linkedInSvg from '../../public/img/LinkedIn.svg'

const Footer = () =>{
    return(
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footer__inner}>
                    <div className={`${styles.footer__column} ${styles.footer__copyrightColumn}`}>
                        <div className={styles.footer__contactHeader}>Contacts</div>
                        <div className={styles.footer__copyright}>
                            2019 Rootz Foundation. All rights reserved
                        </div>
                    </div>
                    <div className={`${styles.footer__column} ${styles.footer__bottomColumn}`}>
                        <div className={styles.footer__columnHeading}>Headquarters</div>
                        <div className={styles.footer__adressWrapper}>
                        1234 Taliban<br />Los Angeles, La 1234567<br />(123) 456-7890
                        </div>
                    </div>
                    <div className={`${styles.footer__column} ${styles.footer__bottomColumn}`}>
                        <div className={styles.footer__columnHeading}>Social media</div>
                        <div className={styles.footer__socialList}>
                            <Link href="#"><a className={styles.footer__socialItem}><img src={twitterSvg.src}/></a></Link>
                            <Link href="#"><a className={styles.footer__socialItem}><img src={facebookSvg.src}/></a></Link>
                            <Link href="#"><a className={styles.footer__socialItem}><img src={linkedInSvg.src}/></a></Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;