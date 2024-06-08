const content = document.getElementById("#content");

const drinks = [
    { name: "Soft Drink", price: 2.50 },
    { name: "Lemonade", price: 3.50 },
    { name: "Cold Beer", price: 5.50 }
]

const appetizers = [
    { name: "Nachos", price: 8.99 },
    { name: "Mozzarella Sticks", price: 6.99 },
    { name: "Mac and Cheese Balls", price: 10.99 },
    { name: "Fried Pickles", price: 9.99 }
]

const entrees = [
    { name: "The Fudd Burger", price: 14.99 },
    { name: "The American Burger", price: 17.99 },
    { name: "Golden Crisp Chicken Sandwich", price: 13.99 },
    { name: "Burger from the sea", price: 16.99 },
]

function menu() {
    const pageContent = document.createElement('div');
    pageContent.setAttribute('id', 'page-content');

    const menu = document.createElement('div');
    menu.classList.add('menu');

    // Drinks Section
    const drinksSection = document.createElement('div');
    drinksSection.classList.add('drink-section');

    const drinksHeader = document.createElement('h2');
    drinksHeader.classList.add('drinks-header');
    drinksHeader.textContent = 'Drinks';
    drinksSection.appendChild(drinksHeader);

    const drinksContainer = document.createElement('div');
    drinksContainer.classList.add('drinks-container');
    drinksSection.appendChild(drinksContainer);

    const drinksItems = document.createElement('div');
    drinksItems.classList.add('drinks-items');
    drinksContainer.appendChild(drinksItems);

    const drinksPrices = document.createElement('div');
    drinksPrices.classList.add('drinks-prices');
    drinksContainer.appendChild(drinksPrices);

    const drink = drinks.map((value) => {
        const itemNames = document.createElement('div');
        itemNames.textContent = value.name;
        drinksItems.appendChild(itemNames);

        const itemPrices = document.createElement('div');
        itemPrices.textContent = value.price;
        drinksPrices.appendChild(itemPrices);
    });

    // Appetizers Section
    const appSection = document.createElement('div');
    appSection.classList.add('app-section');

    const appHeader = document.createElement('h2');
    appHeader.classList.add('app-header');
    appHeader.textContent = 'Appetizers';
    appSection.appendChild(appHeader);

    const appContainer = document.createElement('div');
    appContainer.classList.add('app-container');
    appSection.appendChild(appContainer);

    const appItems = document.createElement('div');
    appItems.classList.add('app-items');
    appContainer.appendChild(appItems);

    const appPrices = document.createElement('div');
    appPrices.classList.add('app-prices');
    appContainer.appContainer(appPrices);

    const app = appetizers.map((value) => {
        const itemNames = document.createElement('div');
        itemNames.textContent = value.name;
        appItems.appendChild(itemNames);

        const itemPrices = document.createElement('div');
        itemPrices.textContent = value.price;
        appPrices.appendChild(itemPrices);
    });

    const entreesSection = document.createElement('div');
    entreesSection.classList.add('entrees-section');

    const entreesHeader = document.createElement('h2');
    entreesHeader.classList.add('entrees-header');
    entreesHeader.textContent = 'Entrees';
    entreesSection.appendChild(entreesHeader);

    const entreesContainer = document.createElement('div');
    entreesContainer.classList.add('entrees-container');
    entreesSection.appendChild(entreesContainer);

    const entreesItems = document.createElement('div');
    entreesItems.classList.add('entrees-items');
    entreesContainer.appendChild(entreesItems);

    const entreesPrices = document.createElement('div');
    entreesPrices.classList.add('entrees-prices');
    entreesContainer.appendChild(entreesPrices);

    const entree = entrees.map((value) => {
        const itemNames = document.createElement('div');
        itemNames.textContent = value.name;
        entreesItems.appendChild(itemNames);

        const itemPrices = document.createElement('div');
        itemPrices.textContent = value.price;
        entreesPrices.appendChild(itemPrices);
    })

    menu.appendChild(drinksSection);
    menu.appendChild(appSection);
    menu.appendChild(entreesSection);

    pageContent.appendChild(menu);

    content.appendChild(pageContent);
}

export default menu;