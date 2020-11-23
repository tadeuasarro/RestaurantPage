const nav = () => {
  const navbar = document.createElement('nav');
  navbar.classList.add('bg-dark', 'py-2');

  const h1 = document.createElement('h1');
  h1.innerHTML = "Coxinha's Heaven";
  h1.classList.add('h3', 'text-light', 'ml-3');
  navbar.appendChild(h1);

  return navbar;
};

export default nav();