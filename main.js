// Smooth scroll for in-page links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', function(e){
    const href = this.getAttribute('href');
    if(href.length > 1 && document.querySelector(href)){
      e.preventDefault();
      document.querySelector(href).scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});

// Basic contact form validation
const form = document.getElementById('contact-form');
if(form){
  form.addEventListener('submit', function(e){
    e.preventDefault();
    const name = form.elements['name'].value.trim();
    const email = form.elements['email'].value.trim();
    const message = form.elements['message'].value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const errors = [];
    if(name.length < 2) errors.push('Please enter your name (at least 2 characters).');
    if(!emailRegex.test(email)) errors.push('Please enter a valid email address.');
    if(message.length < 10) errors.push('Message should be at least 10 characters.');
    const errBox = document.getElementById('form-errors');
    if(errors.length){
      errBox.innerText = errors.join(' ');
      errBox.style.display = 'block';
      return;
    }
    errBox.style.display = 'none';
    // Placeholder: integrate EmailJS/Formspree or your backend here
    form.reset();
    alert('Thanks! Your message passed validation. Integrate an API to send it.');
  });
}