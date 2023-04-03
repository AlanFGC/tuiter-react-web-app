import React from "react";
import PostSummaryItem from "./post-summary-list-item";
import {useSelector} from "react-redux";
const PostSummaryList = () => {
    let postsArray = useSelector(state => state.tuits);
    if (!postsArray){
        return(<h1>SERVICE NOT AVAILABLE</h1>);
    }
    return(
        <ul className="list-group">
            {
                postsArray.map(post =>
                    <PostSummaryItem
                        key={post._id} post={post}/> )
            }
        </ul>
    );
};
export default PostSummaryList;