import cards from './cardSample.hbs';
import linkCards from './menu.json';
import './css/styles.css';

 
const listMenu = document.querySelector('.js-menu');

const elementsItem = cards(linkCards);
listMenu.insertAdjacentHTML('beforeend', elementsItem);


const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};


const buttonEl = document.querySelector('.theme-switch__toggle');
const toolBarEl = document.querySelector('.toolbar');

document.body.classList.add('light-theme');

function changeOnDarkTheme() {
  if (localStorage.getItem('theme') === 'dark-theme') {
    buttonEl.checked = true;
    document.body.classList.add('dark-theme');
  }
}

function changeTheme(event) {
  event.preventDefault();
  if (!event.target.checked) {
    document.body.classList.replace('dark-theme', 'light-theme');
    localStorage.removeItem('theme');
    localStorage.setItem('theme', Theme.LIGHT);
  } else {
    document.body.classList.replace('light-theme', 'dark-theme');
    localStorage.setItem('theme', Theme.DARK);
  }
}

changeOnDarkTheme();
toolBarEl.addEventListener('change', changeTheme);