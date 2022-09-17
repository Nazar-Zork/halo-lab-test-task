import Image from 'next/image'

import styles from './Quote.module.scss'

import leftLeafsSvg from '../../public/img/quoteLeftLeafs.svg'
import rightLeafsSvg from '../../public/img/quoteRightLeafs.svg'
import leftSmallLeafsSvg from '../../public/img/quoteLeftSmallLeafs.svg'
import rightSmallLeafsSvg from '../../public/img/quoteRightSmallLeafs.svg'
import userSvg from '../../public/img/QuoteIcon1.svg'
import grapnSvg from '../../public/img/QuoteIcon2.svg'
import washMashineSvg from '../../public/img/QuoteIcon3.svg'

const Quote = () =>{
    return(
        <section className={styles.quote}>
            <div className="container">
                <div className={styles.quote__inner}>
                    <div className={styles.quote__leftLeafsWrapper}><Image className={styles.quote__leftLeafs} src={leftLeafsSvg} alt="Leafs"/></div>
                    <div className={styles.quote__rightLeafsWrapper}><Image className={styles.quote__rightLeafs} src={rightLeafsSvg} alt="Leafs"/></div>
                    <div className={styles.quote__leftSmallLeafsWrapper}><Image className={styles.quote__leftSmallLeafs} src={leftSmallLeafsSvg} alt="Small leafs"/></div>
                    <div className={styles.quote__rightSmallLeafsWrapper}><Image className={styles.quote__rightSmallLeafs} src={rightSmallLeafsSvg} alt="Small leafs"/></div>
                    <div className={styles.quote__elipse}></div>
                    <h1 className={styles.quote__heading}>
                        The scale of the challenges facing our planet can seem daunting, but we can all do something.
                    </h1>
                    <hr className={styles.quote__separator} />
                    <div className={styles.quote__listItems}>
                        <div className={styles.quote__item}>
                            <div className={styles.quote__itemImgWrapper}><Image className={styles.quote__itemImg} width={49} height={49} layout='fixed' src={userSvg} alt="user"/></div>
                            <div className={styles.quote__itemText}>Assets value COMPOSer</div>
                        </div>
                        <div className={styles.quote__item}>
                            <div className={styles.quote__itemImgWrapper}><Image className={styles.quote__itemImg} width={49} height={49} layout='fixed' src={grapnSvg} alt="graph"/></div>
                            <div className={styles.quote__itemText}>GRAPH BUDGET ANALYZER</div>
                        </div>
                        <div className={styles.quote__item}>
                            <div className={styles.quote__itemImgWrapper}><Image className={styles.quote__itemImg} width={49} height={49} layout='fixed' src={washMashineSvg} alt="Washing machine"/></div>
                            <div className={styles.quote__itemText}>MONTHLY AVG. REVENUE</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Quote;