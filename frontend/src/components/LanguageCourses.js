import React from 'react';
import styles from '../css/LanguageCourses.module.css';
import CourseCard from './CourseCard';

const courseData = [
  { name: 'Spanish', learners: '43.1M', flagUrl: 'https://example.com/flags/spain.png' },
  { name: 'French', learners: '25.1M', flagUrl: 'https://example.com/flags/france.png' },
  { name: 'Japanese', learners: '19.7M', flagUrl: 'https://example.com/flags/japan.png' },
  { name: 'Korean', learners: '17.0M', flagUrl: 'https://example.com/flags/korea.png' },
  { name: 'German', learners: '16.3M', flagUrl: 'https://example.com/flags/germany.png' },
  { name: 'Italian', learners: '11.2M', flagUrl: 'https://example.com/flags/italy.png' },
  { name: 'Hindi', learners: '11.2M', flagUrl: 'https://example.com/flags/india.png' },
  { name: 'Chinese', learners: '8.91M', flagUrl: 'https://example.com/flags/china.png' },
  { name: 'Russian', learners: '7.46M', flagUrl: 'https://example.com/flags/russia.png' },
  { name: 'Arabic', learners: '7.35M', flagUrl: 'https://example.com/flags/arabic.png' },
  { name: 'Portuguese', learners: '4.89M', flagUrl: 'https://example.com/flags/portugal.png' },
  { name: 'Turkish', learners: '4.04M', flagUrl: 'https://example.com/flags/turkey.png' },
  { name: 'Dutch', learners: '2.71M', flagUrl: 'https://example.com/flags/netherlands.png' },
  { name: 'Vietnamese', learners: '2.69M', flagUrl: 'https://example.com/flags/vietnam.png' },
  { name: 'Greek', learners: '2.37M', flagUrl: 'https://example.com/flags/greece.png' },
  { name: 'Polish', learners: '2.17M', flagUrl: 'https://example.com/flags/poland.png' },
  { name: 'Swedish', learners: '2.10M', flagUrl: 'https://example.com/flags/sweden.png' },
  { name: 'Latin', learners: '2.00M', flagUrl: 'https://example.com/flags/latin.png' },
  { name: 'Irish', learners: '1.95M', flagUrl: 'https://example.com/flags/ireland.png' },
  { name: 'Norwegian (Bokmål)', learners: '1.61M', flagUrl: 'https://example.com/flags/norway.png' },
  { name: 'Hebrew', learners: '1.51M', flagUrl: 'https://example.com/flags/israel.png' },
  { name: 'Ukrainian', learners: '1.39M', flagUrl: 'https://example.com/flags/ukraine.png' },
  { name: 'Indonesian', learners: '1.11M', flagUrl: 'https://example.com/flags/indonesia.png' },
  { name: 'Finnish', learners: '1.04M', flagUrl: 'https://example.com/flags/finland.png' },
  { name: 'Danish', learners: '946K', flagUrl: 'https://example.com/flags/denmark.png' },
  { name: 'Romanian', learners: '940K', flagUrl: 'https://example.com/flags/romania.png' },
  { name: 'Czech', learners: '844K', flagUrl: 'https://example.com/flags/czech.png' },
  { name: 'High Valyrian', learners: '815K', flagUrl: 'https://example.com/flags/high-valyrian.png' },
  { name: 'Hawaiian', learners: '811K', flagUrl: 'https://example.com/flags/hawaii.png' },
  { name: 'Zulu', learners: '748K', flagUrl: 'https://example.com/flags/zulu.png' },
  { name: 'Welsh', learners: '697K', flagUrl: 'https://example.com/flags/wales.png' },
  { name: 'Swahili', learners: '622K', flagUrl: 'https://example.com/flags/swahili.png' },
  { name: 'Hungarian', learners: '611K', flagUrl: 'https://example.com/flags/hungary.png' },
  { name: 'Scottish Gaelic', learners: '547K', flagUrl: 'https://example.com/flags/scotland.png' },
  { name: 'Haitian Creole', learners: '479K', flagUrl: 'https://example.com/flags/haiti.png' },
  { name: 'Klingon', learners: '381K', isBeta: true, flagUrl: 'https://example.com/flags/klingon.png' },
  { name: 'Esperanto', learners: '378K', flagUrl: 'https://example.com/flags/esperanto.png' },
  { name: 'Navajo', learners: '303K', flagUrl: 'https://example.com/flags/navajo.png' },
  { name: 'Yiddish', learners: '303K', flagUrl: 'https://example.com/flags/yiddish.png' },
];

const LanguageCourses = () => {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Language Courses for English Speakers</h1>
        <div className={styles.languageSelector}>
          <span className={styles.selectedLanguage}>I speak English</span>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d400ea65b41f3d48b23c79d266bcf2323d7559f864b05e00ce97990f43b0b246?placeholderIfAbsent=true&apiKey=9ffa870128194ad4902413a7436e282b" alt="" className={styles.dropdownIcon} />
        </div>
      </header>
      <div className={styles.courseGrid}>
        {[...Array(Math.ceil(courseData.length / 4))].map((_, rowIndex) => (
          <div key={rowIndex} className={styles.courseRow}>
            {courseData.slice(rowIndex * 4, rowIndex * 4 + 4).map((course, index) => (
              <CourseCard
                key={index}
                name={course.name}
                learners={course.learners}
                isBeta={course.isBeta}
                flagUrl={course.flagUrl}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default LanguageCourses;