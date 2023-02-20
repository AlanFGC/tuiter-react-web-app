import posts from "./posts.js";
import PostSummaryListItem from "./PostSummaryListItem.js";

export default function PostSummaryList () {
return(`
<ul class="list-group mt-2">
            ${posts.map(post => {
                
            return PostSummaryListItem(post)}).join('')}
</ul>
`);
}
