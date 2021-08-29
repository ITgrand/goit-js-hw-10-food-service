import './css/styles.css';
import cards from './menuCards.hbs';
import listCards from './menu.json';


const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const listCardsMenu = document.querySelector('js-menu');
const listCardsItem = cards(listCards);
listCardsMenu.insertAdjacentHTML('beforeend', listCardsItem);