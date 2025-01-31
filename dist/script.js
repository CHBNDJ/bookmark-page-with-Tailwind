
const buttons = document.querySelectorAll('.feature-button');
const tabs = document.querySelectorAll('.tab-content');


buttons.forEach(button => {
  button.addEventListener('click', () => {
    const targetId = button.getAttribute('data-target');

    tabs.forEach(tab => {
      if (tab.id === targetId) {
        tab.classList.remove('sm:hidden', 'xs:hidden', 'xxs:hidden', 'xxxs:hidden');
      } else {
        // Sinon, le cacher
        tab.classList.add('sm:hidden', 'xs:hidden', 'xxs:hidden', 'xxxs:hidden');
      }
    });

 
    buttons.forEach(btn => {
      btn.classList.remove('sm:focus:before:w-60');
    });

    // Ajouter la classe de focus au bouton cliqué
     button.classList.add('sm:focus:before:w-60');
  });
});





const accordionButtons = document.querySelectorAll('.accordion-button');

accordionButtons.forEach(button => {
  button.addEventListener('click', () => {
    const arrow = button.querySelector('.icon-arrow'); 
    const content = button.querySelector('.accordion-content');
    const path = arrow.querySelector('path');

    
    if (content.style.maxHeight) {

      content.style.maxHeight = null;
      arrow.style.transform = 'rotate(0deg)'; 
      path.setAttribute('stroke', '#5267DF'); 

    } else {
   
      content.style.maxHeight = content.scrollHeight + 'px';
      arrow.style.transform = 'rotate(180deg)'; 
      path.setAttribute('stroke', '#FA5959'); 
    }
  });
});




const email = document.getElementById('email');
const btn = document.getElementById('btn-input');
const errorMessage = document.getElementById('error-message');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const iconError = document.getElementById('error-icon');


btn.addEventListener('click', (e) => {
    if(email.value.match(emailRegex)) {
        errorMessage.textContent = '';
        email.style.border = '';
        errorMessage.style.width = '';
        errorMessage.style.height = '';
        errorMessage.style.background = '';
        iconError.classList.add('hidden');
    } else {
        e.preventDefault();
        errorMessage.textContent = 'Whoops, make sure it’s an email';
        email.style.border = '3px solid #FA5959';
        errorMessage.style.background = '#FA5959';
       
        if (window.innerWidth <= 425) { 
            errorMessage.style.width = '311px';
        } else {
            errorMessage.style.width = '300px';
        }

        errorMessage.style.height = '22px';
        iconError.classList.remove('hidden');
    }
})


email.addEventListener('input', () => {
    iconError.classList.add('hidden');
    errorMessage.textContent = '';
    email.style.border = '';
    errorMessage.style.width = '';
    errorMessage.style.height = '';
    errorMessage.style.background = '';
})




const iconHamburger = document.querySelector('.menu');
const navbar = document.querySelector('.navbar');
const overlay = document.querySelector('.overlay');
const logo = document.querySelector('.logo');
const iconClose = document.querySelector('.close');
const socialNetworks = document.querySelector('.social');


iconHamburger.addEventListener('click', () => {
    navbar.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
    logo.classList.toggle('hidden');
    iconClose.classList.toggle('hidden');
    socialNetworks.classList.toggle('flex');
    socialNetworks.classList.remove('hidden');
});

iconClose.addEventListener('click', () => {
    navbar.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
    logo.classList.toggle('hidden');
    iconClose.classList.toggle('hidden');
    socialNetworks.classList.toggle('hidden');
    socialNetworks.classList.remove('flex');
})






  




