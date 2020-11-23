import row1 from './row1.js';
import row2 from './row2.js';
import row3 from './row3.js';
import row4 from './row4.js';

const container = () => {

  const container = document.createElement('div');

  container.appendChild(row1);
  container.appendChild(row2);
  container.appendChild(row3);
  container.appendChild(row4);

  return container;
}

export default container();