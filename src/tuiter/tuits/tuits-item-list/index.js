
import TuitItem from "./tuit-item";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findTuitsThunk}
    from "../../services/tuits-thunks";
const TuitsList = () => {

    const {tuits, loading} = useSelector(
        state => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])


    return(
        <ul>
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            {tuits.map((tuit) =>
                <TuitItem key={tuit._id} item={tuit}/>

            )}
        </ul>
    );
}
export default TuitsList;