const NavigationSidebar = () => {
    return(`
    <ul class="list-group">
            <li class="list-group-item list-group-item-action">
                <i class="fas fa-at"></i>
            </li>
            <li class="list-group-item list-group-item-action ">
                <i class="fas fa-home"></i>
                <a class="d-none d-xxl-inline fst-normal text-white text-decoration-none">Home</a>
            </li>
            <li class="list-group-item list-group-item-action selected">
                <i class="fas fa-hashtag"></i>
                <a class="d-none d-xxl-inline text-decoration-none selected" >Explore</a>
            </li>
            <li class="list-group-item list-group-item-action">
                <i class="fas fa-bell "></i>
                <a class="d-none d-xxl-inline text-white text-decoration-none" >Notifications</a>
            </li>
            <li class="list-group-item list-group-item-action">
                <i class="fas fa-envelope "></i>
                <a class="d-none d-xxl-inline text-white text-decoration-none" >Messages</a>
            </li>
            <li class="list-group-item list-group-item-action">
                <i class="fas fa-bookmark "></i>
                <a class="d-none d-xxl-inline text-white text-decoration-none" >Bookmarks</a>
            </li>
            <li class="list-group-item list-group-item-action">
                <i class="fas fa-list"></i>
                <a class="d-none d-xxl-inline text-white text-decoration-none">Lists</a>
            </li>
            <li class="list-group-item list-group-item-action">
                <i class="fas fa-user "></i>
                <a class="d-none d-xxl-inline text-white text-decoration-none">Profile</a>
            </li>
            <li class="list-group-item list-group-item-action">
                <i class="fas fa-plus-circle"></i>
                <a class="d-none d-xxl-inline text-white text-decoration-none">More</a>
            </li>
        </ul>
        <button class="btn btn-primary rounded-pill w-100 mt-2 tweet-btn"> Tweet</button>
    `)
}
export default NavigationSidebar;
const div = $("#navigationSideBar");
div.append(NavigationSidebar())