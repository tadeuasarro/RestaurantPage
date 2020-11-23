import _ from 'lodash';
import './styles.css';
import nav from './navbar.js';
import main from './main/main.js';
import footer from './footer.js';

function component() {

  const element = document.createElement('div');
  element.id = 'content';

  element.appendChild(nav);
  element.appendChild(main);
  element.appendChild(footer);

  return element;
}

document.body.appendChild(component());