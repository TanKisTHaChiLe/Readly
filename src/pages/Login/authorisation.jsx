import { useNavigate } from "react-router-dom";
import { useState } from "react";
import GoBack from "../../components/goBack";

const Authorisation = () => {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const hadlerSubmitForm = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Пароли не совпадают");
      return;
    }

    setError("");
    navigate(-1);
  };

  return (
    <>
      <section className="section_login">
        <div className="section_login_content">
          <GoBack />
          <h3 className="form_title">Регистрация</h3>
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
                value={password}
                onChange={handlePasswordChange}
              />
            </label>
            <label className="form__field">
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                className="form__input form__input_type_password"
                placeholder="Повторите пароль"
                required
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
            </label>
            {error && (
              <p className="error-message" style={{ color: "red" }}>
                {error}
              </p>
            )}
            <button type="submit" className="button form__button">
              Зарегистрироваться
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Authorisation;
