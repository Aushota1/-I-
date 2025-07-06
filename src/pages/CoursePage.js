import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import './CoursePage.css';
import { courses as defaultCourses } from './courses'; // <-- импорт дефолтных курсов

// Анимационные константы
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, when: "beforeChildren" }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

const CoursePage = ({ courses = defaultCourses }) => {
  const { courseSlug } = useParams();
  const [isEnrolling, setIsEnrolling] = useState(false);
  const [activeTab, setActiveTab] = useState('about');
  const { scrollYProgress } = useScroll();
  const course = courses[courseSlug];

  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  if (!course) return (
    <motion.div 
      className="not-found-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2>Курс не найден</h2>
      <Link to="/courses" className="back-button">Вернуться к курсам</Link>
    </motion.div>
  );

  const handleEnroll = () => {
    setIsEnrolling(true);
    setTimeout(() => setIsEnrolling(false), 2000);
  };

  return (
    <motion.div 
      className="course-page"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Параллакс background */}
      <motion.div 
        className="parallax-bg" 
        style={{ y: y1, backgroundImage: `url(${course.image})` }}
      />
      
      {/* Основной контент */}
      <div className="course-content">
        <motion.header className="course-header" variants={itemVariants}>
          <motion.div 
            className="course-cover"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <img src={course.image} alt={course.title} />
            <div className="cover-overlay"></div>
          </motion.div>
          
          <div className="header-content">
            <motion.h1 variants={itemVariants}>{course.title}</motion.h1>
            <motion.p className="excerpt" variants={itemVariants}>{course.excerpt}</motion.p>
            
            <motion.div className="meta-tags" variants={itemVariants}>
              <span className="level-badge">{course.level}</span>
              <span className="duration">{course.duration}</span>
              <span className="price">{course.price}</span>
            </motion.div>
            
            <motion.button
              className={`enroll-button ${isEnrolling ? 'loading' : ''}`}
              onClick={handleEnroll}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              {isEnrolling ? 'Записываем...' : 'Записаться на курс'}
              <div className="button-liquid"></div>
            </motion.button>
          </div>
        </motion.header>

        {/* Навигация по разделам */}
        <motion.nav className="course-tabs" variants={itemVariants}>
          <button 
            className={activeTab === 'about' ? 'active' : ''}
            onClick={() => setActiveTab('about')}
          >
            О курсе
          </button>
          <button 
            className={activeTab === 'program' ? 'active' : ''}
            onClick={() => setActiveTab('program')}
          >
            Программа
          </button>
          <button 
            className={activeTab === 'reviews' ? 'active' : ''}
            onClick={() => setActiveTab('reviews')}
          >
            Отзывы
          </button>
        </motion.nav>

        {/* Контент вкладок */}
        <motion.section 
          className="tab-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          key={activeTab}
        >
          {activeTab === 'about' && (
            <motion.div variants={containerVariants}>
              <motion.h2 variants={itemVariants}>Описание курса</motion.h2>
              <motion.p variants={itemVariants}>{course.description}</motion.p>
              
              <motion.div className="features-grid" variants={containerVariants}>
                {course.features.map((feature, i) => (
                  <motion.div className="feature-card" key={i} variants={itemVariants}>
                    <div className="feature-icon">{feature.icon}</div>
                    <h3>{feature.title}</h3>
                    <p>{feature.text}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}

          {activeTab === 'program' && (
            <motion.ul className="program-list" variants={containerVariants}>
              {course.program.map((item, i) => (
                <motion.li key={i} variants={itemVariants}>
                  <div className="module-number">{i+1}</div>
                  <div className="module-content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <div className="module-duration">{item.duration}</div>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          )}

          {activeTab === 'reviews' && (
            <motion.div className="reviews-container" variants={containerVariants}>
              {course.reviews.map((review, i) => (
                <motion.div className="review-card" key={i} variants={itemVariants}>
                  <div className="review-author">
                    <img src={review.avatar} alt={review.name} />
                    <div>
                      <h3>{review.name}</h3>
                      <span>{review.role}</span>
                    </div>
                  </div>
                  <p>{review.text}</p>
                  <div className="review-rating">
                    {'★'.repeat(review.rating)}{'☆'.repeat(5-review.rating)}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.section>

        {/* Преподаватели */}
        <motion.section className="instructors-section" variants={containerVariants}>
          <motion.h2 variants={itemVariants}>Преподаватели</motion.h2>
          <div className="instructors-grid">
            {course.instructors.map((instructor, i) => (
              <motion.div 
                className="instructor-card"
                key={i}
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <div className="instructor-photo">
                  <img src={instructor.photo} alt={instructor.name} />
                </div>
                <h3>{instructor.name}</h3>
                <p className="position">{instructor.position}</p>
                <p className="bio">{instructor.bio}</p>
                <div className="social-links">
                  {instructor.social.map((social, j) => (
                    <a key={j} href={social.url} target="_blank" rel="noopener noreferrer">
                      {social.icon}
                    </a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>

      {/* Плавающие декоративные элементы */}
      <div className="floating-elements">
        <motion.div 
          className="floating-circle"
          animate={{
            y: [0, 20, 0],
            x: [0, 10, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="floating-triangle"
          animate={{
            rotate: [0, 360],
            y: [0, -30, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
    </motion.div>
  );
};

export default CoursePage;
