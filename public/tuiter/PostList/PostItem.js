export default (item) => {
    return(`
    <li class="row g-0">
        <div class="col col-sm-2 overflow-hidden"> 
            <img src="../face.jpg" class="w-75 rounded-circle">
        </div>
        <div class="col col-sm-10">
            <p>NAME</p>
            <i class="fa -user-check"></i>
            <p>@handle</p>
            <p>- 23 h </p><br>
            <p>Some random text</p>
            <div>
            <img src="../banner.jpg" class="w-100">
            <h3>Some random title</h3>
            <p>More random Text that nonone really reads</p>
            </div>
            <div class="w-100 d-inline-flex">
                <div>
                    <i class="fa-regular fa-comment tuit-bottom-i"></i>
                    <p>22</p>
                </div>
                <div>
                    <i class="fa-regular fa-share-from-square tuit-bottom-i"></i>
                    <p>22</p>
                </div>
                <div>
                    <i class="fa-solid fa-heart tuit-bottom-selected"></i>
                    <p class="tuit-bottom-selected">22</p>
                </div>
                <div><i class="fa-solid fa-download tuit-bottom-i"></i></div>
            </div>
        </div>
    </li>
    `);
}