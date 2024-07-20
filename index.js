const navButton = document.querySelector("#nav__mobile__button");
if (navButton) {
  const navValue = document.querySelector("#nav");
  navButton.addEventListener("click", () => {
    if (navButton.getAttribute("data-show") === "hidden") {
      navButton.setAttribute("data-show", "show")
      navValue.style.height = "100%"
    } else {
      navButton.setAttribute("data-show", "hidden")
      navValue.style.height = "0px"
    }
  })
}