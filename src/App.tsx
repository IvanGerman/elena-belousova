import React, { FC } from 'react';
import {Route, Routes} from 'react-router-dom';

import styles from './App.module.scss';
import CubePage from './components/CubePage/CubePage';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import SliderPage from './components/SliderPage/SliderPage';
//@ts-ignore
import audio from './assets/sound/funkytown.mp3';


const App: FC = () => {

  let sound = new Audio(audio)
  //@ts-ignore
  const playAudio = (e) => {
    e.preventDefault();
    sound.play();
  };
  const pauseAudio = () => {
    sound.pause();
  };

  return (
    <div className={styles.app} onContextMenu={playAudio} onDoubleClick={pauseAudio}>
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
