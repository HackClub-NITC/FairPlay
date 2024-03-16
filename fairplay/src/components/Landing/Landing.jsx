import React from 'react'

import rome from './assets/rome.png';

import styles from './Landing.module.css';

import detective from './assets/detective.svg';


import FiveFiveDynamic from '../FiveFiveDynamic/FiveFiveDynamic';



const Landing = () => {
  return (
    <div className={styles.container}>
      <img src={rome} alt="rome" className={styles.rome}/>
      <img src={detective} alt="detective" className={styles.detective}/>

      <div className={styles.text}>
        <h1 className={styles.title}>Fairplay</h1>
        <p className={styles.description}>A simple and secure way to communicate with your friends</p>
      </div>
      <FiveFiveDynamic />
      

    </div>
  )
}

export default Landing
