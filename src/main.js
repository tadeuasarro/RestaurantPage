import header from './header.js';
import container from './container.js';

const main = () => {
  const element = document.createElement('main');
  element.classList.add('container');

  element.appendChild(header);
  element.appendChild(container);

  return element;
}

export default main();