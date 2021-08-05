export function initializeContactPage() {
    const body = document.getElementById('content');
    // create banner, footer, and services container divs
    const banner = document.createElement('div');
    banner.id = 'banner';
    const bannerTextContainer = document.createElement('p');
    banner.appendChild(bannerTextContainer);
    bannerTextContainer.textContent = 'Currying Favor';
    body.appendChild(banner);

    const contactContent = document.createElement('div');
    const header = document.createElement('p');
    header.style.textAlign = 'center';
    header.innerText = 'Contact Us';
    contactContent.appendChild(header);
    body.appendChild(contactContent);
    
} 