import elements from './elements.hbs';
import ingredients from './menu.json';

import './css/styles.css';

const listMenu = document.querySelector('.js-menu');

const elementsItem = elements(ingredients);
listMenu.insertAdjacentHTML('beforeend', elementsItem);

