const ProfileComponent = () => {
    return(
        <div className="w-100 shadow">
            <div className="w-100 position-relative h-auto pb-5">
                <div className="bg-white d-flex flex-nowrap">
                    <i className="text-black bi bi-arrow-left h4"></i>
                    <div className="ms-5">
                        <h4 className="m-0">User name</h4>
                        <span className="small mt-2 text-muted">1231 tweets</span>
                    </div>
                </div>
                <img src={`/images/starship.webp`} className="w-100"/>


                <img src={`/images/nasa.jpeg`} className="w-25 rounded-circle position-absolute  start-0 ms-5 " style={{bottom: -40}}/>
                <button className="btn float-end mt-2 me-5 border">Edit profile</button>
            </div>
            <div className="bg-white pt-5  d-block">
                <div className="ms-5 mb-0">
                    <h4 className="m-0">User name</h4>
                    <span className="small text-muted mb-0">1231 tweets</span>
                </div>
                <br/>
                <p className="small w-100 mt-0 ps-5 pe-5">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>

                <div className="w-100 d-inline-flex justify-content-around mb-2 ps-5 pe-5 text-muted small">
                    <div>
                        <i className="bi bi-map fst-normal d-inline"></i>
                        <p className="d-inline">dsadas</p>
                    </div>
                    <div>
                        <i className="bi bi-balloon fst-normal d-inline"></i>
                        <p className="d-inline">dsad</p>
                    </div>
                    <div>
                        <i className="bi bi-balloon fst-normal bi-calendar"></i>
                        <p className="d-inline">Born who knows</p>
                    </div>
                </div>



            </div>
        </div>
    );
}


export default  ProfileComponent;