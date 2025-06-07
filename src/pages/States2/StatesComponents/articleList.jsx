import { useEffect,useContext } from 'react';
import { observer } from 'mobx-react';
import ArticleCard from './article';
import { useRootStore } from '../../../stores/RootProvider';
const ArticleList = observer(() => {
  const store = useRootStore().articleStore;
  
  useEffect(() => {
    if (store.articles.length === 0) {
      store.loadArticles();
        }
  }, [store]);
  return (
    <ul className="cards-list">
      {store.articles.map(article => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </ul>
  );
});

export default ArticleList;