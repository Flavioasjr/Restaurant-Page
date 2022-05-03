export const menu = () => {
    const div = document.createElement('div');
    const divHeader = headerMenu();
    const divPizza = menuPizza();
    const divPasta = menuPasta();
    const divSalad = menuSalad();
    const divDrinks = menuDrinks();

    div.classList.add('menu');

    div.appendChild(divHeader);
    div.appendChild(divPizza);
    div.appendChild(divPasta);
    div.appendChild(divSalad);
    div.appendChild(divDrinks);

    return div;
}

function headerMenu() {
    const div2 = document.createElement('div');
    const childDiv = document.createElement('div');
    const childDiv2 = document.createElement('div');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    const buttonPizza = document.createElement('button');
    const buttonPasta = document.createElement('button');
    const buttonSalad = document.createElement('button');
    const buttonDrinks = document.createElement('button');

    div2.classList.add('header-menu');
    childDiv.classList.add('our-menu');
    childDiv2.classList.add('btns-menu');
    buttonPizza.classList.add('btn-pizza');
    buttonPasta.classList.add('btn-pasta');
    buttonSalad.classList.add('btn-salad');
    buttonDrinks.classList.add('btn-drinks');

    h2.textContent = 'OUR MENUS';
    p.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.';
    buttonPizza.textContent = 'Pizza';
    buttonPasta.textContent = 'Pasta';
    buttonSalad.textContent = 'Salad';
    buttonDrinks.textContent = 'Drinks';

    childDiv.appendChild(h2);
    childDiv.appendChild(p);
    childDiv2.appendChild(buttonPizza);
    childDiv2.appendChild(buttonPasta);
    childDiv2.appendChild(buttonSalad);
    childDiv2.appendChild(buttonDrinks);
    div2.appendChild(childDiv);
    div2.appendChild(childDiv2);

    buttonPizza.addEventListener('click',e => {
        e.preventDefault();
        const menuPizza = document.querySelector('.menu-pizza');
        const menuPasta = document.querySelector('.menu-pasta');
        const menuSalad = document.querySelector('.menu-salad');
        const menuDrinks = document.querySelector('.menu-drinks');
        const buttonPizza = document.querySelector('.btn-pizza');
        const buttonPasta = document.querySelector('.btn-pasta');
        const buttonSalad = document.querySelector('.btn-salad');
        const buttonDrinks = document.querySelector('.btn-drinks');

        menuPizza.style.cssText += 'display: block';
        menuPasta.style.cssText += 'display: none';
        menuSalad.style.cssText += 'display: none';
        menuDrinks.style.cssText += 'display: none';

        buttonPizza.style.cssText += 'box-shadow: 0 0 40px 40px #da9a4c inset, 0 0 0 0 #da9a4c; color: #fff;';
        buttonPasta.style.cssText += 'box-shadow: 0 0 40px 40px white inset, 0 0 0 0 white; color: #da9a4c;';
        buttonSalad.style.cssText += 'box-shadow: 0 0 40px 40px white inset, 0 0 0 0 white; color: #da9a4c;';
        buttonDrinks.style.cssText += 'box-shadow: 0 0 40px 40px white inset, 0 0 0 0 white; color: #da9a4c;';
    });

    buttonPasta.addEventListener('click',e => {
        e.preventDefault();
        const menuPizza = document.querySelector('.menu-pizza');
        const menuPasta = document.querySelector('.menu-pasta');
        const menuSalad = document.querySelector('.menu-salad');
        const menuDrinks = document.querySelector('.menu-drinks');
        const buttonPizza = document.querySelector('.btn-pizza');
        const buttonPasta = document.querySelector('.btn-pasta');
        const buttonSalad = document.querySelector('.btn-salad');
        const buttonDrinks = document.querySelector('.btn-drinks');


        menuPizza.style.cssText += 'display: none';
        menuPasta.style.cssText += 'display: block';
        menuSalad.style.cssText += 'display: none';
        menuDrinks.style.cssText += 'display: none';

        buttonPasta.style.cssText += 'box-shadow: 0 0 40px 40px #da9a4c inset, 0 0 0 0 #da9a4c; color: #fff;';
        buttonPizza.style.cssText += 'box-shadow: 0 0 40px 40px white inset, 0 0 0 0 white; color: #da9a4c;';
        buttonSalad.style.cssText += 'box-shadow: 0 0 40px 40px white inset, 0 0 0 0 white; color: #da9a4c;';
        buttonDrinks.style.cssText += 'box-shadow: 0 0 40px 40px white inset, 0 0 0 0 white; color: #da9a4c;';
    });

    buttonSalad.addEventListener('click',e => {
        e.preventDefault();
        const menuPizza = document.querySelector('.menu-pizza');
        const menuPasta = document.querySelector('.menu-pasta');
        const menuSalad = document.querySelector('.menu-salad');
        const menuDrinks = document.querySelector('.menu-drinks');
        const buttonPizza = document.querySelector('.btn-pizza');
        const buttonPasta = document.querySelector('.btn-pasta');
        const buttonSalad = document.querySelector('.btn-salad');
        const buttonDrinks = document.querySelector('.btn-drinks');


        menuPizza.style.cssText += 'display: none';
        menuPasta.style.cssText += 'display: none';
        menuSalad.style.cssText += 'display: block';
        menuDrinks.style.cssText += 'display: none';

        buttonSalad.style.cssText += 'box-shadow: 0 0 40px 40px #da9a4c inset, 0 0 0 0 #da9a4c; color: #fff;';
        buttonPizza.style.cssText += 'box-shadow: 0 0 40px 40px white inset, 0 0 0 0 white; color: #da9a4c;';
        buttonPasta.style.cssText += 'box-shadow: 0 0 40px 40px white inset, 0 0 0 0 white; color: #da9a4c;';
        buttonDrinks.style.cssText += 'box-shadow: 0 0 40px 40px white inset, 0 0 0 0 white; color: #da9a4c;';
    });

    buttonDrinks.addEventListener('click',e => {
        e.preventDefault();
        const menuPizza = document.querySelector('.menu-pizza');
        const menuPasta = document.querySelector('.menu-pasta');
        const menuSalad = document.querySelector('.menu-salad');
        const menuDrinks = document.querySelector('.menu-drinks');
        const buttonPizza = document.querySelector('.btn-pizza');
        const buttonPasta = document.querySelector('.btn-pasta');
        const buttonSalad = document.querySelector('.btn-salad');
        const buttonDrinks = document.querySelector('.btn-drinks');


        menuPizza.style.cssText += 'display: none';
        menuPasta.style.cssText += 'display: none';
        menuSalad.style.cssText += 'display: none';
        menuDrinks.style.cssText += 'display: block';

        buttonDrinks.style.cssText += 'box-shadow: 0 0 40px 40px #da9a4c inset, 0 0 0 0 #da9a4c; color: #fff;';
        buttonPizza.style.cssText += 'box-shadow: 0 0 40px 40px white inset, 0 0 0 0 white; color: #da9a4c;';
        buttonSalad.style.cssText += 'box-shadow: 0 0 40px 40px white inset, 0 0 0 0 white; color: #da9a4c;';
        buttonPasta.style.cssText += 'box-shadow: 0 0 40px 40px white inset, 0 0 0 0 white; color: #da9a4c;';
    });

    return div2;
}

