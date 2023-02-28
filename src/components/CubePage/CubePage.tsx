import React  from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import styles from './CubePage.module.scss';
import './CubePage.css';
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { EffectCube, Pagination, Autoplay } from "swiper";

import Image1 from './../../assets/images/all-items.jpg';
import Image2 from './../../assets/images/two-dwarfs.jpg';
import Image3 from './../../assets/images/red-dwarf1.jpg';
import Image4 from './../../assets/images/grey-dwarf1.jpg';
import Image5 from './../../assets/images/red-dwarf2.jpg';
import Image6 from './../../assets/images/bear1.jpg';
import Image7 from './../../assets/images/bear2.jpg';
import Image8 from './../../assets/images/violett-bear.jpg';
import Image9 from './../../assets/images/red-shoes.jpeg';
import Image10 from './../../assets/images/blue-shoes.jpeg';
import Image11 from './../../assets/images/beresta.jpg';
import Image12 from './../../assets/images/chair.jpg';
import Image13 from './../../assets/images/pillow1.jpg';


const CubePage = () => {

  return (
    <div className={styles.container}>
       <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        autoplay={ { delay: 3000 } }
        pagination={true}
        modules={[EffectCube, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Image1} className="slideImage"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image2} className="slideImage"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image3} className="slideImage"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image4} className="slideImage"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image5}  className="slideImage"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image6}  className="slideImage"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image7}  className="slideImage"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image8}  className="slideImage"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image9}  className="slideImage"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image10}  className="slideImage"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image11}  className="slideImage"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image12}  className="slideImage"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image13}  className="slideImage"/>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default CubePage;
 