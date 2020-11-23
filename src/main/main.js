import header from './header.js';
import container from './container/container.js';
import contact_tab from './tabs/contact_tab.js';

const main = () => {
  const element = document.createElement('main');
  element.classList.add('container');

  element.appendChild(header);
  element.appendChild(container);

  const small_container = document.createElement('div');
  small_container.appendChild(contact_tab);
  small_container.id = 'small_container'
  element.appendChild(small_container);

  return element;
}

export default main();