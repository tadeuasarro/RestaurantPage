import contactTab from './contact_tab';
import container from '../container/container'

const menuTab = () => {
  const localContainer = document.createElement('div');
  localContainer.classList.add('mb-3');

  const navbar = document.createElement('div');
  navbar.classList.add('d-flex', 'border-bottom');

  const contact = document.createElement('span');
  contact.classList.add('p-3', 'bg-light', 'text-dark', 'border');
  contact.innerHTML = 'Contact';
  contact.id = 'contact';

  const menu = document.createElement('span');
  menu.classList.add('p-3', 'bg-dark', 'text-light');
  menu.innerHTML = 'Menu';
  menu.id = 'menu';

  navbar.appendChild(menu);
  navbar.appendChild(contact);

  const content = document.createElement('div');

  const title = document.createElement('h3');
  title.innerHTML = 'Menu';
  title.classList.add('bg-dark', 'text-light', 'm-0', 'px-3', 'pt-3');

  const division = document.createElement('p');
  division.classList.add('mb-0', 'p-3', 'bg-dark', 'text-justify');
  division.appendChild(container);

  content.appendChild(title);
  content.appendChild(division);

  localContainer.appendChild(navbar);
  localContainer.appendChild(content);

  contact.addEventListener('click', () => {
    const smallContainer = document.getElementById('container');
    smallContainer.innerHTML = '';
    smallContainer.appendChild(contactTab);
  });

  return localContainer;
};

export default menuTab();