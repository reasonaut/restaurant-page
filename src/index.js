import './style.css';

const initializePage = (function() {
    const body = document.getElementById('content');
    const banner = document.getElementById('banner');
    const servicesContainer = document.getElementById('servicesContainer');
    // create services container elements
    const menuPicDiv = document.createElement('div');
    const leftServiceMargin = document.createElement('div');
    leftServiceMargin.id = 'leftServiceMargin';
    leftServiceMargin.innerText = 'test';
    leftServiceMargin.style.flex = '1 1 auto';
    const rightServiceMargin = document.createElement('div');
    rightServiceMargin.id = 'rightServiceMargin';
    rightServiceMargin.innerText = 'test2';
    rightServiceMargin.style.flex = '1 1 auto';
    menuPicDiv.id = 'menuPicDiv';
    servicesContainer.appendChild(leftServiceMargin);
    servicesContainer.appendChild(menuPicDiv);
    servicesContainer.appendChild(rightServiceMargin);   
})();