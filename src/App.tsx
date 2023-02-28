import React, { FC } from 'react';
import {Route, Routes} from 'react-router-dom';

import styles from './App.module.scss';
import CubePage from './components/CubePage/CubePage';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import SliderPage from './components/SliderPage/SliderPage';


const App: FC = () => {
  return (
    <div className={styles.app}>
      <Header/>
      <Routes>
        <Route path="/" element={<CubePage/>}/>
        <Route path="sliderPage/*" element={<SliderPage/>}/>       
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
