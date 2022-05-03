import './css/style.css';
import { header } from "./header";
import { home } from "./home";
import { menu } from "./menu";

const content = document.querySelector('.content');

content.appendChild(header());
content.appendChild(home());
content.appendChild(menu());
