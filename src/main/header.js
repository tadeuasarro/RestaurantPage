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

  const contact = document.createElement('p');

  const email = document.createElement('p');
  email.innerHTML = 'Email: sample@email.com';
  contact.appendChild(email);

  const phone = document.createElement('p');
  phone.innerHTML = 'Phone: (555) 555-1234';
  contact.appendChild(phone);

  const adress = document.createElement('p');
  adress.innerHTML = 'Adress: Sample Street - 123. Fantasy City';
  contact.appendChild(adress);

  parContainer.appendChild(par1);
  parContainer.appendChild(par2);
  parContainer.appendChild(contact);

  emptyDivision.appendChild(headerImage);
  emptyDivision.appendChild(parContainer);

  return (emptyDivision);
};

export default header();