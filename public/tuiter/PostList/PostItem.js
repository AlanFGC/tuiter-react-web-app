export default (item) => {
    return(`
    <li class="row g-0 mb-3 border-bottom border-1">
        <div class="col col-sm-2 overflow-hidden"> 
            <img src="../${item.usernameImage}" class="w-75 rounded-circle">
        </div>
        <div class="col col-sm-10">
            <div class="d-inline">
                <p class="d-inline fg-color-white fw-bold">${item.name}</p>
                <i class="fa fa-check-circle fst-normal"></i>
                <p class="d-inline" style="color: gray">@${item.username}</p>
                <p class="d-inline" style="color: gray">${item.time}</p><br>
                <p class="d-inline" >${item.text}</p>
            </div>
            <div class="border border-1 rounded-4 border-white overflow-hidden">
            <img src="../${item.image}" class="w-100 ">
            <p class="ps-2 fw-bold fg-color-white">${item.ArticleTitle}</p>
            <p class="ps-2">${item.imageText}</p>
            </div>
            <div class="w-100 d-inline-flex justify-content-around mb-2">
                <div>
                    <i class="fa fa-comment fst-normal d-inline"></i>
                    <p class="d-inline" >${item.comments}</p>
                </div>
                <div>
                    <i class="fa fa-share fst-normal d-inline"></i>
                    <p class="d-inline" >${item.shares}</p>
                </div>
                <div>
                    <i class="fa fa-heart fst-normal d-inline"></i>
                    <p class="d-inline">${item.likes}</p>
                </div>
                <div><i class="fa fa-download fst-normal d-inline"></i></div>
            </div>
        </div>
    </li>
    `);
}