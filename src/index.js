import './styles.css';
import nav from './navbar';
import main from './main/main';
import footer from './footer';

function component() {
  const element = document.createElement('div');
  element.id = 'content';

  element.appendChild(nav);
  element.appendChild(main);
  element.appendChild(footer);

  return element;
}

document.body.appendChild(component());