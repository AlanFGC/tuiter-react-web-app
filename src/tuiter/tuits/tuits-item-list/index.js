
import {useSelector} from "react-redux";
import TuitItem from "./tuit-item";
const TuitsList = () => {
    const tuits = useSelector(state => state.tuits)
    return(
        <ul>
            {tuits.map((tuit) =>
                <TuitItem key={tuit._id} item={tuit}/>

            )}
        </ul>
    );
}
export default TuitsList;