function menuPizza() {
    const divPizza = document.createElement('div');
    const childDivPizza = document.createElement('div');
    const pMenuPizza = document.createElement('p');
    const pMenuPizza2 = document.createElement('p');
    const pMenuPizza3 = document.createElement('p');
    const h2MenuPizza = document.createElement('h2');
    const li1 = document.createElement('li');
    const li2 = document.createElement('li');
    const li3 = document.createElement('li');
    const li4 = document.createElement('li');
    const li5 = document.createElement('li');
    const li6 = document.createElement('li');
    const li7 = document.createElement('li');
    const li8 = document.createElement('li');
    const li9 = document.createElement('li');
    const li10 = document.createElement('li');
    const li11 = document.createElement('li');
    const li12 = document.createElement('li');

    divPizza.classList.add('menu-pizza');
    childDivPizza.classList.add('pizzas-list');
    

    h2MenuPizza.textContent = 'CLASSIC PIZZA';
    pMenuPizza.textContent = "Choose Small (14''/6 slices), Large (16'' /8 slices) or Sheet Pizza";
    pMenuPizza2.textContent = "plain cheese"
    pMenuPizza3.textContent = "8.95 / 12.95 / 23.95";

    li1.textContent = 'Chicken Wing';
    li2.textContent = 'Bacon & Tomato';
    li3.textContent = 'BBQ Rib';
    li4.textContent = 'Lasagna';
    li5.textContent = 'Philly Steak';
    li6.textContent = 'Hawaiian';


    li7.textContent = '$ 14.50 / 20.95';
    li8.textContent = '$ 14.50 / 20.95';
    li9.textContent = '$ 14.50 / 20.95';
    li10.textContent = '$ 8.95 / 12.99';
    li11.textContent = '$ 15.95 / 23.50';
    li12.textContent = '$ 11.75 / 16.40';

    childDivPizza.appendChild(li1);
    childDivPizza.appendChild(li7);
    childDivPizza.appendChild(li2);
    childDivPizza.appendChild(li8);
    childDivPizza.appendChild(li3);
    childDivPizza.appendChild(li9);
    childDivPizza.appendChild(li4);
    childDivPizza.appendChild(li10);
    childDivPizza.appendChild(li5);
    childDivPizza.appendChild(li11);
    childDivPizza.appendChild(li6);
    childDivPizza.appendChild(li12);

    divPizza.appendChild(h2MenuPizza);
    divPizza.appendChild(pMenuPizza);
    divPizza.appendChild(pMenuPizza2);
    divPizza.appendChild(pMenuPizza3);
    divPizza.appendChild(childDivPizza);

    return divPizza;
}

