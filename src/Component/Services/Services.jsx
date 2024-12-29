import React from 'react'
import styles from './Services.module.css'
import { FaCode, FaPaintbrush, FaDesktop } from "react-icons/fa6";

function Services() {
  return (
    <div className={styles.service_con}>
      <h1>my services</h1>
      <div className={styles.service_wrap}>
        <div className={styles.service_list}>
            <div className={styles.service_icon}><FaCode /></div>
            <h3>web developement</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad illum iste porro tempore expedita quasi.</p>
        </div>

        <div className={styles.service_list}>
            <div className={styles.service_icon}><FaPaintbrush /></div>
            <h3>web design</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad illum iste porro tempore expedita quasi.</p>
        </div>

        <div className={styles.service_list}>
            <div className={styles.service_icon}><FaDesktop /></div>
            <h3>front-end consulting</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad illum iste porro tempore expedita quasi.</p>
        </div>
      </div>
    </div>
  )
}

export default Services

