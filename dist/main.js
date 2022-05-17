/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "header": () => (/* binding */ header)
/* harmony export */ });
var header = function header() {
  var div = document.createElement('div');
  var h3 = document.createElement('h3');
  var ul = document.createElement('ul');
  var li1 = document.createElement('li');
  var li2 = document.createElement('li');
  var li3 = document.createElement('li');
  var a1 = document.createElement('a');
  var a2 = document.createElement('a');
  var a3 = document.createElement('a');
  var button = document.createElement('button');
  div.classList.add('header');
  h3.classList.add('slogan');
  ul.classList.add('guides');
  button.classList.add('btn-contact');
  h3.textContent = 'Italian';
  a1.textContent = 'Home';
  a1.href = '#';
  a2.textContent = 'Locations';
  a2.href = '#';
  a3.textContent = 'Menu';
  a3.href = '#';
  button.textContent = 'Contact us';
  li1.appendChild(a1);
  li2.appendChild(a2);
  li3.appendChild(a3);
  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);
  div.appendChild(h3);
  div.appendChild(ul);
  div.appendChild(button);
  a3.addEventListener('click', function (e) {
    e.preventDefault();
    var home = document.querySelector('.home');
    var menu = document.querySelector('.menu');
    var locations = document.querySelector('.locations');
    home.style.cssText += 'display: none;';
    menu.style.cssText += 'display: block;';
    locations.style.cssText += 'display: none;';
  });
  a1.addEventListener('click', function (e) {
    e.preventDefault();
    var home = document.querySelector('.home');
    var menu = document.querySelector('.menu');
    var locations = document.querySelector('.locations');
    home.style.cssText += 'display: grid;';
    menu.style.cssText += 'display: none;';
    locations.style.cssText += 'display: none;';
  });
  a2.addEventListener('click', function (e) {
    e.preventDefault();
    var home = document.querySelector('.home');
    var menu = document.querySelector('.menu');
    var locations = document.querySelector('.locations');
    home.style.cssText += 'display: none;';
    menu.style.cssText += 'display: none;';
    locations.style.cssText += 'display: block;';
  });
  return div;
};

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "home": () => (/* binding */ home)
/* harmony export */ });
/* harmony import */ var _img_pizza_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/pizza.jpg */ "./src/img/pizza.jpg");

var home = function home() {
  var div = document.createElement('div');
  var childDiv = document.createElement('div');
  var childDiv2 = document.createElement('div');
  var h1 = document.createElement('h1');
  var p = document.createElement('p');
  var img = document.createElement('img');
  var button = document.createElement('button');
  div.classList.add('home');
  img.classList.add('img-home');
  button.classList.add('btn-order');
  h1.textContent = 'GOOD FOOD BRINGS GENUINE HAPINESS';
  p.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil dicta impedit dolorem aspernatur at reprehenderit';
  button.textContent = 'Place an order';
  img.src = _img_pizza_jpg__WEBPACK_IMPORTED_MODULE_0__;
  childDiv.appendChild(h1);
  childDiv.appendChild(p);
  childDiv.appendChild(button);
  childDiv2.appendChild(img);
  div.appendChild(childDiv);
  div.appendChild(childDiv2);
  return div;
};

/***/ }),

/***/ "./src/locations.js":
/*!**************************!*\
  !*** ./src/locations.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "locations": () => (/* binding */ locations)
/* harmony export */ });
var locations = function locations() {
  var div = document.createElement('div');
  var subDiv = document.createElement('div');
  var buttonOrder = document.createElement('button');
  var buttonMenu = document.createElement('button');
  var childDiv = document.createElement('div');
  var childDiv2 = document.createElement('div');
  var h3Contact = document.createElement('h3');
  var h3Address = document.createElement('h3');
  var h3Hours = document.createElement('h3');
  var p1 = document.createElement('p');
  var p2 = document.createElement('p');
  var p3 = document.createElement('p');
  var p4 = document.createElement('p');
  var p5 = document.createElement('p');
  var p6 = document.createElement('p');
  var p7 = document.createElement('p');
  var p8 = document.createElement('p');
  var p9 = document.createElement('p');
  var p10 = document.createElement('p');
  var p11 = document.createElement('p');
  var p12 = document.createElement('p');
  var p13 = document.createElement('p');
  var p14 = document.createElement('p');
  var p15 = document.createElement('p');
  var p16 = document.createElement('p');
  var p17 = document.createElement('p');
  var ul = document.createElement('ul');
  var li1 = document.createElement('li');
  var li2 = document.createElement('li');
  var li3 = document.createElement('li');
  var li4 = document.createElement('li');
  var li5 = document.createElement('li');
  var li6 = document.createElement('li');
  var li7 = document.createElement('li');
  div.classList.add('locations');
  subDiv.classList.add('contact-hours');
  buttonOrder.classList.add('btn-order-online');
  buttonMenu.classList.add('btn-menu');
  ul.classList.add('hours-list');
  li1.classList.add('row');
  li2.classList.add('row');
  li3.classList.add('row');
  li4.classList.add('row');
  li5.classList.add('row');
  li6.classList.add('row');
  li7.classList.add('row');
  buttonOrder.textContent = 'ORDER ONLINE';
  buttonMenu.textContent = 'VIEW THE MENU';
  h3Contact.textContent = 'Contact';
  p1.innerHTML = "Telephone <br> xxx.xxx.xxxx";
  p2.innerHTML = "Take Out <br> yyy.yyy.yyyy";
  h3Address.textContent = 'Address';
  p3.innerHTML = "2409 Raintree Boulevard <br> Kokomo, IN 46901";
  h3Hours.textContent = 'Hours';
  p4.textContent = 'Monday';
  p5.textContent = '11:30 AM - 10:30 PM';
  li1.appendChild(p4);
  li1.appendChild(p5);
  p6.textContent = 'Tuesday';
  p7.textContent = '11:30 AM - 10:30 PM';
  li2.appendChild(p6);
  li2.appendChild(p7);
  p8.textContent = 'Wednesday';
  p9.textContent = '11:30 AM - 10:30 PM';
  li3.appendChild(p8);
  li3.appendChild(p9);
  p10.textContent = 'Thursday';
  p11.textContent = '11:30 AM - 10:30 PM';
  li4.appendChild(p10);
  li4.appendChild(p11);
  p12.textContent = 'Friday';
  p13.textContent = '11:30 AM - 12:00 PM';
  li5.appendChild(p12);
  li5.appendChild(p13);
  p14.textContent = 'Saturday';
  p15.textContent = '11:30 AM - 12:00 PM';
  li6.appendChild(p14);
  li6.appendChild(p15);
  p16.textContent = 'Monday';
  p17.textContent = '11:30 AM - 10:30 PM';
  li7.appendChild(p16);
  li7.appendChild(p17);
  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);
  ul.appendChild(li4);
  ul.appendChild(li5);
  ul.appendChild(li6);
  ul.appendChild(li7);
  childDiv.appendChild(h3Contact);
  childDiv.appendChild(p1);
  childDiv.appendChild(p2);
  childDiv.appendChild(h3Address);
  childDiv.appendChild(p3);
  childDiv2.appendChild(h3Hours);
  childDiv2.appendChild(ul);
  subDiv.appendChild(childDiv);
  subDiv.appendChild(childDiv2);
  div.appendChild(buttonOrder);
  div.appendChild(buttonMenu);
  div.appendChild(subDiv);
  return div;
};

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menu": () => (/* binding */ menu)
/* harmony export */ });
var menu = function menu() {
  var div = document.createElement('div');
  var divHeader = headerMenu();
  var divPizza = menuPizza();
  var divPasta = menuPasta();
  var divSalad = menuSalad();
  var divDrinks = menuDrinks();
  div.classList.add('menu');
  div.appendChild(divHeader);
  div.appendChild(divPizza);
  div.appendChild(divPasta);
  div.appendChild(divSalad);
  div.appendChild(divDrinks);
  return div;
};

