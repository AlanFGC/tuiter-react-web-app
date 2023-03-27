import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
const ProfileComponent = () => {
    const profile = useSelector(state => state.profile);
    return (
        <div className="w-100 shadow">
            <div className="w-100 position-relative h-auto pb-5">
                <div className="bg-white d-flex flex-nowrap">
                    <i className="text-black bi bi-arrow-left h4"></i>
                    <div className="ms-5">
                        <h4 className="m-0"> {profile.firstName + " " + profile.lastName} </h4>
                        <span className="small mt-2 text-muted">132 tweets</span>
                    </div>
                </div>
                <img src={`/images/${profile.bannerPicture}`} alt="" className="w-100"/>


                <img src={`/images/${profile.profilePicture}`} alt="" className="w-25 rounded-circle position-absolute  start-0 ms-5 "
                     style={{bottom: -40}}/>
                <Link to="/tuiter/edit-profile">
                    <button className="btn float-end mt-2 me-5 border">Edit profile</button>
                </Link>

            </div>
            <div className="bg-white pt-5  d-block">
                <div className="ms-5 mb-0">
                    <h4 className="m-0">{profile.firstName + " " + profile.lastName}</h4>
                    <span className="small text-muted mb-0">{profile.handle}</span> <span className="small text-muted mb-0">- {profile.website}</span>
                </div>
                <br/>
                <p className="small w-100 mt-0 ps-5 pe-5">
                    {profile.bio}
                </p>

                    <div className="w-100 d-inline-flex justify-content-around mb-2 ps-5 pe-5 text-muted small">
                        <div>
                            <i className="bi bi-map fst-normal d-inline"></i>
                            <p className="d-inline">{profile.location}</p>
                        </div>
                        <div>
                            <i className="bi bi-balloon fst-normal d-inline"></i>
                            <p className="d-inline">Born in {profile.dateOfBirth}</p>
                        </div>
                        <div>
                            <i className="bi bi-balloon fst-normal bi-calendar"></i>
                            <p className="d-inline">Joined in {profile.dateJoined}</p>
                        </div>
                    </div>

                <div className=" pt-2 pb-2 ps-5 pe-5 d-flex flex-nowrap ">
                    <span className="fw-bold me-1">{profile.followersCount}</span> <span>  Followers </span>

                    <span className="ms-3 fw-bold me-1">{profile.followingCount}</span> <span>  Following </span>
                </div>

            </div>
        </div>
    );
}


export default ProfileComponent;