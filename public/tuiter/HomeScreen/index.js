
import NavigatorSideBar from "../NavigatorSideBar/NavigatorSideBar.js";
import PostSummaryList from "../PostSummaryList/PostSummaryList.js";
import PostList from "../PostList/PostList.js";
function HomePage() {
    $('#wd-home').append(`
  <div class="row mt-2">
   <div class="col-2 col-md-2 col-lg-1 col-xl-2">
    ${NavigatorSideBar("home")}
   </div>
   <div class="col-10 col-lg-7 col-xl-6">
    ${PostList()}  
   </div>
   <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
    ${PostSummaryList()}
   </div>
  </div>
   `);
}
$(HomePage);