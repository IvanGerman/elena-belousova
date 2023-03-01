import React, { FC }  from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './swiper-slide.css';
import styles from './SliderPage.module.scss';

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


const SliderPage: FC = () => {

  
  

  return (
    <div className={styles.container}>
     <Swiper className={styles.swiper2}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <img src={Image1} alt='' className={styles.slideImg} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image2} alt='' className={styles.slideImg} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image3} alt='' className={styles.slideImg} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image4} alt='' className={styles.slideImg} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image5} alt='' className={styles.slideImg} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image6} alt='' className={styles.slideImg} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image7} alt='' className={styles.slideImg} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image8} alt='' className={styles.slideImg} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image9} alt='' className={styles.slideImg} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image10} alt='' className={styles.slideImg} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image11} alt='' className={styles.slideImg} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image12} alt='' className={styles.slideImg} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image13} alt='' className={styles.slideImg} />
        </SwiperSlide>        

      </Swiper>
    </div>
  );
};

export default SliderPage;
 