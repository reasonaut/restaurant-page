export function initializeMenuPage() {
    const body = document.getElementById('content');
    // create banner, footer, and services container divs
    const banner = document.createElement('div');
    banner.id = 'banner';
    const bannerTextContainer = document.createElement('p');
    banner.appendChild(bannerTextContainer);
    bannerTextContainer.textContent = 'Currying Favor';
    body.appendChild(banner);

    const menuContent = document.createElement('div');
    const header = document.createElement('p');
    header.innerText = 'Menu';
    menuContent.appendChild(header);
    body.appendChild(menuContent);

}