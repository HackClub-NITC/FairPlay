import React from 'react'

import rome from './assets/rome.png';

import styles from './Landing.module.css';

import RadioToggle from '../../components/RadioToggle/RadioToggle';



const Landing = () => {
  return (
    <div className={styles.container}>
      <img src={rome} alt="rome" className={styles.rome}/>

    </div>
  )
}

export default Landing
