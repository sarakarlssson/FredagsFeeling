
//hämta startsidan
let nextPageButton = document.getElementById("textNextButton")

if (nextPageButton) {
    nextPageButton.addEventListener("click", () => {
        console.log("till nästa sida, HomePage")
        changePage()
    })
}

function changePage() {
    let containerFirstPage = document.getElementById("containerFirstPage")
    let containerHomePage = document.getElementById("containerHomePage")

    containerFirstPage.style.display = "none"
    containerHomePage.style.display = "flex"
}
