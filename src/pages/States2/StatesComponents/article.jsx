import React from "react";
import { Link } from "react-router-dom";


const ArticleCard = ({ article }) => {
  return (
    <li className="card_list-item">
      <Link to={`/states/${article.id}`} className="article-card">
        <div className="image_container">
          <img className="article-image" src={article.link} alt="" />
        </div>
        <div className="article-content">       
          <div className="article-meta">
            <p className="theme">{article.author}</p>
            <p className="date">{article.date}</p>       
          </div>
          <div>
              <h3>{article.title}</h3>
              <p className="summary">{article.summary}</p>
          </div>   
        </div>
    </Link>
    </li>
  );
};

export default ArticleCard