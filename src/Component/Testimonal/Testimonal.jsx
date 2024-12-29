import React from "react";
import styles from "./Testimonal.module.css";

function Testimonal() {
  return (
    <div className={styles.testi_con}>
      <h1>testimonals</h1>
      <div className={styles.testi_list}>
        <div className={styles.testi_wrap}>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum architecto similique aliquam dolores maxime impedit nihil assumenda alias tenetur deserunt.</p>
            <img src="https://images.unsplash.com/photo-1557862921-37829c790f19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
            <h3>john doe</h3>
            <h4>web developer</h4>
        </div>

        <div className={styles.testi_wrap}>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum architecto similique aliquam dolores maxime impedit nihil assumenda alias tenetur deserunt.</p>
            <img src="https://plus.unsplash.com/premium_photo-1705018501151-4045c97658a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdvbWFufGVufDB8fDB8fHww" alt="" />
            <h3>jane mark</h3>
            <h4>web designer</h4>
        </div>

        <div className={styles.testi_wrap}>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum architecto similique aliquam dolores maxime impedit nihil assumenda alias tenetur deserunt.</p>
            <img src="https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFufGVufDB8fDB8fHww" alt="" />
            <h3>joe bisan</h3>
            <h4>project manager</h4>
        </div>
      </div>
    </div>
  );
}

export default Testimonal;
