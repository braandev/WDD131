// Seleccionamos el botón y el menú
const menuBtn = document.querySelector('#menu-btn');
const nav = document.querySelector('.container-nav');

// Cuando se hace clic en el botón
menuBtn.addEventListener('click', () => {
  nav.classList.toggle('active'); // muestra o esconde el menú
  menuBtn.textContent = nav.classList.contains('active') ? '✖' : '☰'; // cambia el ícono
});
