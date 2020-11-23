import header from './header';
import container from './container/container';
import contactTab from './tabs/contact_tab';

const main = () => {
  const element = document.createElement('main');
  element.classList.add('container');

  element.appendChild(header);
  element.appendChild(container);

  const smallContainer = document.createElement('div');
  smallContainer.appendChild(contactTab);
  smallContainer.id = 'small_container';
  element.appendChild(smallContainer);

  return element;
};

export default main();