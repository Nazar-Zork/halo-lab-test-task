import styles from './News.module.scss'
import NewsItem from './NewsItem/NewsItem';

import news1 from '../../public/img/Pic1.png'
import news2 from '../../public/img/Pic2.png'
import news3 from '../../public/img/Pic3.png'

const News = () =>{
    const itemsState = [
        {
            id: 1,
            img: news1,
            hashtag: 'Stories',
            name: 'Travel In Japan: The True Experience',
            link: '#',
            isVideo: false
        },
        {
            id: 2,
            img: news2,
            hashtag: 'VideoTutor',
            name: 'Helping Wild Turtles',
            link: '#',
            isVideo: true
        },
        {
            id: 3,
            img: news3,
            hashtag: 'Photostory',
            name: 'Threats of Indusrial World',
            link: '#',
            isVideo: false
        },
    ]
    return(
        <section className={styles.news}>
            <div className="container">
                <div className={styles.news__list}>
                    {
                        itemsState.map((item) =>{
                            return <NewsItem info={item} key={item.id}/>
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default News;