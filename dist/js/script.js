document.addEventListener('DOMContentLoaded', () => {
  const accordions = document.querySelectorAll('.services__item-inner');

  accordions.forEach(el => {
    el.addEventListener('click', (e) => {
      // const self = e.currentTarget;
      // const control = self.querySelector('.services__subtitle');
      // const content = self.querySelector('.services__items');

      // self.classList.toggle('open');

      console.log(el)

      el.parentNode.classList.toggle('open')

      console.log(el.parentNode.classList.contains('open'))

      // if (el.parentNode.classList.contains('open')) {
      //   el.closest('.services__wrapper').classList.add('parent')

      // } else {
      //   el.closest('.services__wrapper').classList.remove('parent')
      // }
    });
  });

  //form

  const form = document.getElementById('form');
  form.addEventListener('submit', formSend);

  async function formSend(e) {
    e.preventDefault();

    let formData = new FormData(form);
    let response = await fetch('mailerr/smartt.php', {
      method: 'POST',
      body: formData
    });
    if (response.ok) {
      form.reset();
    } else {
      alert('Ошибка!');
    }
  }
});

