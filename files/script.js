window.addEventListener('load', () => {
  AOS.init();
  const loader = document.querySelector('.loader');
  loader.classList.add('loader-hidden');
  loader.addEventListener('transitioned', () => {
    document.body.removeChild('loader');
  });
});
