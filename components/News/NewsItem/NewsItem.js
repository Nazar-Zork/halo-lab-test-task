import Link from 'next/link'
import Image from 'next/image'

import styles from './NewsItem.module.scss'

import playSvg from '../../../public/img/play.svg'

const NewsItem = ({info:{img, hashtag, name, link, isVideo}}) =>{
    
    return(
        <div className={styles.newsItem}>
            <div className={styles.newsItem__imgWrapper}>
                {
                    isVideo 
                    ? <div className={styles.newsItem__videoPlayImgWrapper}><Image className={styles.newsItem__videoPlayImg} src={playSvg} alt="play"/></div> 
                    : null
                }
                <Image className={styles.newsItem__imgPrevievImg} src={img} alt="news photo"/>
            </div>
            <div className={styles.newsItem__textWrapper}>
                <div className={styles.newsItem__text}>
                    <div className={styles.newsItem__hashtag}>
                        <b className={styles.newsItem__hashtagSymbol}># </b>{hashtag}
                    </div>
                    <h5 className={styles.newsItem__name}>{name}</h5>
                </div>
                <Link href={link}><a className={styles.newsItem__seeMore}>see more</a></Link>
                
            </div>
        </div>
    )
}

export default NewsItem;