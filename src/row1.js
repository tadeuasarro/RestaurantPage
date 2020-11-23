const row1 = () => {
  const row1 = document.createElement('div');
  row1.classList.add('row', 'mb-3')

  const row1col1 = document.createElement('div');
  row1col1.classList.add('col-6', 'd-flex', 'justify-content-center', 'align-items-center');

  const row1col1par = document.createElement('p');
  row1col1par.classList.add('h4', 'text-center');
  row1col1par.innerHTML = 'May it be traditional, veggie, spicy or anything you like. We offer over 40 different filling options.';

  row1col1.appendChild(row1col1par);

  const row1col2 = document.createElement('div');
  row1col2.classList.add('col-6');

  const image = document.createElement('div');
  image.classList.add('image1-display');
  row1col2.appendChild(image);

  row1.appendChild(row1col1);
  row1.appendChild(row1col2);

  return row1;
}

export default row1();