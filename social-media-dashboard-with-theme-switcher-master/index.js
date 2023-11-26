let btn = document.querySelector(".btn"); 
const body = document.querySelector("body");
const i = btn.querySelector(".fa-toggle-off");
const app = document.querySelectorAll(".app");
const react = document.querySelectorAll(".react");
const header = document.querySelector(".social");

btn.addEventListener("click", () => {
    body.classList.toggle("white"); 
    if (body.classList.contains("white")) {
        i.className = "fa-solid fa-toggle-on";
        app.forEach(e => {
            e.classList.add("appBG");
        });

        react.forEach(e => {
            e.classList.add("appBG");
        });

        header.classList.add("WhiteHeader");
        


    } else {
        i.className = "fa-solid fa-toggle-off";
        app.forEach(e => {
            e.classList.remove("appBG");
        });

        react.forEach(e => {
            e.classList.remove("appBG");
        });

        header.classList.remove("WhiteHeader");
    }
});
