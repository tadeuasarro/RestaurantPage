import menuTab from './menu_tab';

const contactTab = () => {
  const container = document.createElement('div');
  container.classList.add('mb-3');

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

  navbar.appendChild(contact);
  navbar.appendChild(menu);

  const content = document.createElement('div');

  const title = document.createElement('h3');
  title.innerHTML = 'Contact';
  title.classList.add('bg-dark', 'text-light', 'm-0', 'px-3', 'pt-3');

  const paragraph = document.createElement('p');
  paragraph.classList.add('mb-0', 'p-3', 'bg-dark', 'text-light', 'text-justify');
  paragraph.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lacinia massa ligula, egestas rutrum augue vehicula sed. Morbi luctus eros at mattis blandit. Donec imperdiet suscipit quam. Pellentesque feugiat pharetra blandit. Aenean vitae pharetra arcu. In non ipsum elementum nisi fermentum vulputate non nec eros. Praesent sagittis ante a blandit semper. Morbi sit amet ex consectetur, euismod dui dapibus, eleifend nunc.';

  content.appendChild(title);
  content.appendChild(paragraph);

  container.appendChild(navbar);
  container.appendChild(content);

  menu.addEventListener('click', () => {
    const smallContainer = document.getElementById('small_container');
    smallContainer.innerHTML = '';
    smallContainer.appendChild(menuTab);
  });

  return container;
};

export default contactTab();