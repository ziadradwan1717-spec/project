// Navbar background on scroll
window.addEventListener("scroll", () => {
    let header = document.querySelector("header");

    if(window.scrollY > 50){
        header.style.background = "#323232";
    } else {
        header.style.background = "rgba(50,50,50,0.7)";
    }
});