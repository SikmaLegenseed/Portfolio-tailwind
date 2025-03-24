document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById('menu-button');
    const menu = document.getElementById('menu');

    menuButton.addEventListener('click', () => {
    menu.classList.toggle("hidden");


    if(!menu.classList.contains('hidden')) {
        menu.classList.remove("opacity-0", "scale-95", "-translate-y-5");
        menu.classList.add("opacity-100", "scale-100", "translate-y-0");


        menuButton.innerHTML = "&#10005;";
        menuButton.classList.add("animate-bounce");
    } else {
        menu.classList.remove("opacity-100", "scale-100", "translate-y-0");
        menu.classList.add("opacity-0", "scale-95", "-translate-y-5");

        menuButton.innerHTML = "&#9776;";
        menuButton.classList.remove("animate-bounce");
    }
});
});