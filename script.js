let header = document.querySelector(".header");

document.addEventListener("scroll", () => {
    window.scrollY > header.offsetHeight ? header.classList.add("active") : header.classList.remove("active");
});
