import contactTab from './contact_tab';

const menuTab = () => {
  const container = document.createElement('div');
  container.classList.add('mb-3');

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

  const content = document.createElement('div');

  const title = document.createElement('h3');
  title.innerHTML = 'Menu';
  title.classList.add('bg-dark', 'text-light', 'm-0', 'px-3', 'pt-3');

  const paragraph = document.createElement('p');
  paragraph.classList.add('mb-0', 'p-3', 'bg-dark', 'text-light', 'text-justify');
  paragraph.innerHTML = 'Nullam nisl risus, accumsan at justo et, dapibus tristique sem. Phasellus pulvinar congue erat at suscipit. Sed a dolor posuere, egestas eros sed, imperdiet mauris. Curabitur finibus vel sem efficitur mollis. Nam vitae ante justo. Sed sollicitudin auctor diam, iaculis ullamcorper augue consectetur quis. Mauris libero augue, suscipit quis lacus non, feugiat gravida ipsum. Curabitur vitae dignissim nunc, et vehicula sem. Proin iaculis fringilla orci eu scelerisque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam sit amet lorem pharetra, vehicula nibh bibendum, vulputate sapien. Cras faucibus libero at lectus mollis pellentesque.';

  content.appendChild(title);
  content.appendChild(paragraph);

  container.appendChild(navbar);
  container.appendChild(content);

  contact.addEventListener('click', () => {
    const smallContainer = document.getElementById('small_container');
    smallContainer.innerHTML = '';
    smallContainer.appendChild(contactTab);
  });

  return container;
};

export default menuTab();