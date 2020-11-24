import menuTab from './tabs/menu_tab';

const main = () => {
  const element = document.createElement('main');
  element.classList.add('container', 'mt-3');
  element.id = 'container';

  element.appendChild(menuTab);

  return element;
};

export default main();