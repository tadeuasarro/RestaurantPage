import menu_tab from './menu_tab.js';

const contact_tab = () => {

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

  const paragraph = document.createElement('p');
  paragraph.classList.add('mb-0', 'p-3', 'bg-dark', 'text-light', 'text-justify');
  paragraph.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lacinia massa ligula, egestas rutrum augue vehicula sed. Morbi luctus eros at mattis blandit. Donec imperdiet suscipit quam. Pellentesque feugiat pharetra blandit. Aenean vitae pharetra arcu. In non ipsum elementum nisi fermentum vulputate non nec eros. Praesent sagittis ante a blandit semper. Morbi sit amet ex consectetur, euismod dui dapibus, eleifend nunc.";

  content.appendChild(paragraph);


  container.appendChild(navbar);
  container.appendChild (content);


  contact.addEventListener('click', function(){
    const small_container = document.getElementById('small_container');
    small_container.innerHTML = '';
    small_container.appendChild(contact_tab());
  });

  menu.addEventListener('click', function(){
    const small_container = document.getElementById('small_container');
    small_container.innerHTML = '';
    small_container.appendChild(menu_tab);
  });

  return container;

}

export default contact_tab();