function headerMenu() {
  var div2 = document.createElement('div');
  var childDiv = document.createElement('div');
  var childDiv2 = document.createElement('div');
  var h2 = document.createElement('h2');
  var p = document.createElement('p');
  var buttonPizza = document.createElement('button');
  var buttonPasta = document.createElement('button');
  var buttonSalad = document.createElement('button');
  var buttonDrinks = document.createElement('button');
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
  buttonPizza.addEventListener('click', function (e) {
    e.preventDefault();
    var menuPizza = document.querySelector('.menu-pizza');
    var menuPasta = document.querySelector('.menu-pasta');
    var menuSalad = document.querySelector('.menu-salad');
    var menuDrinks = document.querySelector('.menu-drinks');
    var buttonPizza = document.querySelector('.btn-pizza');
    var buttonPasta = document.querySelector('.btn-pasta');
    var buttonSalad = document.querySelector('.btn-salad');
    var buttonDrinks = document.querySelector('.btn-drinks');
    menuPizza.style.cssText += 'display: block';
    menuPasta.style.cssText += 'display: none';
    menuSalad.style.cssText += 'display: none';
    menuDrinks.style.cssText += 'display: none';
    buttonPizza.style.cssText += 'box-shadow: 0 0 40px 40px #da9a4c inset, 0 0 0 0 #da9a4c; color: #fff;';
    buttonPasta.style.cssText += 'box-shadow: 0 0 40px 40px white inset, 0 0 0 0 white; color: #da9a4c;';
    buttonSalad.style.cssText += 'box-shadow: 0 0 40px 40px white inset, 0 0 0 0 white; color: #da9a4c;';
    buttonDrinks.style.cssText += 'box-shadow: 0 0 40px 40px white inset, 0 0 0 0 white; color: #da9a4c;';
  });
  buttonPasta.addEventListener('click', function (e) {
    e.preventDefault();
    var menuPizza = document.querySelector('.menu-pizza');
    var menuPasta = document.querySelector('.menu-pasta');
    var menuSalad = document.querySelector('.menu-salad');
    var menuDrinks = document.querySelector('.menu-drinks');
    var buttonPizza = document.querySelector('.btn-pizza');
    var buttonPasta = document.querySelector('.btn-pasta');
    var buttonSalad = document.querySelector('.btn-salad');
    var buttonDrinks = document.querySelector('.btn-drinks');
    menuPizza.style.cssText += 'display: none';
    menuPasta.style.cssText += 'display: block';
    menuSalad.style.cssText += 'display: none';
    menuDrinks.style.cssText += 'display: none';
    buttonPasta.style.cssText += 'box-shadow: 0 0 40px 40px #da9a4c inset, 0 0 0 0 #da9a4c; color: #fff;';
    buttonPizza.style.cssText += 'box-shadow: 0 0 40px 40px white inset, 0 0 0 0 white; color: #da9a4c;';
    buttonSalad.style.cssText += 'box-shadow: 0 0 40px 40px white inset, 0 0 0 0 white; color: #da9a4c;';
    buttonDrinks.style.cssText += 'box-shadow: 0 0 40px 40px white inset, 0 0 0 0 white; color: #da9a4c;';
  });
  buttonSalad.addEventListener('click', function (e) {
    e.preventDefault();
    var menuPizza = document.querySelector('.menu-pizza');
    var menuPasta = document.querySelector('.menu-pasta');
    var menuSalad = document.querySelector('.menu-salad');
    var menuDrinks = document.querySelector('.menu-drinks');
    var buttonPizza = document.querySelector('.btn-pizza');
    var buttonPasta = document.querySelector('.btn-pasta');
    var buttonSalad = document.querySelector('.btn-salad');
    var buttonDrinks = document.querySelector('.btn-drinks');
    menuPizza.style.cssText += 'display: none';
    menuPasta.style.cssText += 'display: none';
    menuSalad.style.cssText += 'display: block';
    menuDrinks.style.cssText += 'display: none';
    buttonSalad.style.cssText += 'box-shadow: 0 0 40px 40px #da9a4c inset, 0 0 0 0 #da9a4c; color: #fff;';
    buttonPizza.style.cssText += 'box-shadow: 0 0 40px 40px white inset, 0 0 0 0 white; color: #da9a4c;';
    buttonPasta.style.cssText += 'box-shadow: 0 0 40px 40px white inset, 0 0 0 0 white; color: #da9a4c;';
    buttonDrinks.style.cssText += 'box-shadow: 0 0 40px 40px white inset, 0 0 0 0 white; color: #da9a4c;';
  });
  buttonDrinks.addEventListener('click', function (e) {
    e.preventDefault();
    var menuPizza = document.querySelector('.menu-pizza');
    var menuPasta = document.querySelector('.menu-pasta');
    var menuSalad = document.querySelector('.menu-salad');
    var menuDrinks = document.querySelector('.menu-drinks');
    var buttonPizza = document.querySelector('.btn-pizza');
    var buttonPasta = document.querySelector('.btn-pasta');
    var buttonSalad = document.querySelector('.btn-salad');
    var buttonDrinks = document.querySelector('.btn-drinks');
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
  var divPizza = document.createElement('div');
  var childDivPizza = document.createElement('div');
  var pMenuPizza = document.createElement('p');
  var pMenuPizza2 = document.createElement('p');
  var pMenuPizza3 = document.createElement('p');
  var h2MenuPizza = document.createElement('h2');
  var li1 = document.createElement('li');
  var li2 = document.createElement('li');
  var li3 = document.createElement('li');
  var li4 = document.createElement('li');
  var li5 = document.createElement('li');
  var li6 = document.createElement('li');
  var li7 = document.createElement('li');
  var li8 = document.createElement('li');
  var li9 = document.createElement('li');
  var li10 = document.createElement('li');
  var li11 = document.createElement('li');
  var li12 = document.createElement('li');
  divPizza.classList.add('menu-pizza');
  childDivPizza.classList.add('pizzas-list');
  h2MenuPizza.textContent = 'CLASSIC PIZZA';
  pMenuPizza.textContent = "Choose Small (14''/6 slices), Large (16'' /8 slices) or Sheet Pizza";
  pMenuPizza2.textContent = "plain cheese";
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
  var div = document.createElement('div');
  var h2 = document.createElement('h2');
  var childDiv = document.createElement('div');
  var p1 = document.createElement('p');
  var p2 = document.createElement('p');
  var p3 = document.createElement('p');
  var p4 = document.createElement('p');
  var p5 = document.createElement('p');
  var p6 = document.createElement('p');
  var li1 = document.createElement('li');
  var li2 = document.createElement('li');
  var li3 = document.createElement('li');
  var li4 = document.createElement('li');
  var li5 = document.createElement('li');
  var li6 = document.createElement('li');
  var li7 = document.createElement('li');
  var li8 = document.createElement('li');
  var li9 = document.createElement('li');
  var li10 = document.createElement('li');
  var li11 = document.createElement('li');
  var li12 = document.createElement('li');
  div.classList.add('menu-pasta');
  childDiv.classList.add('pastas-list');
  h2.textContent = 'PASTAS';
  li1.textContent = 'Meat Lasagna';
  p1.textContent = 'The classic! Sweet Italian sausage and ground beef mixed with fresh herbs, Garlic, ricotta and Parmesan, then baked with marinara and mozzarella.';
  li2.textContent = 'Tortellini al Forno';
  p2.textContent = 'Grilled fresh vegetables including summer squash, zucchini, broccoli and red bell peppers, with tri-colored tortellini tossed in a delicious tomato cream sauce and baked with mozzarella.';
  li3.textContent = 'Baked Penne';
  p3.textContent = 'Penne pasta tossed with a delicious blend of marinara, ricotta, Parmesan and fresh herbs then baked with fresh mozzarella on top.';
  li4.textContent = 'Grouper Tropical ';
  p4.textContent = 'Fresh local grouper pan seared and topped with mango salsa over seafood risotto with sauteed vegetables';
  li5.textContent = 'Dolphin Picatta';
  p5.textContent = 'Fresh local mahi-mahi sauté ed with capers and garlic in a white wine butter sauce.';
  li6.textContent = 'Shrimp Alfredo ';
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
  var div = document.createElement('div');
  var h2 = document.createElement('h2');
  var childDiv = document.createElement('div');
  var ul = document.createElement('ul');
  var ulPrice = document.createElement('ul');
  var p1 = document.createElement('p');
  var p2 = document.createElement('p');
  var p3 = document.createElement('p');
  var p4 = document.createElement('p');
  var li1 = document.createElement('li');
  var li2 = document.createElement('li');
  var li3 = document.createElement('li');
  var li4 = document.createElement('li');
  var li7 = document.createElement('li');
  var li8 = document.createElement('li');
  var li9 = document.createElement('li');
  var li10 = document.createElement('li');
  div.classList.add('menu-salad');
  childDiv.classList.add('pastas-list');
  ul.classList.add('flavors');
  ulPrice.classList.add('prices-pastas');
  h2.textContent = 'SALADS';
  li1.textContent = 'Caesar Salad';
  p1.textContent = 'Romaine Lettuce, Parmesan Romano Cheese, Homemade Garlic Croutons- Served with House Made Caesar Dressing';
  li2.textContent = 'Mixed Green Salad';
  p2.textContent = 'Mixed Greens, Tomato, Onions, Pepperoncini, Celery, Radish, Olives - Served with House Vinaigrette Dressing ';
  li3.textContent = "Carmine's Salad";
  p3.textContent = 'Mixed Greens, Tomato, Onions, Pepperoncini, Celery, Radish, Olives Topped w/ Diced Meats & Cheeses - Served with House Vinaigrette Dressing ';
  li4.textContent = 'Caprese Salad';
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
  var div = document.createElement('div');
  var h2 = document.createElement('h2');
  var h3Beer = document.createElement('h3');
  var h3Softs = document.createElement('h3');
  var childDiv = document.createElement('div');
  var childDiv2 = document.createElement('div');
  var ulBeer = document.createElement('ul');
  var ulSoft = document.createElement('ul');
  var p1 = document.createElement('p');
  var p2 = document.createElement('p');
  var p3 = document.createElement('p');
  var p4 = document.createElement('p');
  var li1 = document.createElement('li');
  var li2 = document.createElement('li');
  var li3 = document.createElement('li');
  var li4 = document.createElement('li');
  var li5 = document.createElement('li');
  var li6 = document.createElement('li');
  var li7 = document.createElement('li');
  var li8 = document.createElement('li');
  var li9 = document.createElement('li');
  var li10 = document.createElement('li');
  var li11 = document.createElement('li');
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

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/PlayfairDisplaySC-Bold.ttf */ "./src/fonts/PlayfairDisplaySC-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'My font';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    font-weight: 700;\n    font-style: normal;\n}\n\nbody {\n    margin: 0;\n    font-family: sans-serif;\n}\n\nul {\n    padding: 0;\n}\n\n.content {\n    color: #2f2d2c;\n}\n\n.header {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    box-shadow: 1px 1px 17px 2px #da9a4c;\n    color: white;\n    background: #141414d4;\n}\n\n.slogan {\n    font-family: 'My font';\n}\n\n.guides {\n    gap: 60px;\n    display: flex;\n    list-style-type: none;\n}\n\n.guides li a {\n    position: relative;\n}\n\n.guides li a::after {\n    content: '';\n    position: absolute;\n    bottom: -5px;\n    left: 2%;\n    width: 0;\n    height: 0.2rem;\n    background: #bd1111;\n    transition: all 300ms ease-in-out;\n}\n\n.guides li a:hover::after {\n    width: 96%;\n}\n\n.btn-contact, .btn-order, .btn-pizza,\n.btn-pasta, .btn-salad, .btn-drinks,\n.btn-order-online, .btn-menu {\n    font-weight: 600;\n    border: 2px solid #da9a4c;\n    color: #fff;\n    box-shadow: 0 0 40px 40px #da9a4c inset, 0 0 0 0 #da9a4c;\n    -webkit-transition: all 150ms ease-in-out;\n    transition: all 150ms ease-in-out;\n    padding-left: 30px;\n    padding-right: 30px;\n    width: 160px;\n    border-radius: 30px;\n    height: 35px;\n    cursor: pointer;\n}\n\n.btn-contact, .btn-order-online, .btn-order {\n    border: 2px solid #bd1111;\n    color: white;\n    box-shadow: 0 0 40px 40px #bd1111 inset, 0 0 0 0 #bd1111;\n}\n\n.btn-order-online, .btn-menu {\n    width: 200px;\n    margin: 20px;\n}\n\n.btn-menu {\n    box-shadow: 0 0 40px 40px white inset, 0 0 0 0 white;\n    color: #bd1111;\n    border: 2px solid #bd1111;\n}\n\n.btn-pasta, .btn-salad, .btn-drinks {\n    width: 120px;\n    box-shadow: 0 0 40px 40px white inset, 0 0 0 0 white;\n    color: #da9a4c;\n} \n\n.btn-pizza {\n    width: 120px;\n}\n\na {\n    text-decoration: none;\n    color: white;\n}\n\n.home {\n    display: grid;\n    grid-template-columns: 6fr 4fr;\n    align-items: center;\n    gap: 50px;\n    padding-left: 50px;\n    padding-right: 50px;\n    height: 90vh;\n}\n\n.img-home {\n    height: 350px;\n    width: 350px;\n    border-radius: 400px;\n}\n\n.sub-img-home {\n    height: 150px;\n    width: 150px;\n    border-radius: 150px;\n    position: absolute;\n    right: 10px;\n    top: 450px;\n}\n\n.salad-img-home {\n    height: 100px;\n    width: 100px;\n    border-radius: 150px;\n    position: absolute;\n    right: 450px;\n    top: 350px;\n}\n\n.menu {\n    display: none;\n    min-height: 90vh;\n    padding: 0 50px 0 50px;\n}\n\n.header-menu {\n    grid-template-columns: 1fr 3fr;\n    display: grid;\n    gap: 40px;\n    align-items: center;\n    border-bottom: dashed #9d0a0a;\n}\n\n.btns-menu {\n    display: flex;\n    justify-content: center;\n    gap: 10px;\n}\n\n.menu-pizza {\n    text-align: center;\n}\n\n.pizzas-list {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 10px;\n}\n\n.pizzas-list li:nth-child(odd) {\n    font-weight: 900;\n}\n\n\nli {\n    list-style-type: none;\n}\n\n.flavors {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    font-weight: 600;\n    font-size: 1.2rem;\n}\n\n.prices {\n    font-size: 1.2rem;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.menu-pasta, .menu-salad {\n    display: none;\n}\n\n.menu-pasta > h2, .menu-salad > h2 {\n    text-align: center;\n}\n\n.pastas-list {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 10px;\n    justify-items: center;\n}\n\n.pastas-list li:nth-child(odd) {\n    font-weight: 900;\n}\n\n.pastas-list > li > p {\n    font-weight: 100;\n    font-size: 0.8rem;\n}\n\n.prices-pastas {\n    font-size: 1.2rem;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    align-items: center;\n    justify-content: space-around;\n}\n\n.menu-drinks {\n    display: none;\n    text-align: center;\n}\n\n.drinks-list {\n    display: flex;\n    align-items: flex-start;\n    gap: 100px;\n    justify-content: center;\n}\n\n.beer > li, .soft > li {\n    margin-bottom: 15px;\n}\n\nh2 {\n    color: #9d0a0a;\n}\n\n.locations {\n    display: none;\n    padding: 50px;\n}\n\n.row {\n    display: flex;\n    gap: 20px;\n}\n\n.contact-hours {\n    display: flex;\n    justify-content: space-around;\n}\n\n.hours-list {\n    padding: 0;\n}\n\n.row p {\n    margin-top: 0;\n}\n\n@media screen and (max-width: 425px) {\n    .guides {\n        gap: 10px;\n        padding: 0;\n    }\n\n    .btn-contact {\n        display: none;\n    }\n\n    .home {\n        padding-top: 50px;\n        align-items: start;\n        grid-template-columns: 6fr;\n    }\n\n    .img-home {\n        display: none;\n    }\n\n    .menu {\n        padding: 0 10px 0 10px; \n    }\n\n    .btns-menu {\n        flex-wrap: wrap;\n    }\n\n    .beer {\n        padding: 0;\n    }\n    \n    .locations {\n        padding: 10px;\n    }\n}", "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: 'My font';\n    src: url('../fonts/PlayfairDisplaySC-Bold.ttf');\n    font-weight: 700;\n    font-style: normal;\n}\n\nbody {\n    margin: 0;\n    font-family: sans-serif;\n}\n\nul {\n    padding: 0;\n}\n\n.content {\n    color: #2f2d2c;\n}\n\n.header {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    box-shadow: 1px 1px 17px 2px #da9a4c;\n    color: white;\n    background: #141414d4;\n}\n\n.slogan {\n    font-family: 'My font';\n}\n\n.guides {\n    gap: 60px;\n    display: flex;\n    list-style-type: none;\n}\n\n.guides li a {\n    position: relative;\n}\n\n.guides li a::after {\n    content: '';\n    position: absolute;\n    bottom: -5px;\n    left: 2%;\n    width: 0;\n    height: 0.2rem;\n    background: #bd1111;\n    transition: all 300ms ease-in-out;\n}\n\n.guides li a:hover::after {\n    width: 96%;\n}\n\n.btn-contact, .btn-order, .btn-pizza,\n.btn-pasta, .btn-salad, .btn-drinks,\n.btn-order-online, .btn-menu {\n    font-weight: 600;\n    border: 2px solid #da9a4c;\n    color: #fff;\n    box-shadow: 0 0 40px 40px #da9a4c inset, 0 0 0 0 #da9a4c;\n    -webkit-transition: all 150ms ease-in-out;\n    transition: all 150ms ease-in-out;\n    padding-left: 30px;\n    padding-right: 30px;\n    width: 160px;\n    border-radius: 30px;\n    height: 35px;\n    cursor: pointer;\n}\n\n.btn-contact, .btn-order-online, .btn-order {\n    border: 2px solid #bd1111;\n    color: white;\n    box-shadow: 0 0 40px 40px #bd1111 inset, 0 0 0 0 #bd1111;\n}\n\n.btn-order-online, .btn-menu {\n    width: 200px;\n    margin: 20px;\n}\n\n.btn-menu {\n    box-shadow: 0 0 40px 40px white inset, 0 0 0 0 white;\n    color: #bd1111;\n    border: 2px solid #bd1111;\n}\n\n.btn-pasta, .btn-salad, .btn-drinks {\n    width: 120px;\n    box-shadow: 0 0 40px 40px white inset, 0 0 0 0 white;\n    color: #da9a4c;\n} \n\n.btn-pizza {\n    width: 120px;\n}\n\na {\n    text-decoration: none;\n    color: white;\n}\n\n.home {\n    display: grid;\n    grid-template-columns: 6fr 4fr;\n    align-items: center;\n    gap: 50px;\n    padding-left: 50px;\n    padding-right: 50px;\n    height: 90vh;\n}\n\n.img-home {\n    height: 350px;\n    width: 350px;\n    border-radius: 400px;\n}\n\n.sub-img-home {\n    height: 150px;\n    width: 150px;\n    border-radius: 150px;\n    position: absolute;\n    right: 10px;\n    top: 450px;\n}\n\n.salad-img-home {\n    height: 100px;\n    width: 100px;\n    border-radius: 150px;\n    position: absolute;\n    right: 450px;\n    top: 350px;\n}\n\n.menu {\n    display: none;\n    min-height: 90vh;\n    padding: 0 50px 0 50px;\n}\n\n.header-menu {\n    grid-template-columns: 1fr 3fr;\n    display: grid;\n    gap: 40px;\n    align-items: center;\n    border-bottom: dashed #9d0a0a;\n}\n\n.btns-menu {\n    display: flex;\n    justify-content: center;\n    gap: 10px;\n}\n\n.menu-pizza {\n    text-align: center;\n}\n\n.pizzas-list {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 10px;\n}\n\n.pizzas-list li:nth-child(odd) {\n    font-weight: 900;\n}\n\n\nli {\n    list-style-type: none;\n}\n\n.flavors {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    font-weight: 600;\n    font-size: 1.2rem;\n}\n\n.prices {\n    font-size: 1.2rem;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.menu-pasta, .menu-salad {\n    display: none;\n}\n\n.menu-pasta > h2, .menu-salad > h2 {\n    text-align: center;\n}\n\n.pastas-list {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 10px;\n    justify-items: center;\n}\n\n.pastas-list li:nth-child(odd) {\n    font-weight: 900;\n}\n\n.pastas-list > li > p {\n    font-weight: 100;\n    font-size: 0.8rem;\n}\n\n.prices-pastas {\n    font-size: 1.2rem;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    align-items: center;\n    justify-content: space-around;\n}\n\n.menu-drinks {\n    display: none;\n    text-align: center;\n}\n\n.drinks-list {\n    display: flex;\n    align-items: flex-start;\n    gap: 100px;\n    justify-content: center;\n}\n\n.beer > li, .soft > li {\n    margin-bottom: 15px;\n}\n\nh2 {\n    color: #9d0a0a;\n}\n\n.locations {\n    display: none;\n    padding: 50px;\n}\n\n.row {\n    display: flex;\n    gap: 20px;\n}\n\n.contact-hours {\n    display: flex;\n    justify-content: space-around;\n}\n\n.hours-list {\n    padding: 0;\n}\n\n.row p {\n    margin-top: 0;\n}\n\n@media screen and (max-width: 425px) {\n    .guides {\n        gap: 10px;\n        padding: 0;\n    }\n\n    .btn-contact {\n        display: none;\n    }\n\n    .home {\n        padding-top: 50px;\n        align-items: start;\n        grid-template-columns: 6fr;\n    }\n\n    .img-home {\n        display: none;\n    }\n\n    .menu {\n        padding: 0 10px 0 10px; \n    }\n\n    .btns-menu {\n        flex-wrap: wrap;\n    }\n\n    .beer {\n        padding: 0;\n    }\n    \n    .locations {\n        padding: 10px;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/fonts/PlayfairDisplaySC-Bold.ttf":
/*!**********************************************!*\
  !*** ./src/fonts/PlayfairDisplaySC-Bold.ttf ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1b17fb4f9060e1d49e27.ttf";

/***/ }),

/***/ "./src/img/background.jpg":
/*!********************************!*\
  !*** ./src/img/background.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6598e021e11bf40308a2.jpg";

/***/ }),

