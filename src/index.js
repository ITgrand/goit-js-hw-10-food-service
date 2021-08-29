import cards from './cardSample.hbs';
import linksCards from './menu.json';
import './css/styles.css';



const listMenu = document.querySelector('.js-menu');
const elementsItem = cards(linksCards);
listMenu.insertAdjacentHTML('beforeend', elementsItem);




const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

// document.body.classList.add('dark-theme');