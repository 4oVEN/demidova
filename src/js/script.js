document.addEventListener('DOMContentLoaded', () => {
  const accordions = document.querySelectorAll('.services__item');

  accordions.forEach(el => {
    el.addEventListener('click', (e) => {
      const self = e.currentTarget;
      const control = self.querySelector('.services__subtitle');
      const content = self.querySelector('.services__items');

      self.classList.toggle('open');
    });
  });
});