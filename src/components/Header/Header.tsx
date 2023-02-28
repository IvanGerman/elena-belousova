// @ts-nocheck
import React, { useState } from 'react';

import styles from './Header.module.scss';
import Image1 from './../../assets/images/big-board.jpg';

const descriptionObj = {
  'ru': ['Представляем работы мастера международного класса по рукоделию',
         'Елены Белоусовой'],
  'eng': ['We proudly present you some works of a world-class craftsman',
  'Elena Belousova'],
  'ger': ['Wir stellen Ihnen vor einige Werke von einer Weltklasse Handwerkerin',
  'Elena Belousova'],
}


const Header = () => {

  const [lang, setLang] = useState('ru');
  

  return (
    <header className={styles.header}>
      <div className={styles.elenaImgDiv}>
        <img src={Image1} alt='' className={styles.elenaImg}/>
      </div>
      <div className={styles.descriptionDiv}>
        <div className={styles.langOptions}>
          <div className={styles.langWrapper}>
            <div className={styles.ruslang} onClick={() => {setLang('ru')}}></div>
            <div className={styles.englang} onClick={() => {setLang('eng')}}></div>
            <div className={styles.gerlang} onClick={() => {setLang('ger')}}></div>
          </div>
        </div>
        <div className={styles.description}>       
          <h1>{descriptionObj[lang][0]}</h1>
          <h2>{descriptionObj[lang][1]}</h2>
        </div>
      </div>
    </header>
  );
};

export default Header;
 