import React from 'react';
import { useParams } from 'react-router-dom';
import './UserProfile.css';

const UserProfile = () => {
  // Пока используем mock-данные
  const userData = {
    name: "Иван Иванов",
    email: "ivan@example.com",
    courses: [
      { id: 1, title: "Веб-разработка", progress: 65 },
      { id: 2, title: "Дизайн интерфейсов", progress: 30 }
    ],
    stats: {
      totalCourses: 2,
      completedLessons: 24,
      lastActivity: "2 дня назад"
    }
  };

  return (
    <div className="profile-container">
      <header className="profile-header">
        <h1>Личный кабинет</h1>
      </header>
      
      <section className="user-info">
        <div className="avatar">
          <span>{userData.name.charAt(0)}</span>
        </div>
        <h2>{userData.name}</h2>
        <p>{userData.email}</p>
      </section>

      <section className="user-courses">
        <h3>Мои курсы</h3>
        <div className="courses-grid">
          {userData.courses.map(course => (
            <div key={course.id} className="course-card">
              <h4>{course.title}</h4>
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
              <span>{course.progress}% завершено</span>
            </div>
          ))}
        </div>
      </section>

      <section className="user-stats">
        <h3>Статистика</h3>
        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-value">{userData.stats.totalCourses}</span>
            <span className="stat-label">Курсов</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">{userData.stats.completedLessons}</span>
            <span className="stat-label">Уроков</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">{userData.stats.lastActivity}</span>
            <span className="stat-label">Активность</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserProfile;