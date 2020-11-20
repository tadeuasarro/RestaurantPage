import _ from 'lodash';
import nav from './navbar.js';

function component() {

  const element = document.createElement('div');
  element.id = 'content';

  element.appendChild(nav);
  // content.appendChild(section);
  // content.appendChild(footer);

  return element;
}

document.body.appendChild(component());