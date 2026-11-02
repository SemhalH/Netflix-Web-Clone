import React from 'react'
import styles from './Banner.module.css'
import BannerLogo from '../../assets/image/logo.png'
import {Play, Info} from 'lucide-react'

function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.contents}>
        <img className={styles.logoImg}
          src={BannerLogo}
          alt="banner"/>

        <h1 className={styles.title}>Unlimited movies, TV shows, and more.</h1>
        <h1 className={styles.description}>Watch anywhere. Cancel anytime.</h1>
        <div className={styles.buttonsContainer}>
          <button className={styles.button}>
            <Play  Size={20}/> Play
          </button>
          <button className={styles.button}>
            <Info Size={20}/> More Info
          </button>
        </div>
        <div className={styles.fadeBottom}></div>
        </div>
    </div>
  );
}

export default Banner