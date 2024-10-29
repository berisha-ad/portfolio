const menu = document.getElementById("hamburger");
const linkWrapper = document.getElementById("linkWrapper");

menu.addEventListener("click", () => {
    linkWrapper.classList.toggle("active");
    if (linkWrapper.classList.contains("active")) {
        menu.innerHTML = "close";
        menu.style.backgroundColor = "#41ffc9"
        menu.style.color = "#000"
    } else {
        menu.innerHTML = "menu";
        menu.style.backgroundColor = ""
        menu.style.color = ""
    }
})