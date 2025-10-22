import './Home.css';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className="home-page">
      <section className="home-hero">
        <div className="home-hero-content">
          <h1 className="home-title">Добро пожаловать на Readly</h1>
          <p className="home-subtitle">Читайте интересные статьи или публикуйте свои собственные</p>
          <div className="home-buttons">
            <Link to='states' className="home-btn home-btn-primary">
              Читать статьи
            </Link>
            <Link to='create' className="home-btn home-btn-secondary">
              Опубликовать статью
            </Link>
          </div>
        </div>
        <div className="home-hero-image">
          <div className="home-hero-graphic">📚</div>
        </div>
      </section>

      <section className="home-features">
        <div className="home-container">
          <h2 className="home-section-title">Что мы предлагаем</h2>
          <div className="home-features-grid">
            <div className="home-feature-card">
              <div className="home-feature-icon">📖</div>
              <h3>Чтение</h3>
              <p>Доступ к тысячам интересных статей на различные темы</p>
            </div>
            <div className="home-feature-card">
              <div className="home-feature-icon">✍️</div>
              <h3>Публикация</h3>
              <p>Поделитесь своими знаниями и опытом с сообществом</p>
            </div>
            <div className="home-feature-card">
              <div className="home-feature-icon">👥</div>
              <h3>Сообщество</h3>
              <p>Общайтесь с авторами и читателями со всего мира</p>
            </div>
          </div>
        </div>
      </section>

      <section className="home-cta">
        <div className="home-container">
          <div className="home-cta-content">
            <h2>Готовы начать?</h2>
            <p>Присоединяйтесь к нашему сообществу сегодня</p>
            <Link to='states' className="home-btn home-btn-large">
              Начать чтение
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;