export function initializeLandingPage() {
    const body = document.getElementById('content');
    // create banner, footer, and services container divs
    const banner = document.createElement('div');
    banner.id = 'banner';
    const bannerTextContainer = document.createElement('p');
    banner.appendChild(bannerTextContainer);
    bannerTextContainer.textContent = 'Currying Favor';
    const servicesContainer = document.createElement('div');
    servicesContainer.id = 'servicesContainer';
    const footer = document.createElement('div');
    footer.id = 'footer';
    footer.textContent = `Delicious catering combinations, 
        perfect for any occasion, delivered right to your car.\r\n
        (555)555-5555\r\nCurryingFavorOrders@gmail.com`;
    body.appendChild(banner);
    body.appendChild(servicesContainer);
    body.appendChild(footer);
    // create services container elements
    const menuPicDiv = document.createElement('div');
    const leftServiceMargin = document.createElement('div');
    leftServiceMargin.id = 'leftServiceMargin';
    leftServiceMargin.innerText = `A celebration of regional Indian flavors 
    brought to life using fresh local produce, our progressive menu gives 
    a nod to the past while looking straight into the future.`;
    leftServiceMargin.style.flex = '1 1 auto';
    const rightServiceMargin = document.createElement('div');
    rightServiceMargin.id = 'rightServiceMargin';
    rightServiceMargin.innerText = `Indian cuisine dates back over 5000 
    years. Each region has its own traditions, religions and culture 
    that influence its food.Typically curries consisting of meat, spices 
    and vegetables, such as chickpeas, potatoes, spinach and beans, 
    are served as a main dish.`;
    rightServiceMargin.style.flex = '1 1 auto';
    menuPicDiv.id = 'menuPicDiv';
    servicesContainer.appendChild(leftServiceMargin);
    servicesContainer.appendChild(menuPicDiv);
    servicesContainer.appendChild(rightServiceMargin);
}