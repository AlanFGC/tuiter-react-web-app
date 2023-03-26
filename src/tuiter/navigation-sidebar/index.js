import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return (
        <div className="list-group">


            <Link className={`list-group-item list-group-item-action ${active === '/' ? 'active text-white' : 'text-black'}`}>
                <i className="bi bi-twitter me-1"></i>
            </Link>


            <Link to={"/tuiter/home"} className={`list-group-item list-group-item-action ${active === 'home' ? 'active text-white' : 'text-black'}`}>
                <i className="bi bi-house-fill me-1"></i>
                <p to={"/tuiter/home"} className={`d-none d-xxl-inline text-decoration-none text-black ${active === 'home' ? 'active text-white fw-bold' : ''}`}>

                    Home
                </p>
            </Link>

            <Link to={"/tuiter/explore"} className={`list-group-item list-group-item-action ${active === 'explore' ? 'active text-white' : 'text-black'}`}>
                <i className="bi bi-search me-1"></i>
                <p to={"/tuiter/explore"} className={`d-none d-xxl-inline text-decoration-none text-black ${active === 'explore' ? 'active text-white fw-bold' : 'text-black'}`} >

                    Explore
                </p>
            </Link>

            <Link to={"/"} className={`list-group-item list-group-item-action ${active === 'labs' ? 'active text-white' : 'text-black'}`}>
                <i className="bi bi-calculator me-1"></i>
                <p to={"/"} className={`d-none d-xxl-inline text-decoration-none  ${active === 'labs' ? 'active text-white fw-bold' : 'text-black'}`} >
                    Labs
                </p>
            </Link>


            <Link className={`list-group-item list-group-item-action ${active === 'notifications' ? 'active text-white' : 'text-black'}`}>
                <i className="bi bi-bell-fill me-1"></i>
                <p className={`d-none d-xxl-inline text-decoration-none  ${active === 'notifications' ? 'active text-white fw-bold' : 'text-black'}`}>
                    Notifications
                </p>
            </Link>




            <Link className={`list-group-item list-group-item-action ${active === 'messages' ? 'active text-white' : 'text-black'}`}>
                <i className="bi bi-envelope-fill "></i>
                <p className={`d-none d-xxl-inline text-decoration-none ${active === 'messages' ? 'active text-white fw-bold' : 'text-black'}`}>
                    Messages
                </p>
            </Link>

            <Link className={`list-group-item list-group-item-action ${active === 'bookmarks' ? 'active text-white' : 'text-black'}`}>
                <i className="bi bi-search me-1"></i>
                <p className={`d-none d-xxl-inline text-decoration-none  ${active === 'bookmarks' ? 'active text-white fw-bold' : 'text-black'}`}>

                    Bookmarks
                </p>
            </Link>

            <Link className={`list-group-item list-group-item-action ${active === 'lists' ? 'active text-white' : 'text-black'}`}>
                <i className="bi bi-list me-1"></i>
                <p className={`d-none d-xxl-inline text-decoration-none  ${active === 'lists' ? 'active text-white fw-bold' : 'text-black'}`}>

                    Lists
                </p>
            </Link>

            <Link to={"/tuiter/profile"} className={`list-group-item list-group-item-action ${active === 'profile' ? 'active text-white' : 'text-black'}`}>
                <i className="bi bi-person-fill me-1"></i>
                <p className={`d-none d-xxl-inline text-decoration-none ${active === 'profile' ? 'active text-white fw-bold' : 'text-black'}`}>

                    Profile
                </p>
            </Link>

            <Link className={`list-group-item list-group-item-action ${active === 'more' ? 'active text-white' : 'text-black'}`}>
                <i className=" bi bi-plus me-1"></i>
                <p className={`d-none d-xxl-inline  col-md-2 text-decoration-none ${active === 'more' ? 'active text-white fw-bold' : 'text-black'}`} to={"/explore"}>
                    More
                </p>
            </Link>
        </div>
    );
};
export default NavigationSidebar;