import React, { useState } from 'react';

import styles from './Header.module.scss';



const Header = () => {

  const [lang, setLang] = useState(false);
  

  return (
    <header className={styles.header}>
      <div className={styles.elenaImgDiv}>
        <img src='' alt='' className={styles.elenaImg}/>
      </div>
      <div className={styles.descriptionDiv}>
        <div className={styles.langOptions}></div>
        <div className={styles.description}></div>
      </div>
    </header>
  );
};

export default Header;
 