import styles from './NatureSlide.module.scss';

import bg from "../../../public/img/bg.svg"


const NatureSlide = ({name,description,img,active}) =>(
    <div className={
        active?`${styles.natureSlide} ${styles.natureSlide_active}`:styles.natureSlide
        }>
        <img className={
            active?`${styles.natureSlide__bgImg} ${styles.natureSlide__bgImg_active}`:styles.natureSlide__bgImg
        } src={bg.src} />
        <img className={
            active?`${styles.natureSlide__сornerImg} ${styles.natureSlide__сornerImg_active}`:styles.natureSlide__сornerImg
        } src={img.src} />
        <div className={
            active?`${styles.natureSlide__textWrapper} ${styles.natureSlide__textWrapper_active}`:styles.natureSlide__textWrapper
        }>
            <h5 className={
                active?`${styles.natureSlide__heading} ${styles.natureSlide__heading_active}`:styles.natureSlide__heading
            }>{name}</h5>
            <p className={
                active?`${styles.natureSlide__paragraph} ${styles.natureSlide__paragraph_active}`:styles.natureSlide__paragraph
            }>{description}</p>
        </div>
    </div>
)
export default NatureSlide;