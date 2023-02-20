export default function PostSummaryListItem (item) {
    return(`
        <li class="list-group-item d-flex justify-content-start align-content-center">
                <div class="d-inline" style="width: 80%">
                    <p class="text-muted font-weight-normal fs-6">${item.topic}</p>
                    <h3 class="d-inline text-black fw-bold fs-6">${item.userName}</h3>
                    <i class="d-inline fa fa-check-circle col text-primary" ></i>
                    <p class="d-inline text-muted"> - ${item.time}</p>
                    <p>${item.title}</p>
                    <p class="text-muted fs-6"> ${item.tweets ? item.tweets : ""}</p>
                </div>
                <div class="text-center align-content-center" style="width: 20%">
                    <img class="object-fit-contain rounded mt-2" src="../explore/sample.png">
                </div>
            </li>
        `);
}