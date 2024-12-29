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
        <li><FaHtml5 /></li>
        <li><FaCss3Alt /></li>
        <li><FaJs /></li>
        <li><FaReact /></li>
        <li><FaGitAlt /></li>
        <li><FaFigma /></li>
      </div>
    </div>
  );
};

export default Skills;
