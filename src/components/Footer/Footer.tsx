import React  from 'react';
import { NavLink } from "react-router-dom";

import styles from './Footer.module.scss';



const Footer = () => {

  return (
    <div className={styles.footer}>
       <div className={styles.linkWrapper}>
         <NavLink to="/" >Cube</NavLink>
         <NavLink to="/sliderPage" >Slider</NavLink>
         <NavLink to="/visitorsPage" >Visitors</NavLink>
       </div>
    </div>
  );
};

export default Footer;
 