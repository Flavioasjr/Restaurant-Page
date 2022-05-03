export const header = () => {
    const div = document.createElement('div');
    const h3 = document.createElement('h3');
    const ul = document.createElement('ul');
    const li1 = document.createElement('li');
    const li2 = document.createElement('li');
    const li3 = document.createElement('li');
    const a1 = document.createElement('a');
    const a2 = document.createElement('a');
    const a3 = document.createElement('a');
    const button = document.createElement('button');
    
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

    a3.addEventListener('click', e => {
        e.preventDefault(); 
        const home = document.querySelector ('.home');
        const menu = document.querySelector ('.menu');
        const content = document.querySelector ('.content');

        home.style.cssText += 'display: none;';
        menu.style.cssText += 'display: block;';
        content.style.cssText += 'background: #eff1f3';
    });

    a1.addEventListener('click', e => {
        e.preventDefault(); 
        const home = document.querySelector ('.home');
        const menu = document.querySelector ('.menu');
        const content = document.querySelector ('.content');
                  
        home.style.cssText += 'display: grid;';
        menu.style.cssText += 'display: none;';
        content.style.cssText += 'background: linear-gradient(to right, #eff1f3 70%, #37342c 30%);';
    });

    return div;
}