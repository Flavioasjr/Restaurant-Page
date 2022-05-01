import './css/style.css';
import { header } from "./header";
import { home } from "./home";

const content = document.querySelector('.content');

content.appendChild(header());
content.appendChild(home());