import Slider from "react-slick";
import { useRef } from "react";

import styles from './TopSlider.module.scss'

import Slide from './Slide/Slide';

import slideArowRight from '../../public/img/bigSliderArrow.svg'
import slideArowLeft from '../../public/img/bigSliderArrowLeft.svg'

const TopSlider = () =>{

    const sliderComponent = useRef();

    const slideInfo = [
        {
            id: 1,
            heading: 'Travel In Japan: The True Experience',
            paragraph: 'When pattern is mentioned in interior design, it is easy to asso- ciate it with a geometric patterned wallpaper or colourful prints on interior fabrics.',
            color: {
                backgroundColor: '#FFBD9E'
            }
        },
        {
            id: 2,
            heading: 'Helping Wild Turtles To Travel In Japan',
            paragraph: 'The scale of the challenges facing our planet can seem daunting, but we can all do something. Challenges facing our planet can seem daunting, but we can all do something.',
            color: '#FFADAD',
            color: {
                backgroundColor: '#FFADAD'
            }
        },
        {
            id: 3,
            heading: 'Threats of Modern Indusrial World ',
            paragraph: 'The scale of the challenges facing our planet can seem daunting, but we can all do something. Easy to asso- ciate it with a geometric patterned wallpaper.',
            color: {
                backgroundColor: '#CBCBFF'
            }
        },
    ]

    const settings = {
        className:"topSliderSettings",
        dots: false,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        arrows:false,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                dots: true,
              }
            },
        ]
    }


    return(
        <section className={styles.topSlider}>
            <div className="container">
                <div className={styles.topSlider__inner}>
                    <button className={styles.topSlider__leftSliderArrow} onClick={() => sliderComponent.current.slickNext()}>
                        <img src={slideArowLeft.src} alt="" />
                    </button>
                    <Slider {...settings} ref={sliderComponent}>
                        {slideInfo.map((item, id)=>(
                            <Slide key={id} heading={item.heading} paragraph={item.paragraph} bgColor={item.color}/>
                        ))}
                    </Slider>
                    <button className={styles.topSlider__rightSliderArrow} onClick={() => sliderComponent.current.slickPrev()}>
                        <img src={slideArowRight.src} alt="" />
                    </button>
                </div>
            </div>
        </section>
    )

}
export default TopSlider;