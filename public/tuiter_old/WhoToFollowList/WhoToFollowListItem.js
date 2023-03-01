const WhoToFollowListItem = (whoItem) => {
    return (`
    <li class="list-group-item d-flex justify-content-start align-content-center">
                <img class="object-fit-scale rounded" style="width: 20%; height: 20%" src="../face.jpg"/>
                <div class="d-inline ms-2" style="width: 60%">
                    <p class="fs-6 d-inline fw-bold" href="#">${whoItem.userName}</p>
                    <i class="fa fa-check-circle fs-6 d-inline tweeter-color"></i><br/>
                    <p class="fs-6">@${whoItem.handle}</p>
                </div>
                <div class="">
                    <button class="btn rounded-pill bg-black">Follow</button>
                </div>
            </li>
    `)
}
export default WhoToFollowListItem;