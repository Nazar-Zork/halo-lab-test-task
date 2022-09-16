import Slider from "react-slick";
import { useState, useRef } from "react";
import styles from './NatureSlider.module.scss';
import NatureSlide from "./Slide/NatureSlide";

import avoidPlastic from "../../public/img/avoidPlastic.png";
import chooseOrganic from "../../public/img/chooseOrganic.png";
import plantTrees from "../../public/img/plantTrees.png";
import saveEnergy from "../../public/img/saveEnergy.png";
import saveWather from "../../public/img/saveWather.png";
import paginationSliderArrow from "../../public/img/paginationSlider.svg";


const NatureSlider = ()=>{
    const [activeIndex, setImageIndex] = useState(0);
    const natureSliderComponent = useRef();

    const sliderItemsInfo = [
      {
        id:1,
        name: "Save watter",
        description:"Taking on the issue of ensuring access to safe water requires worldwide effort.",
        img:saveWather
      },
      {
        id:2,
        name: "Plant trees",
        description:"Taking on the issue of ensuring access to safe water requires worldwide effort.",
        img:plantTrees
      },
      {
        id:3,
        name: "Save energy",
        description:"Taking on the issue of ensuring access to safe water requires worldwide effort.",
        img:saveEnergy
      },
      {
        id:4,
        name: "Avoid plastic",
        description:"Taking on the issue of ensuring access to safe water requires worldwide effort.",
        img:avoidPlastic
      },
      {
        id:5,
        name: "Choose organic",
        description:"Taking on the issue of ensuring access to safe water requires worldwide effort.",
        img:chooseOrganic
      },
      {
        id:6,
        name: "Choose organic",
        description:"Taking on the issue of ensuring access to safe water requires worldwide effort.",
        img:chooseOrganic
      },
    ]

    const settings = {
      className: "slider variable-width natureSlider",
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      variableWidth: true,
      beforeChange:(oldIndex, newIndex) => setImageIndex(newIndex)
    }

    return(
        <section className={styles.natureSlider}>
            <Slider {...settings} ref={natureSliderComponent}>
                {sliderItemsInfo.map((item, id)=>(
                    <NatureSlide name={item.name}
                                description={item.description}
                                img={item.img}
                                active={activeIndex === id}
                                key={id}/>
                ))}
            </Slider>
            <div className={styles.natureSlider__pagination}>
                <button className={styles.natureSlider__leftSliderArrow} onClick={() => natureSliderComponent.current.slickPrev()}>
                  <img src={paginationSliderArrow.src} />
                </button>
                <div className={styles.natureSlider__paginationText}>{activeIndex + 1}<span className={styles.natureSlider__paginationSlidesQuontity}>/{sliderItemsInfo.length}</span></div>
                <button  className={styles.natureSlider__rightSliderArrow} onClick={() => natureSliderComponent.current.slickNext()}>
                  <img src={paginationSliderArrow.src} />
                </button>
            </div>
        </section>
    )
}
export default NatureSlider;