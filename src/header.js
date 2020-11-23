const header = () => {

  const empty_division = document.createElement('div');

  const header_image = document.createElement('div');
  header_image.classList.add('header-image');

  const par_container = document.createElement('div');
  par_container.classList.add('text-center', 'p-3', 'h4', 'mb-0')

  const par1 = document.createElement('p');
  par1.innerHTML = "Welcome to Coxinha's Heaven!";

  const par2 = document.createElement('p');
  par2.innerHTML = "Our business is totally dedicated to this Brazilian cousine delicacy.";
  par2.classList.add('mb-0');

  par_container.appendChild(par1);
  par_container.appendChild(par2);

  empty_division.appendChild(header_image);
  empty_division.appendChild(par_container);

  return(empty_division);

}

export default header();