function menuPasta() {
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    const childDiv = document.createElement('div');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    const p4 = document.createElement('p');
    const p5 = document.createElement('p');
    const p6 = document.createElement('p');
    const li1 = document.createElement('li');
    const li2 = document.createElement('li');
    const li3 = document.createElement('li');
    const li4 = document.createElement('li');
    const li5 = document.createElement('li');
    const li6 = document.createElement('li');
    const li7 = document.createElement('li');
    const li8 = document.createElement('li');
    const li9 = document.createElement('li');
    const li10 = document.createElement('li');
    const li11 = document.createElement('li');
    const li12 = document.createElement('li');

    div.classList.add('menu-pasta');
    childDiv.classList.add('pastas-list');

    h2.textContent = 'PASTAS';

    li1.textContent = 'Meat Lasagna'
    p1.textContent = 'The classic! Sweet Italian sausage and ground beef mixed with fresh herbs, Garlic, ricotta and Parmesan, then baked with marinara and mozzarella.';
    li2.textContent = 'Tortellini al Forno'
    p2.textContent = 'Grilled fresh vegetables including summer squash, zucchini, broccoli and red bell peppers, with tri-colored tortellini tossed in a delicious tomato cream sauce and baked with mozzarella.';
    li3.textContent = 'Baked Penne'
    p3.textContent = 'Penne pasta tossed with a delicious blend of marinara, ricotta, Parmesan and fresh herbs then baked with fresh mozzarella on top.';
    li4.textContent = 'Grouper Tropical '
    p4.textContent = 'Fresh local grouper pan seared and topped with mango salsa over seafood risotto with sauteed vegetables';
    li5.textContent = 'Dolphin Picatta'
    p5.textContent = 'Fresh local mahi-mahi sauté ed with capers and garlic in a white wine butter sauce.';
    li6.textContent = 'Shrimp Alfredo '
    p6.textContent = 'Fresh local shrimp in our delicious creamy Parmesan cheese sauce, tossed with pasta.';

    li1.appendChild(p1);
    li2.appendChild(p2);
    li3.appendChild(p3);
    li4.appendChild(p4);
    li5.appendChild(p5);
    li6.appendChild(p6);

    li7.textContent = '$ 14.50 / 20.95';
    li8.textContent = '$ 14.50 / 20.95';
    li9.textContent = '$ 14.50 / 20.95';
    li10.textContent = '$ 8.95 / 12.99';
    li11.textContent = '$ 15.95 / 23.50';
    li12.textContent = '$ 11.75 / 16.40';

    childDiv.appendChild(li1);
    childDiv.appendChild(li7);
    childDiv.appendChild(li2);
    childDiv.appendChild(li8);
    childDiv.appendChild(li3);
    childDiv.appendChild(li9);
    childDiv.appendChild(li4);
    childDiv.appendChild(li10);
    childDiv.appendChild(li5);
    childDiv.appendChild(li11);
    childDiv.appendChild(li6);
    childDiv.appendChild(li12);

    div.appendChild(h2);
    div.appendChild(childDiv);

    return div;
}

