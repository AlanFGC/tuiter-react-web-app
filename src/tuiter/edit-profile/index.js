import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {useState} from "react";

import {updateProfile} from "../profile/profile-reducer";
const EditProfile = () => {
    const dispatch = useDispatch();

    const saveFormHandler = () => {

    }

    const profile = useSelector(state => state.profile);
    let [currInfo, setCurrInfo] = useState(profile);

    function onChangeHandler(info){
        setCurrInfo({...currInfo, ...info})

    }
    function onClickHandler(){
        alert("Changes were saved " + currInfo.firstName);
        dispatch(updateProfile(currInfo));
    }

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


                <img src={`/images/${profile.profilePicture}`} alt=""
                     className="w-25 rounded-circle position-absolute  start-0 ms-5 "
                     style={{bottom: -40}}/>
                <button className="btn float-end mt-2 me-5 border" onClick={onClickHandler}>Save Changes</button>
            </div>


            <div className="ps-5 pe-5 pt-5  ">
                <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                <input type="text" className="form-control" id="exampleFormControlInput1"
                       placeholder={profile.firstName} onChange={(event) => onChangeHandler({firstName: event.target.value})}></input>
            </div>

            <div className="ps-5 pe-2 ">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Bio</label>
                <textarea className="form-control w-75" id="exampleFormControlTextarea1"  placeholder={profile.bio} onChange={(event) => onChangeHandler({bio: event.target.value})}></textarea>
            </div>

            <div className="ps-5 pe-5 pt-2  ">
                <label htmlFor="exampleFormControlInput1" className="form-label">Location</label>
                <input type="email" className="form-control" id="exampleFormControlInput2"
                      placeholder={profile.location} onChange={(event) => onChangeHandler({location: event.target.value})}></input>
            </div>

            <div className="ps-5 pe-5 pt-2  ">
                <label htmlFor="exampleFormControlInput1" className="form-label">Website</label>
                <input type="email" className="form-control" id="exampleFormControlInput2"
                       placeholder={profile.website} onChange={(event) => onChangeHandler({website: event.target.value})}></input>



                <input className="ps-5 pe-5 mt-4 mb-4  " type="date" id="start" name="trip-start"
                       placeholder={profile.dateOfBirth} onChange={(event) => onChangeHandler({dateOfBirth: event.target.value})}
                       ></input>

            </div>

        </div>
);
}

export default EditProfile;