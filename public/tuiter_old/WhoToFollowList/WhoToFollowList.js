import whoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";
const WhoToFollowList = () => {
    return(`
    <ul class="rounded-3 rounded-corners-all-around p-0 overflow-hidden">
            ${who.map((obj) =>{
                return(whoToFollowListItem(obj));
    }).join('')}
        <a class="tweeter-color text-decoration-none ms-3">show more</a>
    </ul>
    <p class="terms-of-services">Terms of service are the legal agreements between a service provider and a person who wants to use that service. </p>
    `);
}
export default WhoToFollowList;