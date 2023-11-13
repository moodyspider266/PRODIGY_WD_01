const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add("show");
        }
        else {
            entry.target.classList.remove("show");
        }
    });
});

hiddenElements.forEach((e1) => observer.observe(e1));

const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector(".dropdown_menu");

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle("open");
    const isOpen = dropDownMenu.classList.contains("open");

    toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars" ;
}
