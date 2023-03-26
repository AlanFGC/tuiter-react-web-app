import {useParams} from "react-router";

function MainPostsListItem({item}) {
    return(
        <li className="row g-0 mb-3 border-bottom border-1">
            <div className="col-2 col-sm-2 overflow-hidden">
                <img src={`/images/${item.usernameImage}`} className="w-75 rounded-circle"></img>
            </div>

            <div className="col col-sm-10">
                <div className="d-inline">
                    <p className="d-inline fw-bold ">{item.name} </p>
                    <i className="bi bi-check-circle-fill"></i>
                    <p className="d-inline text-muted fs-6" > @{item.username}</p>
                    <p className="d-inline text-muted fs-6" > -{item.time}</p><br/>
                    <p className="d-inline">{item.text}</p>
                </div>
                <div className="border border-1 rounded-4 border-white overflow-hidden">
                    <img src={`/images/${item.image}`} className="w-100 "></img>
                    <p className="ps-2 fw-bold fg-color-white">{item.ArticleTitle}</p>
                    <p className="ps-2 justify-content-evenly">{item.imageText}</p>
                </div>
                <div className="w-100 d-inline-flex justify-content-around mb-2">
                    <div>
                        <i className="bi bi-command fst-normal d-inline"></i>
                        <p className="d-inline">{item.comments}</p>
                    </div>
                    <div>
                        <i className="fa fa-share fst-normal d-inline"></i>
                        <p className="d-inline">{item.shares}</p>
                    </div>
                    <div>
                        <i className="bi bi-heart-fill fst-normal d-inline"></i>
                        <p className="d-inline">{item.likes}</p>
                    </div>
                    <div><i className="bi bi-download fst-normal d-inline"></i></div>
                </div>
            </div>
        </li>
    );
}
export default MainPostsListItem;