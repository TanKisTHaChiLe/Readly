import GoBack from "../../components/goBack";
import DropZone from "../../components/dropZone";
import AppTextEditor from "../../components/TextEditor/AppTextEditor";
const CreateState = () => {
  return (
    <section className="section_create-state">
      <div className="state_creator">
        <h1 className="state_creator-title">Создание новой статьи</h1>
        <form
          className="form_creator-state"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <label className="form_label">
            <span className="caption__form_label">Заголовок стаьи</span>
            <input
              className="create_form_input type__title-input"
              placeholder="Введите заголовок..."
              maxLength={100}
              minLength={7}
            ></input>
          </label>
          <label className="form_label">
            <span className="caption__form_label">Категория</span>
            <select
              name="categories"
              id="categories"
              className="choosing_category"
              placeholder="Выберите категорию"
            >
              <option value="" disabled selected hidden>
                Выберите категорию
              </option>
              <option value="">Технологии</option>
              <option value="">Наука</option>
              <option value="">Культура</option>
              <option value="">Здоровье</option>
              <option value="">Бизнес</option>
              <option value="">Путешествия</option>
            </select>
          </label>
          <label className="form_label">
            <span className="caption__form_label">Обложка статьи</span>
            {/* <DropZone/> */}
          </label>
          <div className="form_label">
            <span className="caption__form_label">Содержаниие статьи</span>
            <AppTextEditor />
          </div>
          <label className="form_label">
            <span className="caption__form_label">Теги</span>
          </label>
        </form>
      </div>
      <div>
        <div className="preview_state">
          <h2 className="preview_state-title">Предосмотр</h2>
          <button className="preview_state-button">
            <span className="icon_preview-button"></span>Предосмотр статьи
          </button>
        </div>
        <div className="recommendations">
          <h2 className="recommendations_title">Советы по написанию</h2>
          <ul className="recommendations_list">
            <li className="recommendations_list-item">
              <span className="icon_list-item"></span>
              Используйте заголовок, который привлечет внимание читателя
            </li>
            <li className="recommendations_list-item">
              <span className="icon_list-item"></span>
              Разбивайте текст на небольшие абзацы для лучшего восприятия
            </li>
            <li className="recommendations_list-item">
              <span className="icon_list-item"></span>
              Добавляйте подзаголовки для структурирования контента
            </li>
            <li className="recommendations_list-item">
              <span className="icon_list-item"></span>
              Используйте изображения для иллюстрации ключевых моментов
            </li>
            <li className="recommendations_list-item">
              <span className="icon_list-item"></span>
              Завершите статью выводом или призывом к действию
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CreateState;
