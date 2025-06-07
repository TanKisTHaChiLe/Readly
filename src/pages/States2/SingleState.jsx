import { useParams } from 'react-router-dom'
import { useRootStore } from '../../stores/RootProvider';
import GoBack from '../../components/goBack';
const SingleState = () => {
    const articleStore = useRootStore().articleStore;
    const { stateId } = useParams();
    const state = articleStore.loadArticleDetailsById(stateId);  
    const {id,link,summary,content,title} = state;
    return (
        <section>
            <GoBack/>
            <img src={link} />
            <h5>{title}</h5>
            <p>{summary}</p>
            <p>{content}</p>
        </section>
    )
}

export default SingleState