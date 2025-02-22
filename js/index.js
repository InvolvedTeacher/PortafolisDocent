function navigate(page) {
    let container = document.getElementById("content");

    fetch(page)
        .then(response => response.text())
        .then(html => {
            container.innerHTML = html;
            let sideboardActive = document.getElementById("sidebar-active")
            sideboardActive.checked = false;
        })
        .catch(error => {
            console.error("Error fetching page: ", error);
        }
        );
}

navigate("home");

document.querySelectorAll(".pageLink").forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();

        let page = this.getAttribute("href").substring(1);

        navigate(page);
    });
});