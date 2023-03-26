import React from "react";
import WhoToFollowListItem from "./who-to-follow-list-item";
import {useSelector} from "react-redux";

const WhoToFollowList = () => {

    const whoArray = useSelector(
        (state) => state.who);


    return (
        <>
            <ul className="list-group rounded-3 rounded-corners-all-around border p-0 overflow-hidden w-100 bg-color-blue">
                <li className="list-group-item">
                    <h3>Who to follow</h3>
                </li>
                {
                    whoArray.map(who =>
                        <WhoToFollowListItem
                            key={who._id}
                            who={who}/>
                    )
                }
                <a className="tweeter-color text-decoration-none ms-3" href="/">show more</a>
            </ul>
            <p className="text-muted fs-6 m-2">Terms of service are the legal agreements between a service provider and a person
                who wants to use that service. </p>
        </>
    );
};

export default WhoToFollowList;