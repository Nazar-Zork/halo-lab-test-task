import Image from 'next/image';
import Link from 'next/link';

import parrotSvg from '../../public/img/parrot.svg'
import styles from './ErrorPage.module.scss'


const ErrorPage = () =>(
    <div className={styles.errorPage}>
        <div className="container">
            <div className={styles.errorPage__inner}>
                <div className={styles.errorPage__text}>
                    <h1 className={styles.errorPage__error}>404</h1>
                    <Link href='/'><a className={styles.errorPage__link}>Go To Home Page</a></Link>
                </div>
                <div className={styles.errorPage__parrotWrapper}>
                    <Image className={styles.errorPage__parrotWrapper} src={parrotSvg} alt="parrot" width={458} height={565} layout="fixed" priority={true}/>
                </div>
            </div>
        </div>

    </div>
)


export default ErrorPage;