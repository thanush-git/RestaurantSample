console.log("Running live at port 8080");
import "./style.css"
import { contentHome } from "./home";
import { contentMenu } from "./menu";
import { contentAbout } from "./about";

const home = document.querySelector("#home");
const menu = document.querySelector("#menu");
const about = document.querySelector("#about");

contentHome();  //initially load home when page loads

home.addEventListener("click", () => {
    contentHome();
})


menu.addEventListener("click", () => {
    contentMenu();
})

about.addEventListener("click", () => {
    contentAbout();
})
