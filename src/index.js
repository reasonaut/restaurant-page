import './style.css';
import { initializeLandingPage } from './landingPage';
import { initializeContactPage } from './contactPage';
initializeLandingPage();
constructNav();

const body = document.getElementById('content');
function loadHomePage() {
    body.innerHTML = '';
    initializeLandingPage();
    constructNav();
}
function loadMenuPage() {
    body.innerHTML = '';
    initializeContactPage();
    constructNav();
}

function constructNav() {
    const banner = document.getElementById('banner');
    // add home, menu, and contact tabs to banner
    const home = document.createElement('span');
    home.id = 'home';
    home.innerText = 'Home';
    const menu = document.createElement('span');
    menu.id = 'menu';
    menu.innerText = 'Menu';
    const contact = document.createElement('span');
    contact.id = 'contact';
    contact.innerText = 'Contact';
    // prepend nav buttons container to banner
    const navContainer = document.createElement('div');
    navContainer.append(home, menu, contact);
    navContainer.id = 'navContainer';
    banner.prepend(navContainer);
    
    home.addEventListener('click', loadHomePage);
    contact.addEventListener('click', loadMenuPage);
    // contact.addEventListener('click', loadContactPage);
    
}


