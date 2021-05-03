

const closeButton = document.getElementById("close-button");

closeButton.addEventListener("ontouchstart", () => {
  responsive.classList.toggle("hidden");
});



const dropDown = document.getElementById("responsive");

dropDown.addEventListener("ontouchstart", () => {
  responsive.classList.toggle("hidden");
});





//EmailJS
const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();
   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_tngtc2q';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});