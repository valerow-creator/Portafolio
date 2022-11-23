const btn = document.getElementById('button');

document.getElementById('form').addEventListener('submit', function (event) {
  event.preventDefault();

  btn.value = 'Sending...';

  const serviceID = 'default_service';
  const templateID = 'template_hkakt1w';

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = 'Send Email';
      alert('Sent!');
    },
    (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    }
  );
});

const btnEncinte = document.getElementById('button-encinte');

document
  .getElementById('form-encinte')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    btnEncinte.value = 'Sending...';

    const serviceID = 'default_service';
    const templateID = 'template_5u0qa0k';

    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        btnEncinte.value = 'Send Email';
        alert('Réservation Envoyé. Votre confirmation arrivera bientôt');
      },
      (err) => {
        btnEncinte.value = 'Send Email';
        alert(JSON.stringify(err));
      }
    );
  });

