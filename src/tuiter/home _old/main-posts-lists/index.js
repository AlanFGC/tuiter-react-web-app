import Posts from "../posts.json"
import MainPostsListItem from "./main-posts-list-item";
const MainPostsLists = () => {
    return(
        <ul>
            {Posts.map((val, i) =>
            <MainPostsListItem key={i} item={val}/>
            )}
        </ul>
    );
}
export default MainPostsLists;