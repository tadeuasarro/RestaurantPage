const footer = () => {
  const footer = document.createElement('footer');
  footer.classList.add('text-center', 'text-light', 'bg-dark', 'p-3');

  const small = document.createElement('small');
  small.innerHTML = 'All rights reserved 2020';

  footer.innerHTML = "Coxinha's Heaven - ";
  footer.appendChild(small);

  return footer;
};

export default footer();