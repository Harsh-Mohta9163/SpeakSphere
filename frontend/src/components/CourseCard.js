import React from 'react';
import styles from '../css/LanguageCourses.module.css';

const CourseCard = ({ name, learners, isBeta }) => {
  return (
    <a href="#" className={styles.courseCard}>
      {isBeta && <span className={styles.betaBadge}>Beta</span>}
      <h3 className={styles.courseName}>{name}</h3>
      <p className={styles.learnerCount}>{learners} learners</p>
    </a>
  );
};

export default CourseCard;