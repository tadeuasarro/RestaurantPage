const row3 = () => {
  const row3 = document.createElement('div');
  row3.classList.add('row', 'mb-3');

  const row3col1 = document.createElement('div');
  row3col1.classList.add('col-6', 'd-flex', 'justify-content-center', 'align-items-center');

  const row3col1par = document.createElement('p');
  row3col1par.classList.add('h4', 'text-center');
  row3col1par.innerHTML = "For small social events, birthday parties, as a delicious snack to binge-watch your favorite series. We'll deliver it to you!";

  row3col1.appendChild(row3col1par);

  const row3col2 = document.createElement('div');
  row3col2.classList.add('col-6');

  const image = document.createElement('div');
  image.classList.add('image3-display');
  row3col2.appendChild(image);

  row3.appendChild(row3col1);
  row3.appendChild(row3col2);

  return row3;
};

export default row3();