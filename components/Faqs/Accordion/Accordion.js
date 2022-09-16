import styles from './Accordion.module.scss'

const Accordion = ({title, answer, active, setActive}) =>{

    const openClose = (title) =>{
        title === active ? setActive(''): setActive(title)
    }
    
    return(
        <div className={styles.accordion}>
            <div className={styles.accordion__header}>
                <h4 className={styles.accordion__heading}>{title}</h4>
                <span className={
                    active === title ? `${styles.accordion__button} ${styles.accordion__button_open}` : `${styles.accordion__button} ${styles.accordion__button_close}`
                }
                onClick={() => openClose(title)}></span>
            </div>
            <div className={
                active === title ? `${styles.accordion__content} ${styles.accordion__content_show}` : styles.accordion__content
            }>
                {answer}
            </div>
        </div>
    )
}

export default Accordion;