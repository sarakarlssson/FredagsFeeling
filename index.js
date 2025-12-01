
//hämta startsidan
let nextPageButton = document.getElementById("textNextButton")

if (nextPageButton) {
    nextPageButton.addEventListener("click", () => {
        console.log("till nästa sida, HomePage")
        changePagetoHomePage()
    })
}

function changePagetoHomePage() {
    let containerFirstPage = document.getElementById("containerFirstPage")
    let containerHomePage = document.getElementById("containerHomePage")

    containerFirstPage.style.display = "none"
    containerHomePage.style.display = "flex"


    let cardsBox = document.querySelectorAll(".cardsBox")
    console.log(cardsBox)

    if (cardsBox) {
        console.log(cardsBox)
        for (let box of cardsBox) {
            console.log(box.id)
            box.addEventListener("click", () => {
                console.log("nu går vi in på never have i ever")
                console.log(box.id)

                containerHomePage.style.display = "none"
                changePage(box.id)
            })

        }
    }

}





function changePage(boxPage) {
    console.log(boxPage)
    let containerNeverHaveIEver = document.getElementById("containerNeverHaveIEver");
    containerNeverHaveIEver.style.display = "flex"


    let button = document.querySelector(".navBar .goBackButton");
    if (button) {
        button.addEventListener("click", () => {
            changePagetoHomePage()
        })
    }

}
