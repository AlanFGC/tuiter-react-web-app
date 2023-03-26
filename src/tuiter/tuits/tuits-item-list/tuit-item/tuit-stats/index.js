const TuitStats = (props) => {
    const item = props.item;
    const heart = item.liked ? " bi-heart-fill text-danger" : " bi-heart ";
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
                <i className={ "bi  fst-normal d-inline" + heart}  ></i>
                <p className="d-inline">{item.likes}</p>
            </div>
            <div><i className="bi bi-download fst-normal d-inline"></i></div>
        </div>
    );
}
export default TuitStats;