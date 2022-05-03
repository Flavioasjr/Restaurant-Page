import './css/style.css';
import Background from './img/background.jpg';
import { header } from "./header";
import { home } from "./home";
import { menu } from "./menu";
import { locations } from "./locations";

const body = document.querySelector('body');
const content = document.querySelector('.content');

body.style.cssText += `background-image: url(${Background});`;

content.appendChild(header());
content.appendChild(home());
content.appendChild(menu());
content.appendChild(locations());
