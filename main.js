import { activeRouter, navigate } from "./router/router.js";
import "./my-app.js"
import "./pages/about-page.js"
import "./pages/home-page.js"

activeRouter();

const btnHome = document.querySelector('.home');
const btnAbout = document.querySelector('.about');

btnHome.addEventListener('click', () => {
    navigate('/');
});

btnAbout.addEventListener('click', () => {
    navigate('/about');
});