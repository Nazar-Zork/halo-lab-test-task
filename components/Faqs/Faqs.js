import { useState } from 'react';

import styles from './Faqs.module.scss'
import Accordion from './Accordion/Accordion';



const Faqs = () =>{

    const [active, setActive] = useState('What can I do to protect our planet?');

    const accordionData = [
        {
            questions:'What can I do to protect our planet?',
            answer:'Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources'
          },
          {
            questions:'How to save nature ecology?',
            answer:'Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources'
          },
          {
            questions:'What is nature conservation?',
            answer:'Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources'
          }
    ];
    return(
        <section className={styles.Faqs}>
            <div className="container">
                <div className={styles.Faqs__inner}>
                    <div className={styles.Faqs__textWrapper}>
                        <h2 className={`${styles.Faqs__heading} ${"headerSectionsTemplate__h2"}`}>Ready to Get started?</h2>
                        <p className={`${styles.Faqs__text} ${"headerSectionsTemplate__p"}`}>When pattern is mentioned in interior design, it is easy to asso- ciate it with a geometric patterned wallpaper or colourful prints on interior fabrics.</p>
                        <button className={`${styles.Faqs__btn} ${"pinkRedButton"}`}>
                            Contact us
                        </button>
                    </div>
                    <div className={styles.Faqs__accordionWrapper}>
                        {
                            accordionData.map((item, id) =>(
                                <Accordion title={item.questions}
                                           answer={item.answer}
                                           active={active}
                                           setActive={setActive}
                                           key={id}/>
                            ))
                        }
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faqs;