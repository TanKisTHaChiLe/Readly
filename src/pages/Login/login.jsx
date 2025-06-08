import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import GoBack from "../../components/goBack";
const Login = () => {
  const navigate = useNavigate();

  const hadlerSubmitForm = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <section className="section_login">
        <div className="section_login_content">
          <GoBack />
          <h3 className="form_title">Вход в аккаунт</h3>
          <form
            className="login_form"
            name="authorisation"
            onSubmit={hadlerSubmitForm}
          >
            <label className="form__field">
              <input
                type="email"
                name="authorisation"
                className="form__input form__input_type_authorisation"
                placeholder="Введите электронную почту"
                id="authorisation"
                required
              />
            </label>
            <label className="form__field">
              <input
                type="password"
                name="password"
                id="password"
                className="form__input form__input_type_password"
                placeholder="Пароль"
                required
              />
            </label>
            <div className="login_helpers">
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  id="myCheckbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  className="custom-checkbox"
                />
                <label htmlFor="myCheckbox">Запомнить меня</label>
              </div>
              <a className="link form_link">Забыли пароль?</a>
            </div>

            <button type="submit" className="button form__button">
              Войти
            </button>
            <Link to="authorisation" className="form_link form_registration-link">
              Нет аккаунта?
              <span className="decorated_text-link">Зарегистрироваться</span>
            </Link>
          </form>
        </div>
      </section>
    </>
  );
};
export default Login;
