import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const GoBack = () => {
    const navigate = useNavigate();
    return <>
    <Link className="link link_go_back" to={'..'}
        onClick={(e) => {
          e.preventDefault();
          navigate(-1);
        }}>
            Назад
            </Link>
    </>
}
export default GoBack;