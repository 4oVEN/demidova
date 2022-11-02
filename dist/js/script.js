document.addEventListener('DOMContentLoaded', () => {
  const accordions = document.querySelectorAll('.services__item-inner');

  accordions.forEach(el => {
    el.addEventListener('click', (e) => {

      el.parentNode.classList.toggle('open')

      // console.log(el.parentNode.classList.contains('open'))

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

