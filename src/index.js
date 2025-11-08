import loadAbout from "./modules/about.js";    
import loadhome from "./modules/home.js";
import loadmenu from "./modules/menu.js";

function initializePage(){
    loadhome();

    const aboutbutton=document.getElementById('about-btn');
    const homebutton=document.getElementById('home-btn');
    const menubutton=document.getElementById('menu-btn');
    
    homebutton.addEventListener('click',loadhome);
    aboutbutton.addEventListener('click',loadAbout);
    menubutton.addEventListener('click',loadmenu);

    console.log("Page Initialized");
}
document.addEventListener('DOMContentLoaded',initializePage);
