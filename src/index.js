import './style.css';
import { initializeLandingPage } from './landingPage';
import { initializeContactPage } from './contactPage';
import { initializeMenuPage } from './menuPage';
initializeLandingPage();
constructNav();
// mark landing page as selected page
document.getElementById('home').classList.add('selectedNav');

const body = document.getElementById('content');
function loadHomePage() {
    body.innerHTML = '';
    initializeLandingPage();
    constructNav();
    document.getElementById('home').classList.add('selectedNav');
}
function loadContactPage() {
    body.innerHTML = '';
    initializeContactPage();
    constructNav();
    document.getElementById('contact').classList.add('selectedNav');
}
function loadMenuPage() {
    body.innerHTML = '';
    initializeMenuPage();
    constructNav();
    document.getElementById('menu').classList.add('selectedNav');
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
    contact.addEventListener('click', loadContactPage);
    menu.addEventListener('click', loadMenuPage);
    
}


