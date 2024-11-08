import React from 'react';
import styles from '../css/LanguageButton.module.css';

function LanguageButton({ name, icon }) {
  return (
    <button className={styles.languageButton}>
      {icon && <img src={icon} alt="" className={styles.languageIcon} />}
      <span>{name}</span>
    </button>
  );
}

export default LanguageButton;