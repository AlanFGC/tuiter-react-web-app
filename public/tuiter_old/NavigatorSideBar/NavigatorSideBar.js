const NavigationSidebar = (activeLink) => {
    return(`
    <ul class="list-group">
            <li class="list-group-item list-group-item-action">
                <i class="fas fa-at"></i>
            </li>
            <li class="list-group-item list-group-item-action ${activeLink == "home" ? "active": ""}">
                <i class="fas fa-home"></i>
                <a class="d-none d-xxl-inline fst-normal text-white text-decoration-none ${activeLink == "home" ? "active": ""}">Home</a>
            </li>
            <li class="list-group-item list-group-item-action ${activeLink == "explore" ? "active": ""}">
                <i class="fas fa-bell "></i>
                <a class="d-none d-xxl-inline text-white text-decoration-none ${activeLink == "explore" ? "active": ""}" >Explore</a>
            </li>
            <li class="list-group-item list-group-item-action ${activeLink == "notifications" ? "active": ""}">
                <i class="fas fa-bell "></i>
                <a class="d-none d-xxl-inline text-white text-decoration-none ${activeLink == "notifications" ? "active": ""}" >Notifications</a>
            </li>
            <li class="list-group-item list-group-item-action ${activeLink == "messages" ? "active": ""}">
                <i class="fas fa-envelope "></i>
                <a class="d-none d-xxl-inline text-white text-decoration-none ${activeLink == "messages" ? "active": ""}" >Messages</a>
            </li>
            <li class="list-group-item list-group-item-action ${activeLink == "bookmarks" ? "active": ""}">
                <i class="fas fa-bookmark "></i>
                <a class="d-none d-xxl-inline text-white text-decoration-none ${activeLink == "bookmarks" ? "active": ""}" >Bookmarks</a>
            </li>
            <li class="list-group-item list-group-item-action ${activeLink == "lists" ? "active": ""}">
                <i class="fas fa-list"></i>
                <a class="d-none d-xxl-inline text-white text-decoration-none ${activeLink == "lists" ? "active": ""}">Lists</a>
            </li>
            <li class="list-group-item list-group-item-action ${activeLink == "profile" ? "active": ""}">
                <i class="fas fa-user "></i>
                <a class="d-none d-xxl-inline text-white text-decoration-none ${activeLink == "profile" ? "active": ""}">Profile</a>
            </li>
            <li class="list-group-item list-group-item-action ${activeLink == "more" ? "active": ""}">
                <i class="fas fa-plus-circle"></i>
                <a class="d-none d-xxl-inline text-white text-decoration-none ${activeLink == "more" ? "active": ""}">More</a>
            </li>
        </ul>
        <button class="btn btn-primary rounded-pill w-100 mt-2 tweet-btn"> Tweet</button>
    `)
}
export default NavigationSidebar;
const div = $("#navigationSideBar");
div.append(NavigationSidebar())