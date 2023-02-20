import PostItem from "./PostItem.js";
import Post from "./Posts.js";
export default () => {
    return(`
    <ul class="container w-100 overflow-hidden">
    ${Post.map(post => {
    return PostItem(post);
    }).join('')}
    </ul>
    `);
}