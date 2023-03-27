import React from "react";
import "./index.css"
const WhoToFollowListItem = (
    {
        who = { userName: 'PLACEHOLDER', handle: 'PLACEHOLDER', avatarIcon: 'nasa.jpeg' }
    }

) => {
    return(
        <li className="list-group-item mt-3 border-0 ">
            <div className="row">
                <div className="col-2">
                    <img className="rounded-circle" alt="" height={48} src={`/images/${who.avatarIcon}`}/>
                </div>
                <div className="col-8">
                    <div className="fw-bold">{who.userName} <i className="fw bi-check-circle-fill d-inline"></i> </div>
                    <div className="text-muted fs-6">@{who.handle}</div>
                </div>
                <div className="col-2">
                    <button className="btn btn-primary rounded-pill float-end bg-black text-white fw-bold">Follow</button>
                </div>
            </div>
        </li>
    );
};
export default WhoToFollowListItem;