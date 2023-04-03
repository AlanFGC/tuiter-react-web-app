import TuitStats from "./tuit-stats";

import {deleteTuitThunk} from "../../../services/tuits-thunks";

import {useDispatch} from "react-redux";



const TuitItem = (props) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }
    const item = props.item;
    return (
        <li className="row g-0 mb-3 border-bottom border-1">
            <div className="col-2 col-sm-2 overflow-hidden">
                <img src={`/images/${item.image}`} alt={""} className="w-75 rounded-circle"></img>
            </div>
            <div className="col col-sm-10">
                <div className="d-inline">

                    <p className="d-inline fw-bold ">{item.topic} </p>
                    <i className="bi bi-check-circle-fill"></i>

                    <p className="d-inline text-muted fs-6"> {item.handle}</p>
                    <p className="d-inline text-muted fs-6"> -{item.time}</p><br/>
                    <p className="d-inline">{item.tuit}</p>
                </div>
                <TuitStats item={item}/>
                <i className="bi bi-x-lg float-end"
                   onClick={() => deleteTuitHandler(item._id)}></i>
            </div>
        </li>
    );
}

export default TuitItem;