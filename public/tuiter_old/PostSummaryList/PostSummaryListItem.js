export default function PostSummaryListItem (item) {
    return(`
        <li class="list-group-item row d-flex justify-content-start align-content-center overflow-hidden">
                <div class="col col-9 ps-0 d-inline">
                    <p class="text-muted font-weight-normal fs-6">${item.topic}</p>
                    <h3 class="d-inline text-white fw-bold fs-6">${item.userName}</h3>
                    <i class="d-inline fa fa-check-circle col text-primary" ></i>
                    <p class="d-inline text-muted"> - ${item.time}</p>
                    <p>${item.title}</p>
                    <p class="text-muted fs-6"> ${item.tweets ? item.tweets : ""}</p>
                </div>
                <div class="col col-3 pe-1 text-center align-content-center">
                    <img class="object-fit-contain rounded mt-2" src="../explore/sample.png">
                </div>
            </li>
        `);
}