import {updateTuitThunk} from "../../../../services/tuits-thunks";
import {useDispatch, useSelector}
    from "react-redux";
const TuitStats = (props) => {
    const item = props.item;
    const heart = item.liked ? " bi-heart-fill text-danger" : " bi-heart ";
    const dispatch = useDispatch();
    return(
        <div className="w-100 d-inline-flex justify-content-around mb-2">
            <div>
                <i className="bi bi-chat fst-normal d-inline"></i>
                <p className="d-inline">{item.replies}</p>
            </div>
            <div>
                <i className="bi bi-share fst-normal d-inline"></i>
                <p className="d-inline">{item.retuits}</p>
            </div>
            <div>
                Likes: {item.likes}
                <i onClick={() => dispatch(

                    updateTuitThunk({...item, likes: item.likes + 1, liked: true})

                )} className="bi bi-heart-fill me-2 text-danger d-inline"></i>
            </div>

            <div>
                Likes: {item.dislikes}
                <i onClick={() => dispatch(

                    updateTuitThunk({...item, dislikes: item.dislikes + 1, disliked: true})

                )} className="bi bi-hand-thumbs-down me-2 d-inline"></i>
            </div>
            <div><i className="bi bi-download fst-normal d-inline"></i></div>
        </div>
    );
}
export default TuitStats;