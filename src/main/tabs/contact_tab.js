import menuTab from './menu_tab';
import header from '../header';;

const contactTab = () => {
  const local_container = document.createElement('div');
  local_container.classList.add('mb-3');

  const navbar = document.createElement('div');
  navbar.classList.add('d-flex', 'border-bottom');

  const contact = document.createElement('span');
  contact.classList.add('p-3', 'bg-dark', 'text-light');
  contact.innerHTML = 'Contact';
  contact.id = 'contact';

  const menu = document.createElement('span');
  menu.classList.add('p-3', 'bg-light', 'text-dark', 'border');
  menu.innerHTML = 'Menu';
  menu.id = 'menu';

  navbar.appendChild(menu);
  navbar.appendChild(contact);

  const content = document.createElement('div');

  const title = document.createElement('h3');
  title.innerHTML = 'Contact';
  title.classList.add('bg-dark', 'text-light', 'm-0', 'px-3', 'pt-3');

  const division = document.createElement('div');
  division.classList.add('mb-0', 'p-3', 'bg-dark', 'text-justify');

  const smaller_div = document.createElement('div');
  smaller_div.classList.add('bg-white', 'p-3');

  smaller_div.appendChild(header);
  division.appendChild(smaller_div);

  content.appendChild(title);
  content.appendChild(division);

  local_container.appendChild(navbar);
  local_container.appendChild(content);

  menu.addEventListener('click', () => {
    const smallContainer = document.getElementById('container');
    smallContainer.innerHTML = '';
    smallContainer.appendChild(menuTab);
  });

  return local_container;
};

export default contactTab();