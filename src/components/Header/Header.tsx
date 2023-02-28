import React, { useState } from 'react';

import styles from './Header.module.scss';
import Image1 from './../../assets/images/big-board.jpg';



const Header = () => {

  const [lang, setLang] = useState(false);
  

  return (
    <header className={styles.header}>
      <div className={styles.elenaImgDiv}>
        <img src={Image1} alt='' className={styles.elenaImg}/>
      </div>
      <div className={styles.descriptionDiv}>
        <div className={styles.langOptions}>
          <div className={styles.langWrapper}>
            <div className={styles.ruslang}></div>
            <div className={styles.englang}></div>
            <div className={styles.gerlang}></div>
          </div>
        </div>
        <div className={styles.description}>
          <h1>Представляем работы мастера международного класса по рукоделию</h1>
          <h2>Елены Белоусовой</h2>
        </div>
      </div>
    </header>
  );
};

export default Header;
 