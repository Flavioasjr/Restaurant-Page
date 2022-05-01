import Pizza from './img/pizza.jpg';

export const home = () => {
    const div = document.createElement('div');
    const childDiv = document.createElement('div');
    const childDiv2 = document.createElement('div');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');
    const img = document.createElement('img');
    const button = document.createElement('button');

    div.classList.add('home');
    img.classList.add('img-home');
    button.classList.add('btn-order');
    
    h1.textContent = 'GOOD FOOD BRINGS GENUINE HAPINESS';
    p.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil dicta impedit dolorem aspernatur at reprehenderit';
    button.textContent = 'Place an order';

    img.src = Pizza;

    childDiv.appendChild(h1);
    childDiv.appendChild(p);
    childDiv.appendChild(button);
    childDiv2.appendChild(img);
    div.appendChild(childDiv);
    div.appendChild(childDiv2);

    return div;
}