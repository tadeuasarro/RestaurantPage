import row1 from './row1';
import row2 from './row2';
import row3 from './row3';
import row4 from './row4';

const container = () => {
  const container = document.createElement('div');

  container.appendChild(row1);
  container.appendChild(row2);
  container.appendChild(row3);
  container.appendChild(row4);

  return container;
};

export default container();