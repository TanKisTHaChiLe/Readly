import { useRootStore } from "../../stores/RootProvider";
import { NavLink } from "react-router-dom";
import { observer } from "mobx-react";
import viteLogo from "../../assets/react.svg";
const Header = observer(() => {
  const store = useRootStore().articleStore;
  return (
    <header className="header">
      <div className="navigation_content">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <nav className="navigation">
          <NavLink to="/" className={({ isActive }) => (isActive ? "link link_active" : "link")}>Главная</NavLink>
          <NavLink to="states" className={({ isActive }) => (isActive ? "link link_active" : "link")}>Статьи</NavLink>
          <NavLink to="about" className={({ isActive }) => (isActive ? "link link_active" : "link")}>О нас</NavLink>
        </nav>
      </div>
      <div className="navbar-auth">
        <NavLink className="login-btn" to="login">
          Войти
        </NavLink>
        <NavLink className="create-article-btn" to="create">Создать статью</NavLink>
      </div>
    </header>
  );
});

export default Header;
