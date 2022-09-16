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
                    <img className={styles.quote__leftLeafs} src={leftLeafsSvg.src} alt="" />
                    <img className={styles.quote__rightLeafs} src={rightLeafsSvg.src} alt="" />
                    <img className={styles.quote__leftSmallLeafs} src={leftSmallLeafsSvg.src} alt="" />
                    <img className={styles.quote__rightSmallLeafs} src={rightSmallLeafsSvg.src} alt="" />

                    <div className={styles.quote__elipse}></div>
                    <h1 className={styles.quote__heading}>
                        The scale of the challenges facing our planet can seem daunting, but we can all do something.
                    </h1>
                    <hr className={styles.quote__separator} />
                    <div className={styles.quote__listItems}>
                        <div className={styles.quote__item}>
                            <img className={styles.quote__itemImg} src={userSvg.src} alt="" />
                            <div className={styles.quote__itemText}>Assets value COMPOSer</div>
                        </div>
                        <div className={styles.quote__item}>
                            <img className={styles.quote__itemImg} src={grapnSvg.src} alt="" />
                            <div className={styles.quote__itemText}>GRAPH BUDGET ANALYZER</div>
                        </div>
                        <div className={styles.quote__item}>
                            <img className={styles.quote__itemImg} src={washMashineSvg.src} alt="" />
                            <div className={styles.quote__itemText}>MONTHLY AVG. REVENUE</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Quote;