import { Outlet } from "react-router-dom";
const SharedStatesLayout = () => {
    return (
        <section className="secction_main">
        <div className="title_container">
            <h1 className="title">Статьи</h1>
            <p className="page_text">Откройте для себя интересные статьи на различные темы</p>
        </div>
       <Outlet />
    </section> 
    )
}

export default SharedStatesLayout