import React from "react";
import styles from "./Portfolio.module.css";
import Prime from "../../assets/PRIME.png";
import Coffee from "../../assets/Coffee.png";
import Pizza from "../../assets/Pizza.png";
import WanBirthDay from "../../assets/Wanwand_birthday.png";
import WanCard from "../../assets/Wanwand_card.png";
import Loading from "../../assets/Loading_bar.png";
import Tilt from "react-parallax-tilt";

function Portfolio() {
  return (
    <div className={styles.port_con}>
      <h1>my portfolio</h1>
      <div className={styles.port_wrap}>
        <div className={styles.port_list}>
          <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
            <img src={Prime} alt="" />
          </Tilt>
          <h3>
            <a
              href="https://wilawan-watt.github.io/PRIME-Mercedez/#"
              target="_blank"
            >
              PRIME-Mercedez
            </a>
          </h3>
        </div>

        <div className={styles.port_list}>
          <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
            <img src={Coffee} alt="" />
          </Tilt>
          <h3>
            <a
              href="https://wilawan-watt.github.io/Coffee_House/"
              target="_blank"
            >
              Coffee_House
            </a>
          </h3>
        </div>

        <div className={styles.port_list}>
          <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
            <img src={Pizza} alt="" />
          </Tilt>
          <h3>
            <a href="https://wilawan-watt.github.io/Pizza/#" target="_blank">
              Pizza
            </a>
          </h3>
        </div>

        <div className={styles.port_list}>
          <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
            <img src={WanBirthDay} alt="" />
          </Tilt>
          <h3>
            <a
              href="https://wilawan-watt.github.io/Wanwand-Birthday/"
              target="_blank"
            >
              Wanwand-Birthday
            </a>
          </h3>
        </div>

        <div className={styles.port_list}>
          <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
            <img src={WanCard} alt="" />
          </Tilt>
          <h3>
            <a
              href="https://wilawan-watt.github.io/Wanwand_stunning-card-hover/"
              target="_blank"
            >
              Wanwand_stunning-card-hover
            </a>
          </h3>
        </div>

        <div className={styles.port_list}>
          <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
            <img src={Loading} alt="" />
          </Tilt>
          <h3>
            <a
              href="https://wilawan-watt.github.io/loading-bar.HTML-CSS/"
              target="_blank"
            >
              loading-bar.HTML-CSS
            </a>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
