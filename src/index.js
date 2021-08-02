import './style.css';
// import MenuPicture from './menuPicture.jpg';

const initializePage = (function() {
    console.log("I've been immediately invoked again!");

    const banner = document.getElementById('banner');
    const servicesContainer = document.getElementById('servicesContainer');
    const menuPicDiv = document.createElement('div');
    menuPicDiv.id = 'menuPicDiv';
    servicesContainer.appendChild(menuPicDiv);
    
    // const menuPic = new Image();
    // menuPic.src = MenuPicture;
    
    // menuPicDiv.style.background = menuPicture;
    
})();