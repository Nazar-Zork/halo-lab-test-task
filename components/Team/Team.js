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
                        <p className={`${styles.team__paragraph} ${"headerSectionsTemplate__p"}`}>Learn more about how you can save our planet's nature. </p>
                    </div>
                    <div className={styles.team__photos}>
                        <div className={`${styles.team__item} ${styles.team__itemLeft}`}>
                            <img className={styles.team__itemPic} src={teamPic1.src} alt="" />
                        </div>
                        <div className={`${styles.team__item} ${styles.team__itemCenter}`}>
                            <img className={styles.team__itemPic} src={teamPic2.src} alt="" />
                        </div>
                        <div className={`${styles.team__item} ${styles.team__itemRight}`}>
                            <img className={styles.team__itemPic} src={teamPic3.src} alt="" />
                        </div>
                        <img className={styles.team__leftLine} src={teamLine1.src} alt="" />
                        <img className={styles.team__rightLine} src={teamLine2.src} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Team;