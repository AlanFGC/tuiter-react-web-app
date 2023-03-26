import TuitsList from "../tuits/tuits-item-list";
import WhatsHappening from "./whats-happening";


function HomeComponent(){
    return(
        <div>
            <h4>Home</h4>
            <WhatsHappening/>
            <TuitsList/>
        </div>
    );
}

export default HomeComponent;