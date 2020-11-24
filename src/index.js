import './styles.css';
import nav from './navbar';
import main from './main/main';
import footer from './footer';

const component = () => {
  const element = document.getElementById('content');

  element.appendChild(nav);
  element.appendChild(main);
  element.appendChild(footer);

  return element;
};

document.body.appendChild(component());