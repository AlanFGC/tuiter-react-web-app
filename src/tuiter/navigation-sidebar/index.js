import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return (
        <ul className="list-group">

            <li className={`list-group-item list-group-item-action ${active === 'home' ? 'active text-white' : 'text-black'}`}>

                <Link to={"/tuiter/home"} className={`d-none d-xxl-inline text-decoration-none text-black ${active === 'home' ? 'active text-white fw-bold' : ''}`}>
                    <i className="bi bi-house-fill me-1"></i>
                    Home
                </Link>
            </li>

            <li className={`list-group-item list-group-item-action ${active === 'explore' ? 'active text-white' : 'text-black'}`}>

                <Link to={"/tuiter/explore"} className={`d-none d-xxl-inline text-decoration-none text-black ${active === 'explore' ? 'active text-white fw-bold' : 'text-black'}`} >
                    <i className="bi bi-search me-1"></i>
                    Explore
                </Link>
            </li>

            <li className={`list-group-item list-group-item-action ${active === 'labs' ? 'active text-white' : 'text-black'}`}>
                <Link className={`d-none d-xxl-inline text-decoration-none  ${active === 'labs' ? 'active text-white fw-bold' : 'text-black'}`} to={"/"}>
                    <i className="bi bi-calculator me-1"></i>
                    Labs
                </Link>
            </li>


            <li className={`list-group-item list-group-item-action ${active === 'notifications' ? 'active text-white' : 'text-black'}`}>
                <Link className={`d-none d-xxl-inline text-decoration-none  ${active === 'notifications' ? 'active text-white fw-bold' : 'text-black'}`}>
                    <i className="bi bi-bell-fill me-1"></i>
                    Notifications
                </Link>
            </li>




            <li className={`list-group-item list-group-item-action ${active === 'messages' ? 'active text-white' : 'text-black'}`}>
                <Link className={`d-none d-xxl-inline text-decoration-none ${active === 'messages' ? 'active text-white fw-bold' : 'text-black'}`}>
                    <i className="bi bi-envelope-fill "></i>
                    Messages
                </Link>
            </li>

            <li className={`list-group-item list-group-item-action ${active === 'bookmarks' ? 'active text-white' : 'text-black'}`}>
                <Link className={`d-none d-xxl-inline text-decoration-none  ${active === 'bookmarks' ? 'active text-white fw-bold' : 'text-black'}`}>
                    <i className="bi bi-search me-1"></i>
                    Bookmarks
                </Link>
            </li>

            <li className={`list-group-item list-group-item-action ${active === 'lists' ? 'active text-white' : 'text-black'}`}>
                <Link className={`d-none d-xxl-inline text-decoration-none  ${active === 'lists' ? 'active text-white fw-bold' : 'text-black'}`}>
                    <i className="bi bi-list me-1"></i>
                    Lists
                </Link>
            </li>

            <li className={`list-group-item list-group-item-action ${active === 'profile' ? 'active text-white' : 'text-black'}`}>

                <Link className={`d-none d-xxl-inline text-decoration-none ${active === 'profile' ? 'active text-white fw-bold' : 'text-black'}`}>
                    <i className="bi bi-person-fill me-1"></i>
                    Profile
                </Link>
            </li>

            <li className={`list-group-item list-group-item-action ${active === 'more' ? 'active text-white' : 'text-black'}`}>
                <Link className={`d-none d-xxl-inline  col-md-2 text-decoration-none ${active === 'more' ? 'active text-white fw-bold' : 'text-black'}`} to={"/explore"}>
                    <i className=" bi bi-plus me-1"></i>
                    More
                </Link>
            </li>
        </ul>
    );
};
export default NavigationSidebar;