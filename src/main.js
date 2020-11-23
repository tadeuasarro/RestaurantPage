const main = () => {
  const element = document.createElement('main');
  element.classList.add('container');

  const empty_division = document.createElement('div');

  const header_image = document.createElement('div');
  header_image.classList.add('header-image');

  empty_division.appendChild(header_image);

  const container = document.createElement('div');

  const row1 = document.createElement('div');
  row1.classList.add('row', 'mb-3')

  const row1col1 = document.createElement('div');
  row1col1.classList.add('col-6', 'd-flex', 'justify-content-center', 'align-items-center');

  const row1col1par = document.createElement('p');
  row1col1par.classList.add('h4', 'text-center');
  row1col1par.innerHTML = 'May it be traditional, veggie, spicy or anything you like. We offer over 40 different filling options.';

  row1col1.appendChild(row1col1par);

  row1.appendChild(row1col1);

  const row1col2 = document.createElement('div');
  row1col2.classList.add('col6');



  const row2 = document.createElement('div');
  row2.classList.add('row', 'mb-3')


  const row3 = document.createElement('div');
  row3.classList.add('row', 'mb-3')


  const row4 = document.createElement('div');
  row4.classList.add('row', 'mb-3')

  container.appendChild(row1);
  container.appendChild(row2);
  container.appendChild(row3);
  container.appendChild(row4);

  element.appendChild(empty_division);
  element.appendChild(container);

  return element;
}

export default main();