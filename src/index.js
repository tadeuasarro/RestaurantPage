import _ from 'lodash';
import navbar from './navbar.js';

function component() {

  const element = document.getElementbyId('content');
  element.appendChild(navbar);
  navbar
  // content.appendChild(section);
  // content.appendChild(footer);

  return element;
}

document.body.appendChild(component());