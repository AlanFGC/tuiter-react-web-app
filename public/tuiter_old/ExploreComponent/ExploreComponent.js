 export default () => {
    return(`
    <div class="d-flex align-items-center">
            <div class="input-group rounded-pill border overflow-hidden  me-5 tweet-background-gray">
                <button class="btn btn-outline-secondary border-0 tweet-background-gray" type="button">
                    <i class="fa fa-search"></i>
                </button>
                <input class="form-control border-0 me-3 tweet-background-gray" type="text" placeholder="Search twitter"
                       id="example-search-input">
            </div>
            <i class="fa fa-cog tweeter-color" style="font-size: 1.6em;"></i>
        </div>
        <div id="tabs" class="mt-2">
            <ul class="nav nav-tabs">
                <li class="nav-item tweeter-border">
                    <a class="nav-link active  " aria-current="page" href="#">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " href="#">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " href="#">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " href="#">Sports</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " href="#">Entertainment</a>
                </li>
            </ul>
        </div>
        <div id="featured-article" class="position-relative">
            <img class="w-100" src="sample2.jpg">
            <div class="position-absolute ms-1 bottom-0">
                <p class="display-6 fw-bold text-white ">SpaceX's starship</p>
            </div>
        </div>
    `);
 }