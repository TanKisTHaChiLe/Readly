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
            <span></span>Предосмотр статьи
          </button>
        </div>
        <div className="recommendations">
          <h2>Советы по написанию</h2>
          <ul>
            <li>Используйте заголовок, который привлечет внимание читателя</li>
            <li>Разбивайте текст на небольшие абзацы для лучшего восприятия</li>
            <li>Добавляйте подзаголовки для структурирования контента</li>
            <li>Используйте изображения для иллюстрации ключевых моментов</li>
            <li>Завершите статью выводом или призывом к действию</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CreateState;