function menuSalad() {
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    const childDiv = document.createElement('div');
    const ul = document.createElement('ul');
    const ulPrice = document.createElement('ul');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    const p4 = document.createElement('p');
    const li1 = document.createElement('li');
    const li2 = document.createElement('li');
    const li3 = document.createElement('li');
    const li4 = document.createElement('li');
    const li7 = document.createElement('li');
    const li8 = document.createElement('li');
    const li9 = document.createElement('li');
    const li10 = document.createElement('li');

    div.classList.add('menu-salad');
    childDiv.classList.add('pastas-list');
    ul.classList.add('flavors');
    ulPrice.classList.add('prices-pastas');

    h2.textContent = 'SALADS';

    li1.textContent = 'Caesar Salad'
    p1.textContent = 'Romaine Lettuce, Parmesan Romano Cheese, Homemade Garlic Croutons- Served with House Made Caesar Dressing';
    li2.textContent = 'Mixed Green Salad'
    p2.textContent = 'Mixed Greens, Tomato, Onions, Pepperoncini, Celery, Radish, Olives - Served with House Vinaigrette Dressing ';
    li3.textContent = "Carmine's Salad";
    p3.textContent = 'Mixed Greens, Tomato, Onions, Pepperoncini, Celery, Radish, Olives Topped w/ Diced Meats & Cheeses - Served with House Vinaigrette Dressing ';
    li4.textContent = 'Caprese Salad'
    p4.textContent = 'Ripened Tomatoes with Bocconcini, Red Onions, Cerignola & Kalamata Olives, Roasted Red Peppers, Fresh Basil, Olive Oil & Aged Red Wine Vinegar Salt, Pepper and Oregano';

    li1.appendChild(p1);
    li2.appendChild(p2);
    li3.appendChild(p3);
    li4.appendChild(p4);


    li7.textContent = '$ 29.95';
    li8.textContent = '$ 29.95';
    li9.textContent = '$ 33.95';
    li10.textContent = '$ 33.95';

    childDiv.appendChild(li1);
    childDiv.appendChild(li7);
    childDiv.appendChild(li2);
    childDiv.appendChild(li8);
    childDiv.appendChild(li3);
    childDiv.appendChild(li9);
    childDiv.appendChild(li4);
    childDiv.appendChild(li10);
    
    div.appendChild(h2);
    div.appendChild(childDiv);

    return div;
}

function menuDrinks() {
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    const h3Beer = document.createElement('h3');
    const h3Softs = document.createElement('h3');
    const childDiv = document.createElement('div');
    const childDiv2 = document.createElement('div');
    const ulBeer = document.createElement('ul');
    const ulSoft = document.createElement('ul');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    const p4 = document.createElement('p');
    const li1 = document.createElement('li');
    const li2 = document.createElement('li');
    const li3 = document.createElement('li');
    const li4 = document.createElement('li');
    const li5 = document.createElement('li');
    const li6 = document.createElement('li');
    const li7 = document.createElement('li');
    const li8 = document.createElement('li');
    const li9 = document.createElement('li');
    const li10 = document.createElement('li');
    const li11 = document.createElement('li');

    div.classList.add('menu-drinks');
    childDiv.classList.add('drinks-list');
    ulBeer.classList.add('beer');
    ulSoft.classList.add('soft');
    
    h2.textContent = 'DRINKS';

    h3Beer.textContent = 'BEER & CIDER';
    li1.textContent = 'Innis and Gunn Craft Lager • 5.25';
    li2.textContent = 'Innis and Gunn Rotational • 5.75';
    li3.textContent = 'Peroni Nastro Azzuro • 5.75';
    li4.textContent = 'Tennents • 4.50';

    h3Softs.textContent = 'SOFTS';
    li5.textContent = 'Coke/Diet Coke/Coke Zero • 2.75';
    li6.textContent = 'Irn Bru/Diet Irn Bru • 2.75';
    li7.textContent = 'Sprite/Fanta • 2.75';
    li8.textContent = 'Soda Folk Root Beer/Cream Soda • 3';
    li9.textContent = 'Appletiser • 2.80';
    li10.textContent = 'Ginger Beer • 2.75';
    li11.textContent = 'Water Still/Sparkling • 2.25/4.25';

    ulBeer.appendChild(h3Beer);
    ulBeer.appendChild(li1);
    ulBeer.appendChild(li2);
    ulBeer.appendChild(li3);
    ulBeer.appendChild(li4);

    ulSoft.appendChild(h3Softs);
    ulSoft.appendChild(li5);
    ulSoft.appendChild(li6);
    ulSoft.appendChild(li7);
    ulSoft.appendChild(li8);
    ulSoft.appendChild(li9);
    ulSoft.appendChild(li10);
    ulSoft.appendChild(li11);

    childDiv.appendChild(ulBeer);
    childDiv.appendChild(ulSoft);

    div.appendChild(h2);
    div.appendChild(childDiv);

    return div;
}