import GoBack from "../../components/goBack";
const CreateState = () => {
  return (
    <section className="section_create-state">
      <div className="state_creator">
        <h1 className="state_creator-title">Создание новой статьи</h1>
        <form className="form_creator-state">
          <label>
            <span>Заголовок стаьи</span>
            <input></input>
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
