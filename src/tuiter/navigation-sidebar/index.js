import React from "react";
import {Link} from "react-router-dom";


const NavigationSidebar = ({active = "home"}) => {
    return (
        <ul className="list-group">

            <li className={`list-group-item list-group-item-action ${active === 'home' ? 'active text-white' : 'text-black'}`}>
                <i className="bi bi-house-fill me-1"></i>
                <Link className={`d-none d-xxl-inline text-decoration-none text-black ${active === 'home' ? 'active text-white fw-bold' : ''}`}>
                    Home
                </Link>
            </li>

            <li className={`list-group-item list-group-item-action ${active === 'explore' ? 'active text-white' : 'text-black'}`}>
                <i className="bi bi-search me-1"></i>
                <Link className={`d-none d-xxl-inline text-decoration-none text-black ${active === 'explore' ? 'active text-white fw-bold' : 'text-black'}`}>
                    Explore
                </Link>
            </li>

            <li className={`list-group-item list-group-item-action ${active === 'notifications' ? 'active text-white' : 'text-black'}`}>
                <i className="bi bi-bell-fill me-1"></i>
                <Link className={`d-none d-xxl-inline text-decoration-none  ${active === 'notifications' ? 'active text-white fw-bold' : 'text-black'}`}>
                    Notifications
                </Link>
            </li>

            <li className={`list-group-item list-group-item-action ${active === 'messages' ? 'active text-white' : 'text-black'}`}>
                <i className="bi bi-envelope-fill "></i>
                <Link className={`d-none d-xxl-inline text-decoration-none ${active === 'messages' ? 'active text-white fw-bold' : 'text-black'}`}>
                    Messages
                </Link>
            </li>

            <li className={`list-group-item list-group-item-action ${active === 'bookmarks' ? 'active text-white' : 'text-black'}`}>
                <i className="bi bi-search me-1"></i>
                <Link className={`d-none d-xxl-inline text-decoration-none  ${active === 'bookmarks' ? 'active text-white fw-bold' : 'text-black'}`}>
                    Bookmarks
                </Link>
            </li>

            <li className={`list-group-item list-group-item-action ${active === 'lists' ? 'active text-white' : 'text-black'}`}>
                <i className="bi bi-list me-1"></i>
                <Link className={`d-none d-xxl-inline text-decoration-none  ${active === 'lists' ? 'active text-white fw-bold' : 'text-black'}`}>
                    Lists
                </Link>
            </li>

            <li className={`list-group-item list-group-item-action ${active === 'profile' ? 'active text-white' : 'text-black'}`}>
                <i className="bi bi-person-fill me-1"></i>
                <Link className={`d-none d-xxl-inline text-decoration-none ${active === 'profile' ? 'active text-white fw-bold' : 'text-black'}`}>
                    Profile
                </Link>
            </li>

            <li className={`list-group-item list-group-item-action ${active === 'more' ? 'active text-white' : 'text-black'}`}>
                <i className=" bi bi-plus me-1"></i>
                <Link className={`d-none d-xxl-inline  col-md-2 text-decoration-none ${active === 'more' ? 'active text-white fw-bold' : 'text-black'}`}>
                    More
                </Link>
            </li>
        </ul>
    );
};
export default NavigationSidebar;