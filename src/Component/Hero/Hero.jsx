import React from "react";
import styles from "./Hero.module.css";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa6";
import biograph from "../../assets/Wilawan Wattananukit.jpg";
import { TypeAnimation } from "react-type-animation";
import Tilt from 'react-parallax-tilt';

function Hero() {
  return (
    <div>
      <div className={styles.hero_wrapper}>
        <div className={styles.hero_con}>
          <div className={styles.hero_info}>
            <h2>Hello, I'm</h2>
            <h3>Wilawan Wattananukit</h3>
            <h4 className={styles.h3_select}>
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Front-end Developer",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  "Web Developer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              ducimus dolore adipisci quasi nostrum temporibus aliquid officia.
              Omnis, veritatis nesciunt.
            </p>

            <ul className={styles.social}>
              <li>
                <a href="#">
                  <FaGithub />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaFacebook />
                </a>
              </li>
            </ul>
          </div>

          <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
          <div className={styles.hero_img}>
            <img src={biograph} alt="" />
          </div>
          </Tilt>
        </div>
      </div>
    </div>
  );
}

export default Hero;
