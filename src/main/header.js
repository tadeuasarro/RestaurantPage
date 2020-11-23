const header = () => {
  const emptyDivision = document.createElement('div');

  const headerImage = document.createElement('div');
  headerImage.classList.add('header-image');

  const parContainer = document.createElement('div');
  parContainer.classList.add('text-center', 'p-3', 'h4', 'mb-0');

  const par1 = document.createElement('p');
  par1.innerHTML = "Welcome to Coxinha's Heaven!";

  const par2 = document.createElement('p');
  par2.innerHTML = 'Our business is totally dedicated to this Brazilian cousine delicacy.';
  par2.classList.add('mb-0');

  parContainer.appendChild(par1);
  parContainer.appendChild(par2);

  emptyDivision.appendChild(headerImage);
  emptyDivision.appendChild(parContainer);

  return (emptyDivision);
};

export default header();