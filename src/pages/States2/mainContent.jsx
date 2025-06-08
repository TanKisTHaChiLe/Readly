import ArticleList from "./StatesComponents/articleList"
const States = () => {
    return (
        <section>
            <div className="title_container">
            <h1 className="title">Статьи</h1>
            <p className="page_text">Откройте для себя интересные статьи на различные темы</p>
        </div>
        <ArticleList />
        </section>
        
    );
}
export default States