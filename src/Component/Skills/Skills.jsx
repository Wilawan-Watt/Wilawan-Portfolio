import React from "react";
import styles from "./Skills.module.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa6";

function Skills() {
  return (
    <div className={styles.skill_con}>
      <h1>my skills</h1>
      <div className={styles.skill_item}>
        <li><FaHtml5 /><p>HTML5</p></li>
        <li><FaCss3Alt /><p>CSS3</p></li>
        <li><FaJs /><p>JavaScript</p></li>
        <li><FaReact /><p>ReactJS</p></li>
        <li><FaGitAlt /><p>Git</p></li>
        <li><FaFigma /><p>Figma</p></li>
      </div>
    </div>
  );
};

export default Skills;
