import contact_tab from './contact_tab.js';
import menu_tab from './contact_tab.js';

const navbar = () => {

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

  navbar.appendChild(contact);
  navbar.appendChild(menu);

  contact.addEventListener('click', function(){
    const small_container = document.getElementById('small_container');
    small_container.innerHTML = '';
    console.log(small_container);
    small_container.appendChild(contact_tab);
  });

  menu.addEventListener('click', function(){
    const small_container = document.getElementById('small_container');
    small_container.innerHTML = '';
    console.log(small_container);
    small_container.appendChild(menu_tab);
  });

  return navbar;
}

export default navbar();