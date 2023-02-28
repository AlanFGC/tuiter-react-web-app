import React from "react";


const NavigationSidebar = ({active = "explore"}) => {
    return (
        <ul className="list-group">

            <a className="list-group-item">Tuiter</a>
            <a className={`list-group-item
                    ${active === 'home'?'active':''}`}>
                Home
            </a>
            <a className={`list-group-item
                    ${active === 'explore'?'active':''}`}>
                Explore
            </a>

            <li className={`list-group-item list-group-item-action ${active === 'explore'?'active':''}`}>
                <i className="fas fa-envelope "></i>
                <a className={`text-decoration-none fw-bold text-white${active === 'notifications'?'active':''}`}>
                    Notifications
                </a>
            </li>


            <a className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
                Notifications
            </a>
            <a className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
                Messages
            </a>
            <a className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
                Bookmarks
            </a>
            <a className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
                Lists
            </a>
            <a className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
                Profile
            </a>
            <a className={`list-group-item
                    ${active === 'more'?'active':''}`}>
                More
            </a>
        </ul>

    );
};
export default NavigationSidebar;