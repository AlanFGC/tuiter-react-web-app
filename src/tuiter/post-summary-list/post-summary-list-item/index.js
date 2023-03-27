import React from "react";

const PostSummaryItem = (
    {
        post = {
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "tesla.jpg"
        }
    }
) => {
    return (
        <li className="row list-group-item d-flex justify-content-start align-content-center m-1">
            <div className="col col-9 ps-0 d-inline">
                <p className="text-muted font-weight-normal fs-6">{post.topic}</p>
                <h3 className="d-inline fw-bold fs-6">{post.userName}</h3>
                <i className="d-inline fa fa-check-circle col text-primary"></i>
                <p className="d-inline text-muted"> - {post.time}</p>
                <p>{post.title}</p>
                <p className="text-muted fs-6"> {post.tweets ? post.tweets : ""}</p>
            </div>
            <div className="col col-3 pe-1 text-center align-content-center w-25">
                <img className="rounded mt-2 w-100" alt="" src={`/images/${post.image}`}/>
            </div>
        </li>

    );
};
export default PostSummaryItem;