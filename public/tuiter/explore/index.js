import ExploreComponent from "../ExploreComponent/ExploreComponent.js";
import NavigatorSideBar from "../NavigatorSideBar/NavigatorSideBar.js";
import PostSummaryList from "../PostSummaryList/PostSummaryList.js";
import WhoToFollowList from "../WhoToFollowList/WhoToFollowList.js";
function exploreComponent() {
    $('#wd-explore').append(`
  <div class="row mt-2">
   <div class="col-2 col-md-2 col-lg-1 col-xl-2">
    ${NavigatorSideBar("explore")}
   </div>
   <div class="col-10 col-lg-7 col-xl-6">
    ${ExploreComponent()}
    ${PostSummaryList()}
   </div>
   <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
    ${WhoToFollowList()}
   </div>
  </div>
   `);
}
$(exploreComponent);