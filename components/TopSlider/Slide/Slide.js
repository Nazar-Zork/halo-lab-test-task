import Image from 'next/image'

import styles from './Slide.module.scss'

import rectangleSvg from '../../../public/img/rectangle.svg'

const Slide = ({heading, paragraph, bgColor={backgroundColor: '#CBCBFF'}}) =>{
    return(
        <div style={bgColor} className={styles.slide}>
            <div className={styles.slide__textWrapper}>
                <h2 className={`${styles.slide__heading} ${"headerSectionsTemplate__h2"}`}>{heading}</h2>
                <p className={`${styles.slide__paragraph} ${"headerSectionsTemplate__p"}`}>{paragraph}</p>
            </div>
            <div className={styles.slide__imgWrapper}>
                <Image className={styles.slide__rectangleImg} src={rectangleSvg} alt="rectangles"/>
            </div>
        </div>
    )
}

export default Slide;