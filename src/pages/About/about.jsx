import './about.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        <header className="about-header">
          <h1 className="about-title">О нашем проекте</h1>
          <p className="about-subtitle">
            Платформа для обмена знаниями и идеями через статьи
          </p>
        </header>

        <section className="about-content">
          <div className="about-section">
            <div className="about-section-header">
              <div className="about-section-icon"></div>
              <h2>Наша миссия</h2>
            </div>
            <p className="about-text">
              Мы создали эту платформу, чтобы каждый мог поделиться своими 
              знаниями, опытом и идеями с широкой аудиторией. Мы верим, 
              что обмен информацией делает мир лучше и помогает людям 
              развиваться вместе.
            </p>
          </div>

          <div className="about-section">
            <div className="about-section-header">
              <div className="about-section-icon"></div>
              <h2>Что мы предлагаем</h2>
            </div>
            <ul className="about-list">
              <li className="about-list-item">
                <span className="about-list-icon">✓</span>
                Бесплатную публикацию статей
              </li>
              <li className="about-list-item">
                <span className="about-list-icon">✓</span>
                Широкую аудиторию читателей
              </li>
              <li className="about-list-item">
                <span className="about-list-icon">✓</span>
                Простой и удобный интерфейс
              </li>
              <li className="about-list-item">
                <span className="about-list-icon">✓</span>
                Разнообразие тем и категорий
              </li>
              <li className="about-list-item">
                <span className="about-list-icon">✓</span>
                Систему комментариев и обратной связи
              </li>
            </ul>
          </div>

          <div className="about-section">
            <div className="about-section-header">
              <div className="about-section-icon"></div>
              <h2>Присоединяйтесь к нам</h2>
            </div>
            <p className="about-text">
              Независимо от того, являетесь ли вы опытным писателем или 
              только начинаете - ваши мысли ценны. Наша платформа создана 
              для того, чтобы каждый голос был услышан. Создавайте аккаунт 
              и начните делиться своими статьями уже сегодня!
            </p>
          </div>

          <div className="about-stats">
            <div className="about-stat-card">
              <div className="about-stat-number">1000+</div>
              <div className="about-stat-label">Опубликованных статей</div>
            </div>
            <div className="about-stat-card">
              <div className="about-stat-number">500+</div>
              <div className="about-stat-label">Активных авторов</div>
            </div>
            <div className="about-stat-card">
              <div className="about-stat-number">10,000+</div>
              <div className="about-stat-label">Читателей ежемесячно</div>
            </div>
            <div className="about-stat-card">
              <div className="about-stat-number">50+</div>
              <div className="about-stat-label">Стран охвата</div>
            </div>
          </div>

          <div className="about-team">
            <h2 className="about-team-title">Наша философия</h2>
            <div className="about-team-grid">
              <div className="about-team-principle">
                <h3>Открытость</h3>
                <p>Мы верим в свободный обмен знаниями и идеями</p>
              </div>
              <div className="about-team-principle">
                <h3>Качество</h3>
                <p>Ценим хорошо структурированный и полезный контент</p>
              </div>
              <div className="about-team-principle">
                <h3>Сообщество</h3>
                <p>Создаем пространство для конструктивного общения</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;