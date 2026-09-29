const form = document.querySelector('#report-form');
const message = document.querySelector('#form-message');
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  message.textContent = 'Il salvataggio sarà disponibile quando lo schema MySQL Aiven sarà stato verificato.';
});