/***/ "./src/img/pizza.jpg":
/*!***************************!*\
  !*** ./src/img/pizza.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8f867bdad4bcd2c8b2f1.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _img_background_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/background.jpg */ "./src/img/background.jpg");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header */ "./src/header.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _locations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./locations */ "./src/locations.js");






var body = document.querySelector('body');
var content = document.querySelector('.content');
body.style.cssText += "background-image: url(".concat(_img_background_jpg__WEBPACK_IMPORTED_MODULE_1__, ");");
content.appendChild((0,_header__WEBPACK_IMPORTED_MODULE_2__.header)());
content.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_3__.home)());
content.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_4__.menu)());
content.appendChild((0,_locations__WEBPACK_IMPORTED_MODULE_5__.locations)());
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxRQUFRLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLHFDQUFxQyw2QkFBNkIsc0RBQXNELHVCQUF1Qix5QkFBeUIsR0FBRyxV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QUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU02RixJQUFJLEdBQUc1RixRQUFRLENBQUNvQixhQUFULENBQXVCLE1BQXZCLENBQWI7QUFDQSxJQUFNeUUsT0FBTyxHQUFHN0YsUUFBUSxDQUFDb0IsYUFBVCxDQUF1QixVQUF2QixDQUFoQjtBQUVBd0UsSUFBSSxDQUFDckUsS0FBTCxDQUFXQyxPQUFYLG9DQUErQ21FLGdEQUEvQztBQUVBRSxPQUFPLENBQUM5RSxXQUFSLENBQW9CakIsK0NBQU0sRUFBMUI7QUFDQStGLE9BQU8sQ0FBQzlFLFdBQVIsQ0FBb0JJLDJDQUFJLEVBQXhCO0FBQ0EwRSxPQUFPLENBQUM5RSxXQUFSLENBQW9CTSwyQ0FBSSxFQUF4QjtBQUNBd0UsT0FBTyxDQUFDOUUsV0FBUixDQUFvQk8scURBQVMsRUFBN0IsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2xvY2F0aW9ucy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY3NzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Nzcy9zdHlsZS5jc3M/OWZjZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBoZWFkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBjb25zdCBsaTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGxpMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgbGkzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBhMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBjb25zdCBhMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBjb25zdCBhMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG4gICAgaDMuY2xhc3NMaXN0LmFkZCgnc2xvZ2FuJyk7XG4gICAgdWwuY2xhc3NMaXN0LmFkZCgnZ3VpZGVzJyk7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J0bi1jb250YWN0Jyk7XG5cbiAgICBoMy50ZXh0Q29udGVudCA9ICdJdGFsaWFuJztcblxuICAgIGExLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuICAgIGExLmhyZWYgPSAnIyc7XG4gICAgYTIudGV4dENvbnRlbnQgPSAnTG9jYXRpb25zJztcbiAgICBhMi5ocmVmID0gJyMnO1xuICAgIGEzLnRleHRDb250ZW50ID0gJ01lbnUnO1xuICAgIGEzLmhyZWYgPSAnIyc7XG5cbiAgICBidXR0b24udGV4dENvbnRlbnQgPSAnQ29udGFjdCB1cyc7XG5cbiAgICBsaTEuYXBwZW5kQ2hpbGQoYTEpO1xuICAgIGxpMi5hcHBlbmRDaGlsZChhMik7XG4gICAgbGkzLmFwcGVuZENoaWxkKGEzKTtcblxuICAgIHVsLmFwcGVuZENoaWxkKGxpMSk7XG4gICAgdWwuYXBwZW5kQ2hpbGQobGkyKTtcbiAgICB1bC5hcHBlbmRDaGlsZChsaTMpO1xuXG4gICAgZGl2LmFwcGVuZENoaWxkKGgzKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQodWwpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChidXR0b24pOyAgICBcblxuICAgIGEzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgXG4gICAgICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yICgnLmhvbWUnKTtcbiAgICAgICAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IgKCcubWVudScpO1xuICAgICAgICBjb25zdCBsb2NhdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9jYXRpb25zJyk7XG5cbiAgICAgICAgaG9tZS5zdHlsZS5jc3NUZXh0ICs9ICdkaXNwbGF5OiBub25lOyc7XG4gICAgICAgIG1lbnUuc3R5bGUuY3NzVGV4dCArPSAnZGlzcGxheTogYmxvY2s7JztcbiAgICAgICAgbG9jYXRpb25zLnN0eWxlLmNzc1RleHQgKz0gJ2Rpc3BsYXk6IG5vbmU7JztcbiAgICB9KTtcblxuICAgIGExLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgXG4gICAgICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yICgnLmhvbWUnKTtcbiAgICAgICAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IgKCcubWVudScpO1xuICAgICAgICBjb25zdCBsb2NhdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9jYXRpb25zJyk7XG4gICAgICAgICBcbiAgICAgICAgaG9tZS5zdHlsZS5jc3NUZXh0ICs9ICdkaXNwbGF5OiBncmlkOyc7XG4gICAgICAgIG1lbnUuc3R5bGUuY3NzVGV4dCArPSAnZGlzcGxheTogbm9uZTsnO1xuICAgICAgICBsb2NhdGlvbnMuc3R5bGUuY3NzVGV4dCArPSAnZGlzcGxheTogbm9uZTsnO1xuICAgIH0pO1xuXG4gICAgYTIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyBcbiAgICAgICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IgKCcuaG9tZScpO1xuICAgICAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciAoJy5tZW51Jyk7XG4gICAgICAgIGNvbnN0IGxvY2F0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2NhdGlvbnMnKTtcbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICBob21lLnN0eWxlLmNzc1RleHQgKz0gJ2Rpc3BsYXk6IG5vbmU7JztcbiAgICAgICAgbWVudS5zdHlsZS5jc3NUZXh0ICs9ICdkaXNwbGF5OiBub25lOyc7XG4gICAgICAgIGxvY2F0aW9ucy5zdHlsZS5jc3NUZXh0ICs9ICdkaXNwbGF5OiBibG9jazsnO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRpdjtcbn0iLCJpbXBvcnQgUGl6emEgZnJvbSAnLi9pbWcvcGl6emEuanBnJztcblxuZXhwb3J0IGNvbnN0IGhvbWUgPSAoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY2hpbGREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjaGlsZERpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdob21lJyk7XG4gICAgaW1nLmNsYXNzTGlzdC5hZGQoJ2ltZy1ob21lJyk7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J0bi1vcmRlcicpO1xuICAgIFxuICAgIGgxLnRleHRDb250ZW50ID0gJ0dPT0QgRk9PRCBCUklOR1MgR0VOVUlORSBIQVBJTkVTUyc7XG4gICAgcC50ZXh0Q29udGVudCA9ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gTmloaWwgZGljdGEgaW1wZWRpdCBkb2xvcmVtIGFzcGVybmF0dXIgYXQgcmVwcmVoZW5kZXJpdCc7XG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ1BsYWNlIGFuIG9yZGVyJztcblxuICAgIGltZy5zcmMgPSBQaXp6YTtcblxuICAgIGNoaWxkRGl2LmFwcGVuZENoaWxkKGgxKTtcbiAgICBjaGlsZERpdi5hcHBlbmRDaGlsZChwKTtcbiAgICBjaGlsZERpdi5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgIGNoaWxkRGl2Mi5hcHBlbmRDaGlsZChpbWcpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChjaGlsZERpdik7XG4gICAgZGl2LmFwcGVuZENoaWxkKGNoaWxkRGl2Mik7XG5cbiAgICByZXR1cm4gZGl2O1xufSIsImV4cG9ydCBjb25zdCBsb2NhdGlvbnMgPSAoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3Qgc3ViRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYnV0dG9uT3JkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBidXR0b25NZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgY2hpbGREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjaGlsZERpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBoM0NvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGNvbnN0IGgzQWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgY29uc3QgaDNIb3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgY29uc3QgcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcDYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcDcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcDggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcDkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcDEwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHAxMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBwMTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcDEzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHAxNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBwMTUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcDE2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHAxNyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgY29uc3QgbGkxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBsaTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGxpMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgbGk0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBsaTUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGxpNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgbGk3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdsb2NhdGlvbnMnKTtcbiAgICBzdWJEaXYuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1ob3VycycpO1xuICAgIGJ1dHRvbk9yZGVyLmNsYXNzTGlzdC5hZGQoJ2J0bi1vcmRlci1vbmxpbmUnKTtcbiAgICBidXR0b25NZW51LmNsYXNzTGlzdC5hZGQoJ2J0bi1tZW51Jyk7XG4gICAgdWwuY2xhc3NMaXN0LmFkZCgnaG91cnMtbGlzdCcpXG4gICAgbGkxLmNsYXNzTGlzdC5hZGQoJ3JvdycpO1xuICAgIGxpMi5jbGFzc0xpc3QuYWRkKCdyb3cnKTtcbiAgICBsaTMuY2xhc3NMaXN0LmFkZCgncm93Jyk7XG4gICAgbGk0LmNsYXNzTGlzdC5hZGQoJ3JvdycpO1xuICAgIGxpNS5jbGFzc0xpc3QuYWRkKCdyb3cnKTtcbiAgICBsaTYuY2xhc3NMaXN0LmFkZCgncm93Jyk7XG4gICAgbGk3LmNsYXNzTGlzdC5hZGQoJ3JvdycpO1xuXG4gICAgYnV0dG9uT3JkZXIudGV4dENvbnRlbnQgPSAnT1JERVIgT05MSU5FJztcbiAgICBidXR0b25NZW51LnRleHRDb250ZW50ID0gJ1ZJRVcgVEhFIE1FTlUnO1xuXG4gICAgaDNDb250YWN0LnRleHRDb250ZW50ID0gJ0NvbnRhY3QnO1xuICAgIHAxLmlubmVySFRNTCA9IGBUZWxlcGhvbmUgPGJyPiB4eHgueHh4Lnh4eHhgO1xuICAgIHAyLmlubmVySFRNTCA9IGBUYWtlIE91dCA8YnI+IHl5eS55eXkueXl5eWA7XG5cbiAgICBoM0FkZHJlc3MudGV4dENvbnRlbnQgPSAnQWRkcmVzcyc7XG4gICAgcDMuaW5uZXJIVE1MID0gYDI0MDkgUmFpbnRyZWUgQm91bGV2YXJkIDxicj4gS29rb21vLCBJTiA0NjkwMWA7XG5cbiAgICBoM0hvdXJzLnRleHRDb250ZW50ID0gJ0hvdXJzJztcblxuICAgIHA0LnRleHRDb250ZW50ID0gJ01vbmRheSc7XG4gICAgcDUudGV4dENvbnRlbnQgPSAnMTE6MzAgQU0gLSAxMDozMCBQTSc7XG4gICAgbGkxLmFwcGVuZENoaWxkKHA0KTtcbiAgICBsaTEuYXBwZW5kQ2hpbGQocDUpO1xuICAgICAgICBcbiAgICBwNi50ZXh0Q29udGVudCA9ICdUdWVzZGF5JztcbiAgICBwNy50ZXh0Q29udGVudCA9ICcxMTozMCBBTSAtIDEwOjMwIFBNJztcbiAgICBsaTIuYXBwZW5kQ2hpbGQocDYpO1xuICAgIGxpMi5hcHBlbmRDaGlsZChwNyk7XG5cbiAgICBwOC50ZXh0Q29udGVudCA9ICdXZWRuZXNkYXknO1xuICAgIHA5LnRleHRDb250ZW50ID0gJzExOjMwIEFNIC0gMTA6MzAgUE0nO1xuICAgIGxpMy5hcHBlbmRDaGlsZChwOCk7XG4gICAgbGkzLmFwcGVuZENoaWxkKHA5KTtcblxuICAgIHAxMC50ZXh0Q29udGVudCA9ICdUaHVyc2RheSc7XG4gICAgcDExLnRleHRDb250ZW50ID0gJzExOjMwIEFNIC0gMTA6MzAgUE0nO1xuICAgIGxpNC5hcHBlbmRDaGlsZChwMTApO1xuICAgIGxpNC5hcHBlbmRDaGlsZChwMTEpO1xuXG4gICAgcDEyLnRleHRDb250ZW50ID0gJ0ZyaWRheSc7XG4gICAgcDEzLnRleHRDb250ZW50ID0gJzExOjMwIEFNIC0gMTI6MDAgUE0nO1xuICAgIGxpNS5hcHBlbmRDaGlsZChwMTIpO1xuICAgIGxpNS5hcHBlbmRDaGlsZChwMTMpO1xuXG4gICAgcDE0LnRleHRDb250ZW50ID0gJ1NhdHVyZGF5JztcbiAgICBwMTUudGV4dENvbnRlbnQgPSAnMTE6MzAgQU0gLSAxMjowMCBQTSc7XG4gICAgbGk2LmFwcGVuZENoaWxkKHAxNCk7XG4gICAgbGk2LmFwcGVuZENoaWxkKHAxNSk7XG5cbiAgICBwMTYudGV4dENvbnRlbnQgPSAnTW9uZGF5JztcbiAgICBwMTcudGV4dENvbnRlbnQgPSAnMTE6MzAgQU0gLSAxMDozMCBQTSc7XG4gICAgbGk3LmFwcGVuZENoaWxkKHAxNik7XG4gICAgbGk3LmFwcGVuZENoaWxkKHAxNyk7XG5cbiAgICB1bC5hcHBlbmRDaGlsZChsaTEpO1xuICAgIHVsLmFwcGVuZENoaWxkKGxpMik7XG4gICAgdWwuYXBwZW5kQ2hpbGQobGkzKTtcbiAgICB1bC5hcHBlbmRDaGlsZChsaTQpO1xuICAgIHVsLmFwcGVuZENoaWxkKGxpNSk7XG4gICAgdWwuYXBwZW5kQ2hpbGQobGk2KTtcbiAgICB1bC5hcHBlbmRDaGlsZChsaTcpO1xuXG4gICAgY2hpbGREaXYuYXBwZW5kQ2hpbGQoaDNDb250YWN0KTtcbiAgICBjaGlsZERpdi5hcHBlbmRDaGlsZChwMSk7XG4gICAgY2hpbGREaXYuYXBwZW5kQ2hpbGQocDIpO1xuICAgIGNoaWxkRGl2LmFwcGVuZENoaWxkKGgzQWRkcmVzcyk7XG4gICAgY2hpbGREaXYuYXBwZW5kQ2hpbGQocDMpO1xuXG4gICAgY2hpbGREaXYyLmFwcGVuZENoaWxkKGgzSG91cnMpO1xuICAgIGNoaWxkRGl2Mi5hcHBlbmRDaGlsZCh1bCk7XG5cbiAgICBzdWJEaXYuYXBwZW5kQ2hpbGQoY2hpbGREaXYpO1xuICAgIHN1YkRpdi5hcHBlbmRDaGlsZChjaGlsZERpdjIpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChidXR0b25PcmRlcik7XG4gICAgZGl2LmFwcGVuZENoaWxkKGJ1dHRvbk1lbnUpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChzdWJEaXYpO1xuICAgIFxuICAgIHJldHVybiBkaXY7XG59OyIsImV4cG9ydCBjb25zdCBtZW51ID0gKCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGRpdkhlYWRlciA9IGhlYWRlck1lbnUoKTtcbiAgICBjb25zdCBkaXZQaXp6YSA9IG1lbnVQaXp6YSgpO1xuICAgIGNvbnN0IGRpdlBhc3RhID0gbWVudVBhc3RhKCk7XG4gICAgY29uc3QgZGl2U2FsYWQgPSBtZW51U2FsYWQoKTtcbiAgICBjb25zdCBkaXZEcmlua3MgPSBtZW51RHJpbmtzKCk7XG5cbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuXG4gICAgZGl2LmFwcGVuZENoaWxkKGRpdkhlYWRlcik7XG4gICAgZGl2LmFwcGVuZENoaWxkKGRpdlBpenphKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoZGl2UGFzdGEpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChkaXZTYWxhZCk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGRpdkRyaW5rcyk7XG5cbiAgICByZXR1cm4gZGl2O1xufVxuXG5mdW5jdGlvbiBoZWFkZXJNZW51KCkge1xuICAgIGNvbnN0IGRpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjaGlsZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNoaWxkRGl2MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGJ1dHRvblBpenphID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgYnV0dG9uUGFzdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBidXR0b25TYWxhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGJ1dHRvbkRyaW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgZGl2Mi5jbGFzc0xpc3QuYWRkKCdoZWFkZXItbWVudScpO1xuICAgIGNoaWxkRGl2LmNsYXNzTGlzdC5hZGQoJ291ci1tZW51Jyk7XG4gICAgY2hpbGREaXYyLmNsYXNzTGlzdC5hZGQoJ2J0bnMtbWVudScpO1xuICAgIGJ1dHRvblBpenphLmNsYXNzTGlzdC5hZGQoJ2J0bi1waXp6YScpO1xuICAgIGJ1dHRvblBhc3RhLmNsYXNzTGlzdC5hZGQoJ2J0bi1wYXN0YScpO1xuICAgIGJ1dHRvblNhbGFkLmNsYXNzTGlzdC5hZGQoJ2J0bi1zYWxhZCcpO1xuICAgIGJ1dHRvbkRyaW5rcy5jbGFzc0xpc3QuYWRkKCdidG4tZHJpbmtzJyk7XG5cbiAgICBoMi50ZXh0Q29udGVudCA9ICdPVVIgTUVOVVMnO1xuICAgIHAudGV4dENvbnRlbnQgPSAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuJztcbiAgICBidXR0b25QaXp6YS50ZXh0Q29udGVudCA9ICdQaXp6YSc7XG4gICAgYnV0dG9uUGFzdGEudGV4dENvbnRlbnQgPSAnUGFzdGEnO1xuICAgIGJ1dHRvblNhbGFkLnRleHRDb250ZW50ID0gJ1NhbGFkJztcbiAgICBidXR0b25Ecmlua3MudGV4dENvbnRlbnQgPSAnRHJpbmtzJztcblxuICAgIGNoaWxkRGl2LmFwcGVuZENoaWxkKGgyKTtcbiAgICBjaGlsZERpdi5hcHBlbmRDaGlsZChwKTtcbiAgICBjaGlsZERpdjIuYXBwZW5kQ2hpbGQoYnV0dG9uUGl6emEpO1xuICAgIGNoaWxkRGl2Mi5hcHBlbmRDaGlsZChidXR0b25QYXN0YSk7XG4gICAgY2hpbGREaXYyLmFwcGVuZENoaWxkKGJ1dHRvblNhbGFkKTtcbiAgICBjaGlsZERpdjIuYXBwZW5kQ2hpbGQoYnV0dG9uRHJpbmtzKTtcbiAgICBkaXYyLmFwcGVuZENoaWxkKGNoaWxkRGl2KTtcbiAgICBkaXYyLmFwcGVuZENoaWxkKGNoaWxkRGl2Mik7XG5cbiAgICBidXR0b25QaXp6YS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgbWVudVBpenphID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtcGl6emEnKTtcbiAgICAgICAgY29uc3QgbWVudVBhc3RhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtcGFzdGEnKTtcbiAgICAgICAgY29uc3QgbWVudVNhbGFkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtc2FsYWQnKTtcbiAgICAgICAgY29uc3QgbWVudURyaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWRyaW5rcycpO1xuICAgICAgICBjb25zdCBidXR0b25QaXp6YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tcGl6emEnKTtcbiAgICAgICAgY29uc3QgYnV0dG9uUGFzdGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLXBhc3RhJyk7XG4gICAgICAgIGNvbnN0IGJ1dHRvblNhbGFkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1zYWxhZCcpO1xuICAgICAgICBjb25zdCBidXR0b25Ecmlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLWRyaW5rcycpO1xuXG4gICAgICAgIG1lbnVQaXp6YS5zdHlsZS5jc3NUZXh0ICs9ICdkaXNwbGF5OiBibG9jayc7XG4gICAgICAgIG1lbnVQYXN0YS5zdHlsZS5jc3NUZXh0ICs9ICdkaXNwbGF5OiBub25lJztcbiAgICAgICAgbWVudVNhbGFkLnN0eWxlLmNzc1RleHQgKz0gJ2Rpc3BsYXk6IG5vbmUnO1xuICAgICAgICBtZW51RHJpbmtzLnN0eWxlLmNzc1RleHQgKz0gJ2Rpc3BsYXk6IG5vbmUnO1xuXG4gICAgICAgIGJ1dHRvblBpenphLnN0eWxlLmNzc1RleHQgKz0gJ2JveC1zaGFkb3c6IDAgMCA0MHB4IDQwcHggI2RhOWE0YyBpbnNldCwgMCAwIDAgMCAjZGE5YTRjOyBjb2xvcjogI2ZmZjsnO1xuICAgICAgICBidXR0b25QYXN0YS5zdHlsZS5jc3NUZXh0ICs9ICdib3gtc2hhZG93OiAwIDAgNDBweCA0MHB4IHdoaXRlIGluc2V0LCAwIDAgMCAwIHdoaXRlOyBjb2xvcjogI2RhOWE0YzsnO1xuICAgICAgICBidXR0b25TYWxhZC5zdHlsZS5jc3NUZXh0ICs9ICdib3gtc2hhZG93OiAwIDAgNDBweCA0MHB4IHdoaXRlIGluc2V0LCAwIDAgMCAwIHdoaXRlOyBjb2xvcjogI2RhOWE0YzsnO1xuICAgICAgICBidXR0b25Ecmlua3Muc3R5bGUuY3NzVGV4dCArPSAnYm94LXNoYWRvdzogMCAwIDQwcHggNDBweCB3aGl0ZSBpbnNldCwgMCAwIDAgMCB3aGl0ZTsgY29sb3I6ICNkYTlhNGM7JztcbiAgICB9KTtcblxuICAgIGJ1dHRvblBhc3RhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxlID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBtZW51UGl6emEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1waXp6YScpO1xuICAgICAgICBjb25zdCBtZW51UGFzdGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1wYXN0YScpO1xuICAgICAgICBjb25zdCBtZW51U2FsYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1zYWxhZCcpO1xuICAgICAgICBjb25zdCBtZW51RHJpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtZHJpbmtzJyk7XG4gICAgICAgIGNvbnN0IGJ1dHRvblBpenphID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1waXp6YScpO1xuICAgICAgICBjb25zdCBidXR0b25QYXN0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tcGFzdGEnKTtcbiAgICAgICAgY29uc3QgYnV0dG9uU2FsYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLXNhbGFkJyk7XG4gICAgICAgIGNvbnN0IGJ1dHRvbkRyaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tZHJpbmtzJyk7XG5cblxuICAgICAgICBtZW51UGl6emEuc3R5bGUuY3NzVGV4dCArPSAnZGlzcGxheTogbm9uZSc7XG4gICAgICAgIG1lbnVQYXN0YS5zdHlsZS5jc3NUZXh0ICs9ICdkaXNwbGF5OiBibG9jayc7XG4gICAgICAgIG1lbnVTYWxhZC5zdHlsZS5jc3NUZXh0ICs9ICdkaXNwbGF5OiBub25lJztcbiAgICAgICAgbWVudURyaW5rcy5zdHlsZS5jc3NUZXh0ICs9ICdkaXNwbGF5OiBub25lJztcblxuICAgICAgICBidXR0b25QYXN0YS5zdHlsZS5jc3NUZXh0ICs9ICdib3gtc2hhZG93OiAwIDAgNDBweCA0MHB4ICNkYTlhNGMgaW5zZXQsIDAgMCAwIDAgI2RhOWE0YzsgY29sb3I6ICNmZmY7JztcbiAgICAgICAgYnV0dG9uUGl6emEuc3R5bGUuY3NzVGV4dCArPSAnYm94LXNoYWRvdzogMCAwIDQwcHggNDBweCB3aGl0ZSBpbnNldCwgMCAwIDAgMCB3aGl0ZTsgY29sb3I6ICNkYTlhNGM7JztcbiAgICAgICAgYnV0dG9uU2FsYWQuc3R5bGUuY3NzVGV4dCArPSAnYm94LXNoYWRvdzogMCAwIDQwcHggNDBweCB3aGl0ZSBpbnNldCwgMCAwIDAgMCB3aGl0ZTsgY29sb3I6ICNkYTlhNGM7JztcbiAgICAgICAgYnV0dG9uRHJpbmtzLnN0eWxlLmNzc1RleHQgKz0gJ2JveC1zaGFkb3c6IDAgMCA0MHB4IDQwcHggd2hpdGUgaW5zZXQsIDAgMCAwIDAgd2hpdGU7IGNvbG9yOiAjZGE5YTRjOyc7XG4gICAgfSk7XG5cbiAgICBidXR0b25TYWxhZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgbWVudVBpenphID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtcGl6emEnKTtcbiAgICAgICAgY29uc3QgbWVudVBhc3RhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtcGFzdGEnKTtcbiAgICAgICAgY29uc3QgbWVudVNhbGFkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtc2FsYWQnKTtcbiAgICAgICAgY29uc3QgbWVudURyaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWRyaW5rcycpO1xuICAgICAgICBjb25zdCBidXR0b25QaXp6YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tcGl6emEnKTtcbiAgICAgICAgY29uc3QgYnV0dG9uUGFzdGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLXBhc3RhJyk7XG4gICAgICAgIGNvbnN0IGJ1dHRvblNhbGFkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1zYWxhZCcpO1xuICAgICAgICBjb25zdCBidXR0b25Ecmlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLWRyaW5rcycpO1xuXG5cbiAgICAgICAgbWVudVBpenphLnN0eWxlLmNzc1RleHQgKz0gJ2Rpc3BsYXk6IG5vbmUnO1xuICAgICAgICBtZW51UGFzdGEuc3R5bGUuY3NzVGV4dCArPSAnZGlzcGxheTogbm9uZSc7XG4gICAgICAgIG1lbnVTYWxhZC5zdHlsZS5jc3NUZXh0ICs9ICdkaXNwbGF5OiBibG9jayc7XG4gICAgICAgIG1lbnVEcmlua3Muc3R5bGUuY3NzVGV4dCArPSAnZGlzcGxheTogbm9uZSc7XG5cbiAgICAgICAgYnV0dG9uU2FsYWQuc3R5bGUuY3NzVGV4dCArPSAnYm94LXNoYWRvdzogMCAwIDQwcHggNDBweCAjZGE5YTRjIGluc2V0LCAwIDAgMCAwICNkYTlhNGM7IGNvbG9yOiAjZmZmOyc7XG4gICAgICAgIGJ1dHRvblBpenphLnN0eWxlLmNzc1RleHQgKz0gJ2JveC1zaGFkb3c6IDAgMCA0MHB4IDQwcHggd2hpdGUgaW5zZXQsIDAgMCAwIDAgd2hpdGU7IGNvbG9yOiAjZGE5YTRjOyc7XG4gICAgICAgIGJ1dHRvblBhc3RhLnN0eWxlLmNzc1RleHQgKz0gJ2JveC1zaGFkb3c6IDAgMCA0MHB4IDQwcHggd2hpdGUgaW5zZXQsIDAgMCAwIDAgd2hpdGU7IGNvbG9yOiAjZGE5YTRjOyc7XG4gICAgICAgIGJ1dHRvbkRyaW5rcy5zdHlsZS5jc3NUZXh0ICs9ICdib3gtc2hhZG93OiAwIDAgNDBweCA0MHB4IHdoaXRlIGluc2V0LCAwIDAgMCAwIHdoaXRlOyBjb2xvcjogI2RhOWE0YzsnO1xuICAgIH0pO1xuXG4gICAgYnV0dG9uRHJpbmtzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxlID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBtZW51UGl6emEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1waXp6YScpO1xuICAgICAgICBjb25zdCBtZW51UGFzdGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1wYXN0YScpO1xuICAgICAgICBjb25zdCBtZW51U2FsYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1zYWxhZCcpO1xuICAgICAgICBjb25zdCBtZW51RHJpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtZHJpbmtzJyk7XG4gICAgICAgIGNvbnN0IGJ1dHRvblBpenphID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1waXp6YScpO1xuICAgICAgICBjb25zdCBidXR0b25QYXN0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tcGFzdGEnKTtcbiAgICAgICAgY29uc3QgYnV0dG9uU2FsYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLXNhbGFkJyk7XG4gICAgICAgIGNvbnN0IGJ1dHRvbkRyaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tZHJpbmtzJyk7XG5cblxuICAgICAgICBtZW51UGl6emEuc3R5bGUuY3NzVGV4dCArPSAnZGlzcGxheTogbm9uZSc7XG4gICAgICAgIG1lbnVQYXN0YS5zdHlsZS5jc3NUZXh0ICs9ICdkaXNwbGF5OiBub25lJztcbiAgICAgICAgbWVudVNhbGFkLnN0eWxlLmNzc1RleHQgKz0gJ2Rpc3BsYXk6IG5vbmUnO1xuICAgICAgICBtZW51RHJpbmtzLnN0eWxlLmNzc1RleHQgKz0gJ2Rpc3BsYXk6IGJsb2NrJztcblxuICAgICAgICBidXR0b25Ecmlua3Muc3R5bGUuY3NzVGV4dCArPSAnYm94LXNoYWRvdzogMCAwIDQwcHggNDBweCAjZGE5YTRjIGluc2V0LCAwIDAgMCAwICNkYTlhNGM7IGNvbG9yOiAjZmZmOyc7XG4gICAgICAgIGJ1dHRvblBpenphLnN0eWxlLmNzc1RleHQgKz0gJ2JveC1zaGFkb3c6IDAgMCA0MHB4IDQwcHggd2hpdGUgaW5zZXQsIDAgMCAwIDAgd2hpdGU7IGNvbG9yOiAjZGE5YTRjOyc7XG4gICAgICAgIGJ1dHRvblNhbGFkLnN0eWxlLmNzc1RleHQgKz0gJ2JveC1zaGFkb3c6IDAgMCA0MHB4IDQwcHggd2hpdGUgaW5zZXQsIDAgMCAwIDAgd2hpdGU7IGNvbG9yOiAjZGE5YTRjOyc7XG4gICAgICAgIGJ1dHRvblBhc3RhLnN0eWxlLmNzc1RleHQgKz0gJ2JveC1zaGFkb3c6IDAgMCA0MHB4IDQwcHggd2hpdGUgaW5zZXQsIDAgMCAwIDAgd2hpdGU7IGNvbG9yOiAjZGE5YTRjOyc7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZGl2Mjtcbn1cblxuZnVuY3Rpb24gbWVudVBpenphKCkge1xuICAgIGNvbnN0IGRpdlBpenphID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY2hpbGREaXZQaXp6YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHBNZW51UGl6emEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcE1lbnVQaXp6YTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcE1lbnVQaXp6YTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgaDJNZW51UGl6emEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNvbnN0IGxpMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgbGkyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBsaTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGxpNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgbGk1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBsaTYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGxpNyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgbGk4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBsaTkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGxpMTAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGxpMTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGxpMTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG4gICAgZGl2UGl6emEuY2xhc3NMaXN0LmFkZCgnbWVudS1waXp6YScpO1xuICAgIGNoaWxkRGl2UGl6emEuY2xhc3NMaXN0LmFkZCgncGl6emFzLWxpc3QnKTtcbiAgICBcblxuICAgIGgyTWVudVBpenphLnRleHRDb250ZW50ID0gJ0NMQVNTSUMgUElaWkEnO1xuICAgIHBNZW51UGl6emEudGV4dENvbnRlbnQgPSBcIkNob29zZSBTbWFsbCAoMTQnJy82IHNsaWNlcyksIExhcmdlICgxNicnIC84IHNsaWNlcykgb3IgU2hlZXQgUGl6emFcIjtcbiAgICBwTWVudVBpenphMi50ZXh0Q29udGVudCA9IFwicGxhaW4gY2hlZXNlXCJcbiAgICBwTWVudVBpenphMy50ZXh0Q29udGVudCA9IFwiOC45NSAvIDEyLjk1IC8gMjMuOTVcIjtcblxuICAgIGxpMS50ZXh0Q29udGVudCA9ICdDaGlja2VuIFdpbmcnO1xuICAgIGxpMi50ZXh0Q29udGVudCA9ICdCYWNvbiAmIFRvbWF0byc7XG4gICAgbGkzLnRleHRDb250ZW50ID0gJ0JCUSBSaWInO1xuICAgIGxpNC50ZXh0Q29udGVudCA9ICdMYXNhZ25hJztcbiAgICBsaTUudGV4dENvbnRlbnQgPSAnUGhpbGx5IFN0ZWFrJztcbiAgICBsaTYudGV4dENvbnRlbnQgPSAnSGF3YWlpYW4nO1xuXG5cbiAgICBsaTcudGV4dENvbnRlbnQgPSAnJCAxNC41MCAvIDIwLjk1JztcbiAgICBsaTgudGV4dENvbnRlbnQgPSAnJCAxNC41MCAvIDIwLjk1JztcbiAgICBsaTkudGV4dENvbnRlbnQgPSAnJCAxNC41MCAvIDIwLjk1JztcbiAgICBsaTEwLnRleHRDb250ZW50ID0gJyQgOC45NSAvIDEyLjk5JztcbiAgICBsaTExLnRleHRDb250ZW50ID0gJyQgMTUuOTUgLyAyMy41MCc7XG4gICAgbGkxMi50ZXh0Q29udGVudCA9ICckIDExLjc1IC8gMTYuNDAnO1xuXG4gICAgY2hpbGREaXZQaXp6YS5hcHBlbmRDaGlsZChsaTEpO1xuICAgIGNoaWxkRGl2UGl6emEuYXBwZW5kQ2hpbGQobGk3KTtcbiAgICBjaGlsZERpdlBpenphLmFwcGVuZENoaWxkKGxpMik7XG4gICAgY2hpbGREaXZQaXp6YS5hcHBlbmRDaGlsZChsaTgpO1xuICAgIGNoaWxkRGl2UGl6emEuYXBwZW5kQ2hpbGQobGkzKTtcbiAgICBjaGlsZERpdlBpenphLmFwcGVuZENoaWxkKGxpOSk7XG4gICAgY2hpbGREaXZQaXp6YS5hcHBlbmRDaGlsZChsaTQpO1xuICAgIGNoaWxkRGl2UGl6emEuYXBwZW5kQ2hpbGQobGkxMCk7XG4gICAgY2hpbGREaXZQaXp6YS5hcHBlbmRDaGlsZChsaTUpO1xuICAgIGNoaWxkRGl2UGl6emEuYXBwZW5kQ2hpbGQobGkxMSk7XG4gICAgY2hpbGREaXZQaXp6YS5hcHBlbmRDaGlsZChsaTYpO1xuICAgIGNoaWxkRGl2UGl6emEuYXBwZW5kQ2hpbGQobGkxMik7XG5cbiAgICBkaXZQaXp6YS5hcHBlbmRDaGlsZChoMk1lbnVQaXp6YSk7XG4gICAgZGl2UGl6emEuYXBwZW5kQ2hpbGQocE1lbnVQaXp6YSk7XG4gICAgZGl2UGl6emEuYXBwZW5kQ2hpbGQocE1lbnVQaXp6YTIpO1xuICAgIGRpdlBpenphLmFwcGVuZENoaWxkKHBNZW51UGl6emEzKTtcbiAgICBkaXZQaXp6YS5hcHBlbmRDaGlsZChjaGlsZERpdlBpenphKTtcblxuICAgIHJldHVybiBkaXZQaXp6YTtcbn1cblxuZnVuY3Rpb24gbWVudVBhc3RhKCkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjb25zdCBjaGlsZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHAzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHA0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHA1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHA2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGxpMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgbGkyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBsaTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGxpNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgbGk1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBsaTYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGxpNyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgbGk4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBsaTkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGxpMTAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGxpMTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGxpMTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ21lbnUtcGFzdGEnKTtcbiAgICBjaGlsZERpdi5jbGFzc0xpc3QuYWRkKCdwYXN0YXMtbGlzdCcpO1xuXG4gICAgaDIudGV4dENvbnRlbnQgPSAnUEFTVEFTJztcblxuICAgIGxpMS50ZXh0Q29udGVudCA9ICdNZWF0IExhc2FnbmEnXG4gICAgcDEudGV4dENvbnRlbnQgPSAnVGhlIGNsYXNzaWMhIFN3ZWV0IEl0YWxpYW4gc2F1c2FnZSBhbmQgZ3JvdW5kIGJlZWYgbWl4ZWQgd2l0aCBmcmVzaCBoZXJicywgR2FybGljLCByaWNvdHRhIGFuZCBQYXJtZXNhbiwgdGhlbiBiYWtlZCB3aXRoIG1hcmluYXJhIGFuZCBtb3p6YXJlbGxhLic7XG4gICAgbGkyLnRleHRDb250ZW50ID0gJ1RvcnRlbGxpbmkgYWwgRm9ybm8nXG4gICAgcDIudGV4dENvbnRlbnQgPSAnR3JpbGxlZCBmcmVzaCB2ZWdldGFibGVzIGluY2x1ZGluZyBzdW1tZXIgc3F1YXNoLCB6dWNjaGluaSwgYnJvY2NvbGkgYW5kIHJlZCBiZWxsIHBlcHBlcnMsIHdpdGggdHJpLWNvbG9yZWQgdG9ydGVsbGluaSB0b3NzZWQgaW4gYSBkZWxpY2lvdXMgdG9tYXRvIGNyZWFtIHNhdWNlIGFuZCBiYWtlZCB3aXRoIG1venphcmVsbGEuJztcbiAgICBsaTMudGV4dENvbnRlbnQgPSAnQmFrZWQgUGVubmUnXG4gICAgcDMudGV4dENvbnRlbnQgPSAnUGVubmUgcGFzdGEgdG9zc2VkIHdpdGggYSBkZWxpY2lvdXMgYmxlbmQgb2YgbWFyaW5hcmEsIHJpY290dGEsIFBhcm1lc2FuIGFuZCBmcmVzaCBoZXJicyB0aGVuIGJha2VkIHdpdGggZnJlc2ggbW96emFyZWxsYSBvbiB0b3AuJztcbiAgICBsaTQudGV4dENvbnRlbnQgPSAnR3JvdXBlciBUcm9waWNhbCAnXG4gICAgcDQudGV4dENvbnRlbnQgPSAnRnJlc2ggbG9jYWwgZ3JvdXBlciBwYW4gc2VhcmVkIGFuZCB0b3BwZWQgd2l0aCBtYW5nbyBzYWxzYSBvdmVyIHNlYWZvb2Qgcmlzb3R0byB3aXRoIHNhdXRlZWQgdmVnZXRhYmxlcyc7XG4gICAgbGk1LnRleHRDb250ZW50ID0gJ0RvbHBoaW4gUGljYXR0YSdcbiAgICBwNS50ZXh0Q29udGVudCA9ICdGcmVzaCBsb2NhbCBtYWhpLW1haGkgc2F1dMOpIGVkIHdpdGggY2FwZXJzIGFuZCBnYXJsaWMgaW4gYSB3aGl0ZSB3aW5lIGJ1dHRlciBzYXVjZS4nO1xuICAgIGxpNi50ZXh0Q29udGVudCA9ICdTaHJpbXAgQWxmcmVkbyAnXG4gICAgcDYudGV4dENvbnRlbnQgPSAnRnJlc2ggbG9jYWwgc2hyaW1wIGluIG91ciBkZWxpY2lvdXMgY3JlYW15IFBhcm1lc2FuIGNoZWVzZSBzYXVjZSwgdG9zc2VkIHdpdGggcGFzdGEuJztcblxuICAgIGxpMS5hcHBlbmRDaGlsZChwMSk7XG4gICAgbGkyLmFwcGVuZENoaWxkKHAyKTtcbiAgICBsaTMuYXBwZW5kQ2hpbGQocDMpO1xuICAgIGxpNC5hcHBlbmRDaGlsZChwNCk7XG4gICAgbGk1LmFwcGVuZENoaWxkKHA1KTtcbiAgICBsaTYuYXBwZW5kQ2hpbGQocDYpO1xuXG4gICAgbGk3LnRleHRDb250ZW50ID0gJyQgMTQuNTAgLyAyMC45NSc7XG4gICAgbGk4LnRleHRDb250ZW50ID0gJyQgMTQuNTAgLyAyMC45NSc7XG4gICAgbGk5LnRleHRDb250ZW50ID0gJyQgMTQuNTAgLyAyMC45NSc7XG4gICAgbGkxMC50ZXh0Q29udGVudCA9ICckIDguOTUgLyAxMi45OSc7XG4gICAgbGkxMS50ZXh0Q29udGVudCA9ICckIDE1Ljk1IC8gMjMuNTAnO1xuICAgIGxpMTIudGV4dENvbnRlbnQgPSAnJCAxMS43NSAvIDE2LjQwJztcblxuICAgIGNoaWxkRGl2LmFwcGVuZENoaWxkKGxpMSk7XG4gICAgY2hpbGREaXYuYXBwZW5kQ2hpbGQobGk3KTtcbiAgICBjaGlsZERpdi5hcHBlbmRDaGlsZChsaTIpO1xuICAgIGNoaWxkRGl2LmFwcGVuZENoaWxkKGxpOCk7XG4gICAgY2hpbGREaXYuYXBwZW5kQ2hpbGQobGkzKTtcbiAgICBjaGlsZERpdi5hcHBlbmRDaGlsZChsaTkpO1xuICAgIGNoaWxkRGl2LmFwcGVuZENoaWxkKGxpNCk7XG4gICAgY2hpbGREaXYuYXBwZW5kQ2hpbGQobGkxMCk7XG4gICAgY2hpbGREaXYuYXBwZW5kQ2hpbGQobGk1KTtcbiAgICBjaGlsZERpdi5hcHBlbmRDaGlsZChsaTExKTtcbiAgICBjaGlsZERpdi5hcHBlbmRDaGlsZChsaTYpO1xuICAgIGNoaWxkRGl2LmFwcGVuZENoaWxkKGxpMTIpO1xuXG4gICAgZGl2LmFwcGVuZENoaWxkKGgyKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoY2hpbGREaXYpO1xuXG4gICAgcmV0dXJuIGRpdjtcbn1cblxuZnVuY3Rpb24gbWVudVNhbGFkKCkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjb25zdCBjaGlsZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBjb25zdCB1bFByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBjb25zdCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBwMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBwNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBsaTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGxpMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgbGkzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBsaTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGxpNyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgbGk4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBsaTkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGxpMTAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ21lbnUtc2FsYWQnKTtcbiAgICBjaGlsZERpdi5jbGFzc0xpc3QuYWRkKCdwYXN0YXMtbGlzdCcpO1xuICAgIHVsLmNsYXNzTGlzdC5hZGQoJ2ZsYXZvcnMnKTtcbiAgICB1bFByaWNlLmNsYXNzTGlzdC5hZGQoJ3ByaWNlcy1wYXN0YXMnKTtcblxuICAgIGgyLnRleHRDb250ZW50ID0gJ1NBTEFEUyc7XG5cbiAgICBsaTEudGV4dENvbnRlbnQgPSAnQ2Flc2FyIFNhbGFkJ1xuICAgIHAxLnRleHRDb250ZW50ID0gJ1JvbWFpbmUgTGV0dHVjZSwgUGFybWVzYW4gUm9tYW5vIENoZWVzZSwgSG9tZW1hZGUgR2FybGljIENyb3V0b25zLSBTZXJ2ZWQgd2l0aCBIb3VzZSBNYWRlIENhZXNhciBEcmVzc2luZyc7XG4gICAgbGkyLnRleHRDb250ZW50ID0gJ01peGVkIEdyZWVuIFNhbGFkJ1xuICAgIHAyLnRleHRDb250ZW50ID0gJ01peGVkIEdyZWVucywgVG9tYXRvLCBPbmlvbnMsIFBlcHBlcm9uY2luaSwgQ2VsZXJ5LCBSYWRpc2gsIE9saXZlcyAtIFNlcnZlZCB3aXRoIEhvdXNlIFZpbmFpZ3JldHRlIERyZXNzaW5nICc7XG4gICAgbGkzLnRleHRDb250ZW50ID0gXCJDYXJtaW5lJ3MgU2FsYWRcIjtcbiAgICBwMy50ZXh0Q29udGVudCA9ICdNaXhlZCBHcmVlbnMsIFRvbWF0bywgT25pb25zLCBQZXBwZXJvbmNpbmksIENlbGVyeSwgUmFkaXNoLCBPbGl2ZXMgVG9wcGVkIHcvIERpY2VkIE1lYXRzICYgQ2hlZXNlcyAtIFNlcnZlZCB3aXRoIEhvdXNlIFZpbmFpZ3JldHRlIERyZXNzaW5nICc7XG4gICAgbGk0LnRleHRDb250ZW50ID0gJ0NhcHJlc2UgU2FsYWQnXG4gICAgcDQudGV4dENvbnRlbnQgPSAnUmlwZW5lZCBUb21hdG9lcyB3aXRoIEJvY2NvbmNpbmksIFJlZCBPbmlvbnMsIENlcmlnbm9sYSAmIEthbGFtYXRhIE9saXZlcywgUm9hc3RlZCBSZWQgUGVwcGVycywgRnJlc2ggQmFzaWwsIE9saXZlIE9pbCAmIEFnZWQgUmVkIFdpbmUgVmluZWdhciBTYWx0LCBQZXBwZXIgYW5kIE9yZWdhbm8nO1xuXG4gICAgbGkxLmFwcGVuZENoaWxkKHAxKTtcbiAgICBsaTIuYXBwZW5kQ2hpbGQocDIpO1xuICAgIGxpMy5hcHBlbmRDaGlsZChwMyk7XG4gICAgbGk0LmFwcGVuZENoaWxkKHA0KTtcblxuXG4gICAgbGk3LnRleHRDb250ZW50ID0gJyQgMjkuOTUnO1xuICAgIGxpOC50ZXh0Q29udGVudCA9ICckIDI5Ljk1JztcbiAgICBsaTkudGV4dENvbnRlbnQgPSAnJCAzMy45NSc7XG4gICAgbGkxMC50ZXh0Q29udGVudCA9ICckIDMzLjk1JztcblxuICAgIGNoaWxkRGl2LmFwcGVuZENoaWxkKGxpMSk7XG4gICAgY2hpbGREaXYuYXBwZW5kQ2hpbGQobGk3KTtcbiAgICBjaGlsZERpdi5hcHBlbmRDaGlsZChsaTIpO1xuICAgIGNoaWxkRGl2LmFwcGVuZENoaWxkKGxpOCk7XG4gICAgY2hpbGREaXYuYXBwZW5kQ2hpbGQobGkzKTtcbiAgICBjaGlsZERpdi5hcHBlbmRDaGlsZChsaTkpO1xuICAgIGNoaWxkRGl2LmFwcGVuZENoaWxkKGxpNCk7XG4gICAgY2hpbGREaXYuYXBwZW5kQ2hpbGQobGkxMCk7XG4gICAgXG4gICAgZGl2LmFwcGVuZENoaWxkKGgyKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoY2hpbGREaXYpO1xuXG4gICAgcmV0dXJuIGRpdjtcbn1cblxuZnVuY3Rpb24gbWVudURyaW5rcygpIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgY29uc3QgaDNCZWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBjb25zdCBoM1NvZnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBjb25zdCBjaGlsZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNoaWxkRGl2MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHVsQmVlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgY29uc3QgdWxTb2Z0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBjb25zdCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBwMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBwNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBsaTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGxpMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgbGkzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBsaTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGxpNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgbGk2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBsaTcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGxpOCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgbGk5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBsaTEwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBsaTExID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdtZW51LWRyaW5rcycpO1xuICAgIGNoaWxkRGl2LmNsYXNzTGlzdC5hZGQoJ2RyaW5rcy1saXN0Jyk7XG4gICAgdWxCZWVyLmNsYXNzTGlzdC5hZGQoJ2JlZXInKTtcbiAgICB1bFNvZnQuY2xhc3NMaXN0LmFkZCgnc29mdCcpO1xuICAgIFxuICAgIGgyLnRleHRDb250ZW50ID0gJ0RSSU5LUyc7XG5cbiAgICBoM0JlZXIudGV4dENvbnRlbnQgPSAnQkVFUiAmIENJREVSJztcbiAgICBsaTEudGV4dENvbnRlbnQgPSAnSW5uaXMgYW5kIEd1bm4gQ3JhZnQgTGFnZXIg4oCiIDUuMjUnO1xuICAgIGxpMi50ZXh0Q29udGVudCA9ICdJbm5pcyBhbmQgR3VubiBSb3RhdGlvbmFsIOKAoiA1Ljc1JztcbiAgICBsaTMudGV4dENvbnRlbnQgPSAnUGVyb25pIE5hc3RybyBBenp1cm8g4oCiIDUuNzUnO1xuICAgIGxpNC50ZXh0Q29udGVudCA9ICdUZW5uZW50cyDigKIgNC41MCc7XG5cbiAgICBoM1NvZnRzLnRleHRDb250ZW50ID0gJ1NPRlRTJztcbiAgICBsaTUudGV4dENvbnRlbnQgPSAnQ29rZS9EaWV0IENva2UvQ29rZSBaZXJvIOKAoiAyLjc1JztcbiAgICBsaTYudGV4dENvbnRlbnQgPSAnSXJuIEJydS9EaWV0IElybiBCcnUg4oCiIDIuNzUnO1xuICAgIGxpNy50ZXh0Q29udGVudCA9ICdTcHJpdGUvRmFudGEg4oCiIDIuNzUnO1xuICAgIGxpOC50ZXh0Q29udGVudCA9ICdTb2RhIEZvbGsgUm9vdCBCZWVyL0NyZWFtIFNvZGEg4oCiIDMnO1xuICAgIGxpOS50ZXh0Q29udGVudCA9ICdBcHBsZXRpc2VyIOKAoiAyLjgwJztcbiAgICBsaTEwLnRleHRDb250ZW50ID0gJ0dpbmdlciBCZWVyIOKAoiAyLjc1JztcbiAgICBsaTExLnRleHRDb250ZW50ID0gJ1dhdGVyIFN0aWxsL1NwYXJrbGluZyDigKIgMi4yNS80LjI1JztcblxuICAgIHVsQmVlci5hcHBlbmRDaGlsZChoM0JlZXIpO1xuICAgIHVsQmVlci5hcHBlbmRDaGlsZChsaTEpO1xuICAgIHVsQmVlci5hcHBlbmRDaGlsZChsaTIpO1xuICAgIHVsQmVlci5hcHBlbmRDaGlsZChsaTMpO1xuICAgIHVsQmVlci5hcHBlbmRDaGlsZChsaTQpO1xuXG4gICAgdWxTb2Z0LmFwcGVuZENoaWxkKGgzU29mdHMpO1xuICAgIHVsU29mdC5hcHBlbmRDaGlsZChsaTUpO1xuICAgIHVsU29mdC5hcHBlbmRDaGlsZChsaTYpO1xuICAgIHVsU29mdC5hcHBlbmRDaGlsZChsaTcpO1xuICAgIHVsU29mdC5hcHBlbmRDaGlsZChsaTgpO1xuICAgIHVsU29mdC5hcHBlbmRDaGlsZChsaTkpO1xuICAgIHVsU29mdC5hcHBlbmRDaGlsZChsaTEwKTtcbiAgICB1bFNvZnQuYXBwZW5kQ2hpbGQobGkxMSk7XG5cbiAgICBjaGlsZERpdi5hcHBlbmRDaGlsZCh1bEJlZXIpO1xuICAgIGNoaWxkRGl2LmFwcGVuZENoaWxkKHVsU29mdCk7XG5cbiAgICBkaXYuYXBwZW5kQ2hpbGQoaDIpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChjaGlsZERpdik7XG5cbiAgICByZXR1cm4gZGl2O1xufSIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9QbGF5ZmFpckRpc3BsYXlTQy1Cb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ015IGZvbnQnO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVxcblxcbnVsIHtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICBjb2xvcjogIzJmMmQyYztcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDE3cHggMnB4ICNkYTlhNGM7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZDogIzE0MTQxNGQ0O1xcbn1cXG5cXG4uc2xvZ2FuIHtcXG4gICAgZm9udC1mYW1pbHk6ICdNeSBmb250JztcXG59XFxuXFxuLmd1aWRlcyB7XFxuICAgIGdhcDogNjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG4uZ3VpZGVzIGxpIGEge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5ndWlkZXMgbGkgYTo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IC01cHg7XFxuICAgIGxlZnQ6IDIlO1xcbiAgICB3aWR0aDogMDtcXG4gICAgaGVpZ2h0OiAwLjJyZW07XFxuICAgIGJhY2tncm91bmQ6ICNiZDExMTE7XFxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmd1aWRlcyBsaSBhOmhvdmVyOjphZnRlciB7XFxuICAgIHdpZHRoOiA5NiU7XFxufVxcblxcbi5idG4tY29udGFjdCwgLmJ0bi1vcmRlciwgLmJ0bi1waXp6YSxcXG4uYnRuLXBhc3RhLCAuYnRuLXNhbGFkLCAuYnRuLWRyaW5rcyxcXG4uYnRuLW9yZGVyLW9ubGluZSwgLmJ0bi1tZW51IHtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2RhOWE0YztcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJveC1zaGFkb3c6IDAgMCA0MHB4IDQwcHggI2RhOWE0YyBpbnNldCwgMCAwIDAgMCAjZGE5YTRjO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlLWluLW91dDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2UtaW4tb3V0O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XFxuICAgIHdpZHRoOiAxNjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5idG4tY29udGFjdCwgLmJ0bi1vcmRlci1vbmxpbmUsIC5idG4tb3JkZXIge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjYmQxMTExO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJveC1zaGFkb3c6IDAgMCA0MHB4IDQwcHggI2JkMTExMSBpbnNldCwgMCAwIDAgMCAjYmQxMTExO1xcbn1cXG5cXG4uYnRuLW9yZGVyLW9ubGluZSwgLmJ0bi1tZW51IHtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBtYXJnaW46IDIwcHg7XFxufVxcblxcbi5idG4tbWVudSB7XFxuICAgIGJveC1zaGFkb3c6IDAgMCA0MHB4IDQwcHggd2hpdGUgaW5zZXQsIDAgMCAwIDAgd2hpdGU7XFxuICAgIGNvbG9yOiAjYmQxMTExO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjYmQxMTExO1xcbn1cXG5cXG4uYnRuLXBhc3RhLCAuYnRuLXNhbGFkLCAuYnRuLWRyaW5rcyB7XFxuICAgIHdpZHRoOiAxMjBweDtcXG4gICAgYm94LXNoYWRvdzogMCAwIDQwcHggNDBweCB3aGl0ZSBpbnNldCwgMCAwIDAgMCB3aGl0ZTtcXG4gICAgY29sb3I6ICNkYTlhNGM7XFxufSBcXG5cXG4uYnRuLXBpenphIHtcXG4gICAgd2lkdGg6IDEyMHB4O1xcbn1cXG5cXG5hIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5ob21lIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2ZnIgNGZyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDUwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogNTBweDtcXG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcXG4gICAgaGVpZ2h0OiA5MHZoO1xcbn1cXG5cXG4uaW1nLWhvbWUge1xcbiAgICBoZWlnaHQ6IDM1MHB4O1xcbiAgICB3aWR0aDogMzUwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDQwMHB4O1xcbn1cXG5cXG4uc3ViLWltZy1ob21lIHtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxNTBweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMTBweDtcXG4gICAgdG9wOiA0NTBweDtcXG59XFxuXFxuLnNhbGFkLWltZy1ob21lIHtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxNTBweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogNDUwcHg7XFxuICAgIHRvcDogMzUwcHg7XFxufVxcblxcbi5tZW51IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgbWluLWhlaWdodDogOTB2aDtcXG4gICAgcGFkZGluZzogMCA1MHB4IDAgNTBweDtcXG59XFxuXFxuLmhlYWRlci1tZW51IHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDQwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1ib3R0b206IGRhc2hlZCAjOWQwYTBhO1xcbn1cXG5cXG4uYnRucy1tZW51IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLm1lbnUtcGl6emEge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5waXp6YXMtbGlzdCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ucGl6emFzLWxpc3QgbGk6bnRoLWNoaWxkKG9kZCkge1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbn1cXG5cXG5cXG5saSB7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuLmZsYXZvcnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4ucHJpY2VzIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLm1lbnUtcGFzdGEsIC5tZW51LXNhbGFkIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm1lbnUtcGFzdGEgPiBoMiwgLm1lbnUtc2FsYWQgPiBoMiB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnBhc3Rhcy1saXN0IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnBhc3Rhcy1saXN0IGxpOm50aC1jaGlsZChvZGQpIHtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuLnBhc3Rhcy1saXN0ID4gbGkgPiBwIHtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcblxcbi5wcmljZXMtcGFzdGFzIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5tZW51LWRyaW5rcyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmRyaW5rcy1saXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGdhcDogMTAwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uYmVlciA+IGxpLCAuc29mdCA+IGxpIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuXFxuaDIge1xcbiAgICBjb2xvcjogIzlkMGEwYTtcXG59XFxuXFxuLmxvY2F0aW9ucyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDUwcHg7XFxufVxcblxcbi5yb3cge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi5jb250YWN0LWhvdXJzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5ob3Vycy1saXN0IHtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLnJvdyBwIHtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI1cHgpIHtcXG4gICAgLmd1aWRlcyB7XFxuICAgICAgICBnYXA6IDEwcHg7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICB9XFxuXFxuICAgIC5idG4tY29udGFjdCB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAgIC5ob21lIHtcXG4gICAgICAgIHBhZGRpbmctdG9wOiA1MHB4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2ZnI7XFxuICAgIH1cXG5cXG4gICAgLmltZy1ob21lIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgLm1lbnUge1xcbiAgICAgICAgcGFkZGluZzogMCAxMHB4IDAgMTBweDsgXFxuICAgIH1cXG5cXG4gICAgLmJ0bnMtbWVudSB7XFxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIH1cXG5cXG4gICAgLmJlZXIge1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgfVxcbiAgICBcXG4gICAgLmxvY2F0aW9ucyB7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndl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QUFtQjtJQUNuQiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixVQUFVO0lBQ1YsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0k7UUFDSSxTQUFTO1FBQ1QsVUFBVTtJQUNkOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsMEJBQTBCO0lBQzlCOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLHNCQUFzQjtJQUMxQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTXkgZm9udCc7XFxuICAgIHNyYzogdXJsKCcuLi9mb250cy9QbGF5ZmFpckRpc3BsYXlTQy1Cb2xkLnR0ZicpO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbn1cXG5cXG51bCB7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgY29sb3I6ICMyZjJkMmM7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxN3B4IDJweCAjZGE5YTRjO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQ6ICMxNDE0MTRkNDtcXG59XFxuXFxuLnNsb2dhbiB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTXkgZm9udCc7XFxufVxcblxcbi5ndWlkZXMge1xcbiAgICBnYXA6IDYwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuLmd1aWRlcyBsaSBhIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uZ3VpZGVzIGxpIGE6OmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAtNXB4O1xcbiAgICBsZWZ0OiAyJTtcXG4gICAgd2lkdGg6IDA7XFxuICAgIGhlaWdodDogMC4ycmVtO1xcbiAgICBiYWNrZ3JvdW5kOiAjYmQxMTExO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5ndWlkZXMgbGkgYTpob3Zlcjo6YWZ0ZXIge1xcbiAgICB3aWR0aDogOTYlO1xcbn1cXG5cXG4uYnRuLWNvbnRhY3QsIC5idG4tb3JkZXIsIC5idG4tcGl6emEsXFxuLmJ0bi1wYXN0YSwgLmJ0bi1zYWxhZCwgLmJ0bi1kcmlua3MsXFxuLmJ0bi1vcmRlci1vbmxpbmUsIC5idG4tbWVudSB7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNkYTlhNGM7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBib3gtc2hhZG93OiAwIDAgNDBweCA0MHB4ICNkYTlhNGMgaW5zZXQsIDAgMCAwIDAgI2RhOWE0YztcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZS1pbi1vdXQ7XFxuICAgIHRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlLWluLW91dDtcXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogMTYwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIGhlaWdodDogMzVweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYnRuLWNvbnRhY3QsIC5idG4tb3JkZXItb25saW5lLCAuYnRuLW9yZGVyIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2JkMTExMTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3gtc2hhZG93OiAwIDAgNDBweCA0MHB4ICNiZDExMTEgaW5zZXQsIDAgMCAwIDAgI2JkMTExMTtcXG59XFxuXFxuLmJ0bi1vcmRlci1vbmxpbmUsIC5idG4tbWVudSB7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbn1cXG5cXG4uYnRuLW1lbnUge1xcbiAgICBib3gtc2hhZG93OiAwIDAgNDBweCA0MHB4IHdoaXRlIGluc2V0LCAwIDAgMCAwIHdoaXRlO1xcbiAgICBjb2xvcjogI2JkMTExMTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2JkMTExMTtcXG59XFxuXFxuLmJ0bi1wYXN0YSwgLmJ0bi1zYWxhZCwgLmJ0bi1kcmlua3Mge1xcbiAgICB3aWR0aDogMTIwcHg7XFxuICAgIGJveC1zaGFkb3c6IDAgMCA0MHB4IDQwcHggd2hpdGUgaW5zZXQsIDAgMCAwIDAgd2hpdGU7XFxuICAgIGNvbG9yOiAjZGE5YTRjO1xcbn0gXFxuXFxuLmJ0bi1waXp6YSB7XFxuICAgIHdpZHRoOiAxMjBweDtcXG59XFxuXFxuYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uaG9tZSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNmZyIDRmcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1MHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XFxuICAgIGhlaWdodDogOTB2aDtcXG59XFxuXFxuLmltZy1ob21lIHtcXG4gICAgaGVpZ2h0OiAzNTBweDtcXG4gICAgd2lkdGg6IDM1MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0MDBweDtcXG59XFxuXFxuLnN1Yi1pbWctaG9tZSB7XFxuICAgIGhlaWdodDogMTUwcHg7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTUwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDEwcHg7XFxuICAgIHRvcDogNDUwcHg7XFxufVxcblxcbi5zYWxhZC1pbWctaG9tZSB7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTUwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDQ1MHB4O1xcbiAgICB0b3A6IDM1MHB4O1xcbn1cXG5cXG4ubWVudSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIG1pbi1oZWlnaHQ6IDkwdmg7XFxuICAgIHBhZGRpbmc6IDAgNTBweCAwIDUwcHg7XFxufVxcblxcbi5oZWFkZXItbWVudSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiA0MHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItYm90dG9tOiBkYXNoZWQgIzlkMGEwYTtcXG59XFxuXFxuLmJ0bnMtbWVudSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5tZW51LXBpenphIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucGl6emFzLWxpc3Qge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLnBpenphcy1saXN0IGxpOm50aC1jaGlsZChvZGQpIHtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuXFxubGkge1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbi5mbGF2b3JzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLnByaWNlcyB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi5tZW51LXBhc3RhLCAubWVudS1zYWxhZCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5tZW51LXBhc3RhID4gaDIsIC5tZW51LXNhbGFkID4gaDIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5wYXN0YXMtbGlzdCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wYXN0YXMtbGlzdCBsaTpudGgtY2hpbGQob2RkKSB7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcblxcbi5wYXN0YXMtbGlzdCA+IGxpID4gcCB7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG5cXG4ucHJpY2VzLXBhc3RhcyB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4ubWVudS1kcmlua3Mge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5kcmlua3MtbGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6IDEwMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmJlZXIgPiBsaSwgLnNvZnQgPiBsaSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxufVxcblxcbmgyIHtcXG4gICAgY29sb3I6ICM5ZDBhMGE7XFxufVxcblxcbi5sb2NhdGlvbnMge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwYWRkaW5nOiA1MHB4O1xcbn1cXG5cXG4ucm93IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uY29udGFjdC1ob3VycyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4uaG91cnMtbGlzdCB7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi5yb3cgcCB7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNXB4KSB7XFxuICAgIC5ndWlkZXMge1xcbiAgICAgICAgZ2FwOiAxMHB4O1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgfVxcblxcbiAgICAuYnRuLWNvbnRhY3Qge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcblxcbiAgICAuaG9tZSB7XFxuICAgICAgICBwYWRkaW5nLXRvcDogNTBweDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNmZyO1xcbiAgICB9XFxuXFxuICAgIC5pbWctaG9tZSB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAgIC5tZW51IHtcXG4gICAgICAgIHBhZGRpbmc6IDAgMTBweCAwIDEwcHg7IFxcbiAgICB9XFxuXFxuICAgIC5idG5zLW1lbnUge1xcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICB9XFxuXFxuICAgIC5iZWVyIHtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgIH1cXG4gICAgXFxuICAgIC5sb2NhdGlvbnMge1xcbiAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9jc3Mvc3R5bGUuY3NzJztcbmltcG9ydCBCYWNrZ3JvdW5kIGZyb20gJy4vaW1nL2JhY2tncm91bmQuanBnJztcbmltcG9ydCB7IGhlYWRlciB9IGZyb20gXCIuL2hlYWRlclwiO1xuaW1wb3J0IHsgaG9tZSB9IGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCB7IG1lbnUgfSBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQgeyBsb2NhdGlvbnMgfSBmcm9tIFwiLi9sb2NhdGlvbnNcIjtcblxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuXG5ib2R5LnN0eWxlLmNzc1RleHQgKz0gYGJhY2tncm91bmQtaW1hZ2U6IHVybCgke0JhY2tncm91bmR9KTtgO1xuXG5jb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcigpKTtcbmNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZSgpKTtcbmNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudSgpKTtcbmNvbnRlbnQuYXBwZW5kQ2hpbGQobG9jYXRpb25zKCkpO1xuIl0sIm5hbWVzIjpbImhlYWRlciIsImRpdiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImgzIiwidWwiLCJsaTEiLCJsaTIiLCJsaTMiLCJhMSIsImEyIiwiYTMiLCJidXR0b24iLCJjbGFzc0xpc3QiLCJhZGQiLCJ0ZXh0Q29udGVudCIsImhyZWYiLCJhcHBlbmRDaGlsZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJob21lIiwicXVlcnlTZWxlY3RvciIsIm1lbnUiLCJsb2NhdGlvbnMiLCJzdHlsZSIsImNzc1RleHQiLCJQaXp6YSIsImNoaWxkRGl2IiwiY2hpbGREaXYyIiwiaDEiLCJwIiwiaW1nIiwic3JjIiwic3ViRGl2IiwiYnV0dG9uT3JkZXIiLCJidXR0b25NZW51IiwiaDNDb250YWN0IiwiaDNBZGRyZXNzIiwiaDNIb3VycyIsInAxIiwicDIiLCJwMyIsInA0IiwicDUiLCJwNiIsInA3IiwicDgiLCJwOSIsInAxMCIsInAxMSIsInAxMiIsInAxMyIsInAxNCIsInAxNSIsInAxNiIsInAxNyIsImxpNCIsImxpNSIsImxpNiIsImxpNyIsImlubmVySFRNTCIsImRpdkhlYWRlciIsImhlYWRlck1lbnUiLCJkaXZQaXp6YSIsIm1lbnVQaXp6YSIsImRpdlBhc3RhIiwibWVudVBhc3RhIiwiZGl2U2FsYWQiLCJtZW51U2FsYWQiLCJkaXZEcmlua3MiLCJtZW51RHJpbmtzIiwiZGl2MiIsImgyIiwiYnV0dG9uUGl6emEiLCJidXR0b25QYXN0YSIsImJ1dHRvblNhbGFkIiwiYnV0dG9uRHJpbmtzIiwiY2hpbGREaXZQaXp6YSIsInBNZW51UGl6emEiLCJwTWVudVBpenphMiIsInBNZW51UGl6emEzIiwiaDJNZW51UGl6emEiLCJsaTgiLCJsaTkiLCJsaTEwIiwibGkxMSIsImxpMTIiLCJ1bFByaWNlIiwiaDNCZWVyIiwiaDNTb2Z0cyIsInVsQmVlciIsInVsU29mdCIsIkJhY2tncm91bmQiLCJib2R5IiwiY29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=