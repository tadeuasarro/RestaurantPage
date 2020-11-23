const row4 = () => {
  const row4 = document.createElement('div');
  row4.classList.add('row', 'mb-3')

  const row4col1 = document.createElement('div');
  row4col1.classList.add('col-6', 'd-flex', 'justify-content-center', 'align-items-center');

  const row4col1par = document.createElement('p');
  row4col1par.classList.add('h4', 'text-center');
  row4col1par.innerHTML = "Wait no more. ASK RIGHT NOW!";

  row4col1.appendChild(row4col1par);

  const row4col2 = document.createElement('div');
  row4col2.classList.add('col-6');

  const image = document.createElement('div');
  image.classList.add('image4-display');
  row4col2.appendChild(image);

  row4.appendChild(row4col2);
  row4.appendChild(row4col1);

  return row4;
}

export default row4();