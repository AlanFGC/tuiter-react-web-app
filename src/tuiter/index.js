import Explore from "./explore";
import NavigationSidebar from "./navigation-sidebar";
import Home from "./home";
import WhoToFollowList from "./who-to-follow-list";
import {Routes, Route} from "react-router";
import {BrowserRouter} from "react-router-dom";


function Tuiter(){
    return(
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="home"/>
            </div>
            <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                 style={{"position": "relative"}}>
                <Routes>
                    <Route path={"/explore"} element={<Explore/>}/>
                    <Route path={"/home"} element={<Home/>}/>
                </Routes>
            </div>
        </div>
    );
}
export default Tuiter;