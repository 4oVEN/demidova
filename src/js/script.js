document.addEventListener('DOMContentLoaded', () => {
  const accordions = document.querySelectorAll('.services__item');

  accordions.forEach(el => {
    el.addEventListener('click', (e) => {
      const self = e.currentTarget;
      // const control = self.querySelector('.services__subtitle');
      // const content = self.querySelector('.services__items');

      self.classList.toggle('open');
    });
  });

  //form

  const form = document.getElementById('form');
  form.addEventListener('submit', formSend);

  async function formSend(e){
    e.preventDefault();

    let formData = new FormData(form);
    let response = await fetch('mailer/smart.php', {
      method: 'POST',
      body: formData
    });
    if (response.ok){
      form.reset();
    }else {
      alert('Ошибка!');
    }
  }
});

