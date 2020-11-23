const row2 = () => {
  const row2 = document.createElement('div');
  row2.classList.add('row', 'mb-3')

  const row2col1 = document.createElement('div');
  row2col1.classList.add('col-6', 'd-flex', 'justify-content-center', 'align-items-center');

  const row2col1par = document.createElement('p');
  row2col1par.classList.add('h4', 'text-center');
  row2col1par.innerHTML = "Crispy and crunchy, our coxinhas are made filled with love, according to an old family recipe.";

  row2col1.appendChild(row2col1par);

  const row2col2 = document.createElement('div');
  row2col2.classList.add('col-6');

  const image = document.createElement('div');
  image.classList.add('image2-display');
  row2col2.appendChild(image);

  row2.appendChild(row2col2);
  row2.appendChild(row2col1);

  return row2;
}

export default row2();