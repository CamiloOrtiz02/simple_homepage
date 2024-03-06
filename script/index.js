window.addEventListener(`DOMContentLoaded`, () => {
    document.querySelector(`#menu_icon`).addEventListener(`click`, () => {
        document.querySelector(`#navbar_container_links`).classList.add("active");
    });
    document.querySelector(`#menu_close`).addEventListener(`click`, () => {
        document.querySelector(`#navbar_container_links`).classList.remove("active");
    });
    const divSwitch = document.querySelector(`#switch`);
    divSwitch.addEventListener(`click`, () => {
        document.querySelector(`body`).classList.toggle('dark');
        document.querySelector(`#moon_light`).classList.toggle("hidden");
        document.querySelector(`#moon_dark`).classList.toggle("hidden");
        divSwitch.classList.toggle('light');
    });
});