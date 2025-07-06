import React from 'react';
import { useParams } from 'react-router-dom';
import './CoursePage.css';

// Обновлённые данные курсов
const coursesData = {
  'algorithm-rush': {
    id: 1,
    title: 'Algorithm Rush: Код как спорт',
    description: 'Хардкорное программирование для будущих чемпионов ICPC и Google Hash Code. Научитесь решать сложные алгоритмические задачи и оптимизировать код до наносекунд.',
    duration: '6 месяцев',
    price: '29 900 ₽',
    program: [
      'Алгоритмы и структуры данных',
      'Оптимизация кода',
      'Решение олимпиадных задач',
      'Работа с нейросетями для программирования'
    ],
    image: require('../assets/course1.jpg')
  },
  'blender-cad': {
    id: 2,
    title: 'Blender & CAD: Дизайн будущего',
    description: 'Создание профессиональных 3D-моделей для игр, кино и промышленного дизайна. Освойте полный цикл работы от концепта до готового продукта.',
    duration: '4 месяца',
    price: '24 900 ₽',
    program: [
      'Основы 3D-моделирования',
      'Работа в Blender и AutoCAD',
      'Создание анимаций',
      'Подготовка моделей для 3D-печати'
    ],
    image: require('../assets/course2.jpg')
  },
  'ai-blackbox': {
    id: 3,
    title: 'AI Blackbox: От данных до нейросетей',
    description: 'Полный курс по машинному обучению и анализу данных. Научитесь создавать и обучать нейросети для решения реальных задач.',
    duration: '5 месяцев',
    price: '34 900 ₽',
    program: [
      'Основы Python для Data Science',
      'Машинное обучение',
      'Глубокое обучение',
      'Реальные кейсы из индустрии'
    ],
    image: require('../assets/course3.jpg')
  }
};

const CoursePage = () => {
  const { courseSlug } = useParams();
  const course = coursesData[courseSlug];

  if (!course) {
    return <div className="course-not-found">Курс не найден</div>;
  }

  return (
    <div className="course-page">
      <div className="course-header">
        <img src={course.image} alt={course.title} className="course-header-image" />
        <div className="course-header-content">
          <h1>{course.title}</h1>
          <div className="course-meta">
            <span>Длительность: {course.duration}</span>
            <span>Стоимость: {course.price}</span>
          </div>
        </div>
      </div>
      
      <div className="course-content">
        <section className="course-description">
          <h2>О курсе</h2>
          <p>{course.description}</p>
        </section>
        
        <section className="course-program">
          <h2>Программа обучения</h2>
          <ul>
            {course.program.map((item, index) => (
              <li key={index}>
                <span className="program-item-number">{index + 1}</span>
                <span className="program-item-text">{item}</span>
              </li>
            ))}
          </ul>
        </section>
        
        <button className="enroll-button">Записаться на курс</button>
      </div>
    </div>
  );
};

export default CoursePage;