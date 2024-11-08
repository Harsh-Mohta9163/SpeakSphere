import React from 'react';
import styles from '../css/LanguageLearningHeader.module.css';
import LanguageButton from './LanguageButton';

const languages = [
  { name: 'Spanish', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0a9d3418e2024835978052b56407bb3af0fecb216969b120557474099b3e111f?placeholderIfAbsent=true&apiKey=9ffa870128194ad4902413a7436e282b' },
  { name: 'French' },
  { name: 'German' },
  { name: 'Italian' },
  { name: 'Portuguese' },
  { name: 'Dutch' },
  { name: 'Japanese' },
];

function LanguageLearningHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.imageWrapper}>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/eaac45dca3779cfee09fc0269f7842dce69a591835ea2337aece9571d073557c?placeholderIfAbsent=true&apiKey=9ffa870128194ad4902413a7436e282b" alt="Language learning illustration" className={styles.headerImage} />
          </div>
          <div className={styles.textContent}>
            <h1 className={styles.title}>
              <span className={styles.titlePart}>The free, fun, and effective way to</span>
              <span className={styles.titlePart}>learn a language!</span>
            </h1>
            <button className={styles.ctaButton}>Get started</button>
            <button className={styles.secondaryButton}>I already have an account</button>
          </div>
        </div>
      </div>
      <nav className={styles.languageNav}>
        <ul className={styles.languageList}>
          {languages.map((lang, index) => (
            <li key={lang.name}>
              <LanguageButton name={lang.name} icon={lang.icon} />
            </li>
          ))}
          <li>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c670c2384c6a29f758c469a21a48eb339ff0adeb7157bdd7ae5d2e399b62bc2c?placeholderIfAbsent=true&apiKey=9ffa870128194ad4902413a7436e282b" alt="" className={styles.navIcon} />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default LanguageLearningHeader;