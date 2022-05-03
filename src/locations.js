export const locations = () => {
    const div = document.createElement('div');
    const subDiv = document.createElement('div');
    const buttonOrder = document.createElement('button');
    const buttonMenu = document.createElement('button');
    const childDiv = document.createElement('div');
    const childDiv2 = document.createElement('div');
    const h3Contact = document.createElement('h3');
    const h3Address = document.createElement('h3');
    const h3Hours = document.createElement('h3');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    const p4 = document.createElement('p');
    const p5 = document.createElement('p');
    const p6 = document.createElement('p');
    const p7 = document.createElement('p');
    const p8 = document.createElement('p');
    const p9 = document.createElement('p');
    const p10 = document.createElement('p');
    const p11 = document.createElement('p');
    const p12 = document.createElement('p');
    const p13 = document.createElement('p');
    const p14 = document.createElement('p');
    const p15 = document.createElement('p');
    const p16 = document.createElement('p');
    const p17 = document.createElement('p');
    const ul = document.createElement('ul');
    const li1 = document.createElement('li');
    const li2 = document.createElement('li');
    const li3 = document.createElement('li');
    const li4 = document.createElement('li');
    const li5 = document.createElement('li');
    const li6 = document.createElement('li');
    const li7 = document.createElement('li');

    div.classList.add('locations');
    subDiv.classList.add('contact-hours');
    buttonOrder.classList.add('btn-order-online');
    buttonMenu.classList.add('btn-menu');
    ul.classList.add('hours-list')
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
    p1.innerHTML = `Telephone <br> xxx.xxx.xxxx`;
    p2.innerHTML = `Take Out <br> yyy.yyy.yyyy`;

    h3Address.textContent = 'Address';
    p3.innerHTML = `2409 Raintree Boulevard <br> Kokomo, IN 46901`;

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