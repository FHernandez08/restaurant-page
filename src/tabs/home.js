const content = document.getElementById("#content");

function homePage() {
    const pageContent = document.createElement('div');
    pageContent.setAttribute('id', 'page-content');

    const container = document.createElement('div');
    container.classList.add('container');

    const homeTitle = document.createElement('h1');
    homeTitle.classList.add('title');
    homeTitle.textContent = "Fudd Burgers"

    const quote = document.createElement('p');
    quote.classList.add('quote');
    quote.textContent = "We followed our hearts and it led us to burgers!"

    const address = document.createElement('div');
    address.classList.add('address');

    const streetName = document.createElement('p');
    streetName.classList.add('street-name');
    streetName.textContent = '1111 Hollow Days Lane'

    const cityState = document.createElement('p');
    cityState.classList.add('city-state');
    cityState.textContent = 'Birmingham, Alabama';

    const zipCode = document.createElement('p');
    zipCode.classList.add('zipcode');
    zipCode.textContent = '35005';

    address.appendChild(streetName);
    address.appendChild(cityState);
    address.appendChild(zipCode);

    container.appendChild(homeTitle);
    container.appendChild(quote);
    container.appendChild(address);

    pageContent.appendChild(container);

    content.appendChild(pageContent);
}

export default homePage;

