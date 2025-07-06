import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CourseCard from '../components/CourseCard';
import Testimonial from '../components/Testimonial';

// Импортируем изображения
import algoCourse from '../assets/algo-course.jpg';
import threeDCourse from '../assets/3d-course.jpg';
import aiCourse from '../assets/ai-course.jpg';
import student1 from '../assets/student1.jpg';
import student2 from '../assets/student2.jpg';
import student3 from '../assets/student3.jpg';

const Home = () => {
  const courses = [
    {
      id: 1,
      title: 'Algorithm Rush: Код как спорт',
      slug: 'algorithm-rush',
      description: 'Хардкорное программирование для будущих чемпионов ICPC и Google Hash Code',
      duration: '6 месяцев',
      level: 'Продвинутый',
      price: '29 900 ₽',
      image: algoCourse,
      highlights: [
        'Решение задач уровня LeetCode Hard',
        'Оптимизация кода до наносекунд',
        'Нейросети для олимпиад',
        'Челлендж от VK и Яндекс'
      ]
    },
    {
      id: 2,
      title: 'Blender & CAD: Дизайн будущего',
      slug: 'blender-cad',
      description: 'Создание 3D-моделей для геймдева, кино и метавселенных',
      duration: '4 месяца',
      level: 'Средний',
      price: '24 900 ₽',
      image: threeDCourse,
      highlights: [
        'Моделирование как в Pixar',
        'Проектирование умных устройств',
        '3D-печать за 24 часа',
        'NFT для метавселенных'
      ]
    },
    {
      id: 3,
      title: 'AI Blackbox: От данных до нейросетей',
      slug: 'ai-blackbox',
      description: 'Полный цикл работы с искусственным интеллектом и анализом данных',
      duration: '5 месяцев',
      level: 'Продвинутый',
      price: '34 900 ₽',
      image: aiCourse,
      highlights: [
        'Generative AI (Stable Diffusion, GPT)',
        'Анализ данных лучше Bloomberg',
        'AutoML без тонн кода',
        'Свой AI-стартап'
      ]
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Анна Смирнова',
      role: 'Веб-разработчик',
      text: 'Курс по веб-разработке помог мне сменить профессию и найти работу мечты. Преподаватели — настоящие профессионалы!',
      avatar: student1,
    },
    {
      id: 2,
      name: 'Иван Петров',
      role: 'UX/UI дизайнер',
      text: 'Отличная подача материала, много практики. После курса собрал портфолио и получил первые заказы на фрилансе.',
      avatar: student2,
    },
    {
      id: 3,
      name: 'Елена Ковалева',
      role: 'Маркетолог',
      text: 'Практические кейсы из курса по маркетингу сразу применила в работе. Результаты не заставили себя ждать!',
      avatar: student3,
    },
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section id="home" className="hero-section" style={{ 
        background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
        color: 'white',
        padding: '180px 0 100px',
        marginTop: '80px'
      }}>
        <div className="container">
          <div style={{ maxWidth: '600px' }}>
            <h1 style={{ 
              fontSize: '3rem', 
              marginBottom: '20px',
              fontFamily: 'var(--font-heading)'
            }}>
              Образование будущего уже здесь
            </h1>
            <p style={{ 
              fontSize: '1.2rem', 
              marginBottom: '30px',
              opacity: 0.9
            }}>
              Онлайн-курсы от практикующих экспертов. Освойте востребованную профессию или повысьте квалификацию.
            </p>
            <div style={{ display: 'flex', gap: '15px' }}>
              <Link to="#courses" className="btn btn-primary" style={{ 
                padding: '15px 30px',
                fontSize: '1.1rem',
                textDecoration: 'none'
              }}>
                Выбрать курс
              </Link>
              <button className="btn btn-outline" style={{ 
                padding: '15px 30px',
                fontSize: '1.1rem',
                color: 'white',
                borderColor: 'white'
              }}>
                Узнать больше
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <h2 className="section-title">О нашей школе</h2>
          <p className="section-subtitle">
            FutureCode — это современная платформа для обучения профессиям будущего
          </p>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px',
            marginTop: '50px'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '3rem',
                color: 'var(--color-primary)',
                fontWeight: '700',
                marginBottom: '15px'
              }}>10+</div>
              <h3 style={{ 
                fontFamily: 'var(--font-heading)',
                marginBottom: '10px'
              }}>Направлений</h3>
              <p>Программирование, AI, 3D-дизайн и другие востребованные специальности</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '3rem',
                color: 'var(--color-primary)',
                fontWeight: '700',
                marginBottom: '15px'
              }}>5000+</div>
              <h3 style={{ 
                fontFamily: 'var(--font-heading)',
                marginBottom: '10px'
              }}>Студентов</h3>
              <p>Которые уже прошли наши курсы и добились успеха в профессии</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '3rem',
                color: 'var(--color-primary)',
                fontWeight: '700',
                marginBottom: '15px'
              }}>50+</div>
              <h3 style={{ 
                fontFamily: 'var(--font-heading)',
                marginBottom: '10px'
              }}>Преподавателей</h3>
              <p>Практикующих экспертов из Google, NVIDIA и других топ-компаний</p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="section" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <h2 className="section-title">Топовые курсы 2024</h2>
          <p className="section-subtitle">
            Программы, которые дают реальные навыки для работы в технологиях будущего
          </p>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '30px',
            marginTop: '50px'
          }}>
            {courses.map(course => (
              <CourseCard 
                key={course.id} 
                {...course} 
                slug={course.slug}
              />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <Link to="/courses" className="btn btn-primary" style={{ 
              padding: '15px 40px', 
              textDecoration: 'none',
              fontSize: '1.1rem'
            }}>
              Все курсы →
            </Link>
          </div>
        </div>
      </section>

      {/* Остальные секции остаются без изменений */}
      {/* Testimonials Section */}
      <section id="testimonials" className="section">
        <div className="container">
          <h2 className="section-title">Отзывы студентов</h2>
          <p className="section-subtitle">
            Что говорят наши выпускники о курсах и процессе обучения
          </p>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px',
            marginTop: '50px'
          }}>
            {testimonials.map(testimonial => (
              <Testimonial key={testimonial.id} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ 
        background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
        color: 'white',
        textAlign: 'center'
      }}>
        <div className="container">
          <h2 className="section-title" style={{ color: 'white' }}>Готовы начать обучение?</h2>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Оставьте заявку и получите консультацию по подбору курса
          </p>
          <div style={{ 
            maxWidth: '500px',
            margin: '0 auto',
            display: 'flex',
            gap: '10px',
            marginTop: '30px'
          }}>
            <input 
              type="email" 
              placeholder="Ваш email" 
              style={{
                flex: 1,
                padding: '15px 20px',
                border: 'none',
                borderRadius: '50px',
                fontFamily: 'var(--font-main)'
              }}
            />
            <button className="btn btn-primary" style={{ 
              padding: '15px 30px',
              fontSize: '1rem'
            }}>
              Отправить
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;