import Image from 'next/image'

import styles from './Team.module.scss'

import teamPic1 from '../../public/img/team1.png'
import teamPic2 from '../../public/img/team2.png'
import teamPic3 from '../../public/img/team3.png'
import teamLine1 from '../../public/img/teamLine1.svg'
import teamLine2 from '../../public/img/teamLine2.svg'

const Team = () =>{
    return(
        <section className={styles.team}>
            <div className="container">
                <div className={styles.team__inner}>
                    <div className={styles.team__header}>
                        <h2 className={`${styles.team__heading} ${"headerSectionsTemplate__h2"}`}>Our top team</h2>
                        <p className={`${"headerSectionsTemplate__p"}`}>Learn more about how you can save our planet&apos;s nature. </p>
                    </div>
                    <div className={styles.team__photos}>
                        <div className={`${styles.team__item}`}>
                            <div className={styles.team__itemPicWrapper}><Image className={styles.team__itemPic} src={teamPic1} alt="man" /></div>
                        </div>
                        <div className={`${styles.team__item} ${styles.team__itemCenter}`}>
                            <div className={styles.team__itemPicWrapper}><Image className={styles.team__itemPic} src={teamPic2} alt="girl" /></div>
                        </div>
                        <div className={`${styles.team__item} ${styles.team__itemRight}`}>
                            <div className={styles.team__itemPicWrapper}><Image className={styles.team__itemPic} src={teamPic3} alt="man" /></div>
                        </div>
                        <div className={styles.team__leftLineWrapper}><Image className={styles.team__leftLine} src={teamLine1} alt="dotted line" /></div>
                        <div className={styles.team__rightLineWrapper}><Image className={styles.team__rightLine} src={teamLine2} alt="dotted line" /></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Team;